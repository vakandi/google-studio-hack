#!/usr/bin/env python3
"""Flow Automation REST API — stdlib only, zero pip dependencies.
Extension polls this server for tasks; external tools (curl, Python) submit via HTTP.
"""
import json, os, time, uuid, threading, urllib.request
from http.server import ThreadingHTTPServer, BaseHTTPRequestHandler
from pathlib import Path

PORT = 9876
RESULTS_DIR = Path(__file__).parent / "results"
RESULTS_DIR.mkdir(exist_ok=True)
_start_time = time.time()


class TaskStore:
    _lock = threading.Lock()
    _tasks: list = []

    @classmethod
    def add(cls, task: dict) -> dict:
        with cls._lock:
            task["created_at"] = time.time()
            task.setdefault("started_at", None)
            task.setdefault("completed_at", None)
            task.setdefault("result_urls", [])
            task.setdefault("result_files", [])
            cls._tasks.insert(0, task)
        return task

    @classmethod
    def get(cls, task_id: str) -> dict | None:
        with cls._lock:
            for t in cls._tasks:
                if t["id"] == task_id:
                    return dict(t)

    @classmethod
    def poll(cls) -> dict | None:
        with cls._lock:
            for t in cls._tasks:
                if t.get("status") == "pending":
                    t["status"] = "processing"
                    t["started_at"] = time.time()
                    return dict(t)

    @classmethod
    def update(cls, task_id: str, updates: dict) -> dict | None:
        with cls._lock:
            for t in cls._tasks:
                if t["id"] == task_id:
                    t.update(updates)
                    task = dict(t)
                    break
            else:
                return None
        # Auto-download result files in background
        if updates.get("status") == "completed" and updates.get("result_urls"):
            threading.Thread(target=cls._download_files, args=(task_id, updates["result_urls"]), daemon=True).start()
        return task

    @classmethod
    def _download_files(cls, task_id: str, urls: list):
        task_dir = RESULTS_DIR / task_id
        task_dir.mkdir(parents=True, exist_ok=True)
        saved = []
        for i, url in enumerate(urls):
            try:
                filename = url.rstrip("/").split("/")[-1].split("?")[0] or f"result_{i}.mp4"
                if not filename or "." not in filename:
                    filename = f"result_{i}.mp4"
                filepath = task_dir / filename
                urllib.request.urlretrieve(url, filepath)
                saved.append(filename)
                print(f"[Download] Saved {filename} ({filepath.stat().st_size}B) for task {task_id}")
            except Exception as e:
                print(f"[Download] Failed URL #{i} for task {task_id}: {e}")
        if saved:
            with cls._lock:
                for t in cls._tasks:
                    if t["id"] == task_id:
                        t.setdefault("result_files", []).extend(saved)
                        break

    @classmethod
    def all(cls) -> list:
        with cls._lock:
            return list(cls._tasks)

    @classmethod
    def delete(cls, task_id: str) -> bool:
        with cls._lock:
            for i, t in enumerate(cls._tasks):
                if t["id"] == task_id:
                    cls._tasks.pop(i)
                    return True
        return False


class Handler(BaseHTTPRequestHandler):
    def _send(self, data, status=200):
        body = json.dumps(data).encode()
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()
        self.wfile.write(body)

    def _read_body(self):
        length = int(self.headers.get("Content-Length", 0))
        return json.loads(self.rfile.read(length)) if length else {}

    def _send_file(self, filepath: Path):
        if not filepath.is_file():
            return self._send({"error": "file not found"}, 404)
        suffix = filepath.suffix.lower()
        mime = {"mp4": "video/mp4", "webm": "video/webm", "png": "image/png",
                "jpg": "image/jpeg", "jpeg": "image/jpeg", "gif": "image/gif",
                "mp3": "audio/mpeg", "wav": "audio/wav", "zip": "application/zip",
                "json": "application/json"}.get(suffix.lstrip("."), "application/octet-stream")
        size = filepath.stat().st_size
        self.send_response(200)
        self.send_header("Content-Type", mime)
        self.send_header("Content-Length", str(size))
        self.send_header("Content-Disposition", f'attachment; filename="{filepath.name}"')
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()
        with open(filepath, "rb") as f:
            self.wfile.write(f.read())

    def do_OPTIONS(self):
        self.send_response(204)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def _parsed_path(self):
        from urllib.parse import urlparse
        return urlparse(self.path).path

    def _query_params(self):
        from urllib.parse import urlparse, parse_qs
        return parse_qs(urlparse(self.path).query)

    def do_GET(self):
        p = self._parsed_path()
        if p == "/api/health":
            return self._send({
                "status": "ok", "port": PORT,
                "tasks_total": len(TaskStore.all()),
                "uptime_seconds": int(time.time() - _start_time)
            })
        if p == "/api/poll":
            task = TaskStore.poll()
            return self._send(task or {"empty": True})
        if p == "/api/queue":
            return self._send({"tasks": TaskStore.all()})
        if p.startswith("/api/results/") and p.endswith("/download"):
            parts = p.split("/")
            tid = parts[3]
            task = TaskStore.get(tid)
            if not task:
                return self._send({"error": "task not found"}, 404)
            task_dir = RESULTS_DIR / tid
            if not task_dir.is_dir():
                return self._send({"error": "no results"}, 404)
            qs = self._query_params()
            req_file = qs.get("file", [None])[0]
            if req_file:
                fp = task_dir / req_file
                if fp.is_file():
                    return self._send_file(fp)
                return self._send({"error": f"file '{req_file}' not found"}, 404)
            files = sorted(task_dir.iterdir())
            if not files:
                return self._send({"error": "no files"}, 404)
            return self._send_file(files[0])
        if self.path.startswith("/api/queue/"):
            tid = self.path.split("/")[-1]
            task = TaskStore.get(tid)
            if task:
                return self._send(task)
            return self._send({"error": "not found"}, 404)
        self._send({"error": "not found"}, 404)

    def do_POST(self):
        if self.path == "/api/generate":
            body = self._read_body()
            prompts = body.get("prompts", [])
            if not prompts and body.get("prompt"):
                prompts = [body["prompt"]]
            if not prompts:
                return self._send({"error": "prompts or prompt required"}, 400)
            task = {
                "id": body.get("id", uuid.uuid4().hex[:12]),
                "prompts": prompts,
                "mode": body.get("mode", "textToVideo"),
                "model": body.get("model", "Veo 3.1 - Fast"),
                "aspectRatio": body.get("aspectRatio", "16:9"),
                "outputCount": body.get("outputCount", 1),
                "videoOption": body.get("videoOption", "6s"),
                "images": body.get("images", []),
                "characters": body.get("characters", []),
                "speaker": body.get("speaker"),
                "concurrentPrompts": body.get("concurrentPrompts", 1),
                "promptDelaySecondsMin": body.get("promptDelaySecondsMin", 0),
                "promptDelaySecondsMax": body.get("promptDelaySecondsMax", 0),
                "status": "pending",
                "progress": 0,
                "error": None,
            }
            TaskStore.add(task)
            return self._send(task, 201)
        if self.path == "/api/result":
            body = self._read_body()
            tid = body.get("task_id")
            if not tid:
                return self._send({"error": "task_id required"}, 400)
            updates = {k: body[k] for k in ("status", "progress", "result_urls", "result_files", "error") if k in body}
            if body.get("status") in ("completed", "failed", "cancelled"):
                updates["completed_at"] = time.time()
            TaskStore.update(tid, updates)
            return self._send({"success": True})
        self._send({"error": "not found"}, 404)

    def do_DELETE(self):
        if self.path.startswith("/api/queue/"):
            tid = self.path.split("/")[-1]
            if TaskStore.delete(tid):
                return self._send({"success": True})
            return self._send({"error": "not found"}, 404)
        self._send({"error": "not found"}, 404)

    def do_PUT(self):
        p = self._parsed_path()
        # PUT /api/results/<id>/upload/<filename>
        if p.startswith("/api/results/") and "/upload/" in p:
            parts = p.split("/")
            tid = parts[3]
            filename = "/".join(parts[5:])
            task_dir = RESULTS_DIR / tid
            task_dir.mkdir(parents=True, exist_ok=True)
            filepath = task_dir / filename
            length = int(self.headers.get("Content-Length", 0))
            if length == 0:
                return self._send({"error": "empty content"}, 400)
            with open(filepath, "wb") as f:
                f.write(self.rfile.read(length))
            with TaskStore._lock:
                for t in TaskStore._tasks:
                    if t["id"] == tid:
                        if filename not in t.setdefault("result_files", []):
                            t["result_files"].append(filename)
                        break
            print(f"[Upload] Saved {filename} ({length}B) for task {tid}")
            return self._send({"success": True, "filename": filename, "size": length})
        self._send({"error": "not found"}, 404)

    def log_message(self, fmt, *args):
        if len(args) >= 3:
            print(f"[Server] {args[0]} {args[1]} {args[2]}")


def main():
    server = ThreadingHTTPServer(("127.0.0.1", PORT), Handler)
    print(f"[Server] Flow REST API running on http://127.0.0.1:{PORT}")
    print(f"[Server] Endpoints: POST /api/generate  GET /api/poll  GET /api/queue  POST /api/result  DELETE /api/queue/:id")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\n[Server] Shutting down")
        server.server_close()


if __name__ == "__main__":
    main()
