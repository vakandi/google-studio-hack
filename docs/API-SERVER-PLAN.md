# Flow Automation — REST API Server Mode

## Plan A→Z

### Overview

Add a **Network/Server mode** to the extension that exposes a REST API so any tool (curl, Python, Postman, etc.) can submit generation tasks programmatically. The extension becomes a local HTTP server with a task queue.

---

### Architecture

```
┌──────────────┐     WebSocket      ┌──────────────────────┐     HTTP/REST    ┌─────────────┐
│  Extension   │ ◄──────────────────►│  Companion Server    │ ◄──────────────►│  curl /     │
│  Service     │    ws://localhost   │  (Python single-file)│                 │  Python     │
│  Worker      │    :9877            │                      │  localhost:9876 │  scripts    │
│              │                    │  - WS server :9877   │                 │             │
└──────┬───────┘                    │  - HTTP API :9876    │                 └─────────────┘
       │                            └──────────────────────┘
       │ chrome.tabs.sendMessage("AUTO_FILL_FLOW")
       ▼
┌──────────────────────────────┐
│  Content Script (labs.google)│
│  - Creates project           │
│  - Configures mode/model     │
│  - Fills prompts             │
│  - Monitors generation       │
│  - Downloads results         │
└──────────────────────────────┘
```

**Why a companion server?** Chrome MV3 service workers cannot listen on TCP ports. A lightweight relay process translates HTTP → WebSocket.

**File**: `server.py` (~150 lines, Python stdlib + `websockets`)

---

### Phase 1 — REST API Endpoints

Base URL: `http://localhost:9876`

#### `POST /api/generate`

Submit a generation task.

**Request body:**

```json
{
  "mode": "textToVideo",
  "prompt": "a cat playing piano in a jazz bar",
  "model": "Veo 3.1 - Fast",
  "aspectRatio": "16:9",
  "outputCount": 1,
  "videoOption": "6s",
  "concurrentPrompts": 1,
  "promptDelaySecondsMin": 0,
  "promptDelaySecondsMax": 0,
  "images": []
}
```

**Parameters:**

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| `mode` | string | ✅ | — | Task type. See modes table below |
| `prompt` | string | ✅ | — | Text prompt. Multi-line = multiple prompts |
| `model` | string | ❌ | `"Veo 3.1 - Fast"` | AI model to use. See models table |
| `aspectRatio` | string | ❌ | `"16:9"` | `"16:9"`, `"1:1"`, `"9:16"`, `"4:3"`, `"3:4"` |
| `outputCount` | int | ❌ | `1` | Videos/images per prompt |
| `videoOption` | string | ❌ | `"6s"` | Duration: `"4s"`, `"6s"`, `"8s"`, `"10s"`, `"4s-concat"`, `"6s-concat"`, `"8s-concat"`, `"10s-concat"` |
| `images` | array | ❌ | `[]` | Input images `[{base64, name, mimeType}]` |
| `concurrentPrompts` | int | ❌ | `1` | How many prompts to run in parallel |
| `promptDelaySecondsMin` | int | ❌ | `0` | Min delay between prompts |
| `promptDelaySecondsMax` | int | ❌ | `0` | Max delay between prompts |
| `characters` | array | ❌ | `[]` | Character images for components-to-video mode |
| `speaker` | string | ❌ | `null` | Voiceover speaker |
| `agentMode` | string | ❌ | `null` | `"agentAutomation"` for agent mode |

**Modes:**

| Value | Description | Video Options | Image Options |
|-------|-------------|---------------|---------------|
| `textToVideo` | Text → Video | ✅ | ❌ |
| `imageToVideo` | Image(s) → Video | ✅ | ✅ |
| `componentsToVideo` | Image(s) + characters → Video | ✅ | ✅ |
| `textToImage` | Text → Image | ❌ | ✅ |
| `imageToImage` | Image → Image | ❌ | ✅ |
| `agentAutomation` | Agent mode | ✅ | ❌ |

**Models** (dynamically fetched from Google Flow, common values):

| Value | Type | Notes |
|-------|------|-------|
| `"Veo 3.1 - Fast"` | Video | Default |
| `"Veo 3.1 - Lite"` | Video | Lower quality, faster |
| `"Veo 3.1 - Fast [Lower Priority]"` | Video | Lower priority queue |
| `"Omni Flash"` | Video/Image | Multimodal |
| `"Imagen"` | Image | Image generation |

**Response:**

```json
{
  "success": true,
  "task_id": "abc-123"
}
```

---

#### `GET /api/queue`

List all tasks in the queue.

```json
{
  "tasks": [
    {
      "id": "abc-123",
      "mode": "textToVideo",
      "prompt": "a cat playing piano",
      "model": "Veo 3.1 - Fast",
      "status": "completed",
      "progress": 100,
      "result_urls": [
        "/api/results/abc-123/cat_piano_001.mp4"
      ],
      "error": null,
      "created_at": 1712345678,
      "completed_at": 1712345778
    }
  ]
}
```

**Status values:** `queued` → `processing` → `completed` | `failed` | `cancelled`

---

#### `GET /api/queue/:id`

Get a single task status.

---

#### `DELETE /api/queue/:id`

Cancel a queued task.

---

#### `GET /api/results/:id/download`

Download the result file. Returns the actual video/image binary.

---

#### `GET /api/health`

Server health check.

```json
{
  "status": "ok",
  "version": "1.0",
  "tasks_queued": 0,
  "tasks_completed": 5,
  "extension_connected": true
}
```

---

### Phase 2 — Side Panel UI (Settings Tab)

New section at the **bottom of the Settings tab** in the side panel:

```
┌─────────────────────────────────────────────────────┐
│  🌐 Server Mode                                     │
│                                                     │
│  Status:  ● Running on port 9876                    │
│                                                     │
│  ┌─────────────────────────────────────────────┐    │
│  │ http://localhost:9876                 [📋]   │    │
│  └─────────────────────────────────────────────┘    │
│                                                     │
│  [■ Stop Server]   [↻ Restart]                      │
│                                                     │
│  ─── Active Tasks ───                               │
│  #abc-123  txt2vid  ⏳ 45%    [Cancel]              │
│  #abc-124  txt2img  ✅ Done   [Download]            │
│  #abc-125  txt2vid  ❌ Failed [Logs]                │
│                                                     │
│  [↻ Refresh Queue]  Total: 3 | Done: 1 | Failed: 1 │
└─────────────────────────────────────────────────────┘
```

**Controls:**
- **Start/Stop Server toggle** — connects/disconnects WebSocket
- **URL display** — `http://localhost:9876` with copy button
- **Status indicator** — Running / Stopped / Error (color-coded)
- **Task queue list** — auto-refreshing list of all tasks
- **Cancel button** — cancel a queued/in-progress task
- **Download button** — download completed result file
- **Refresh button** — refresh the queue display

**File**: `index.html-B15jV9u5.js` (modify Settings tab render section)

---

### Phase 3 — Service Worker: WebSocket Client

**File**: `index.ts-DoSGWp_j.js`

Add to the existing `chrome.runtime.onMessage` handler:

#### Message: `SERVER_START`

```javascript
case "SERVER_START":
  // 1. Connect WebSocket to ws://localhost:9877
  // 2. On message: parse JSON command, add to queue, forward to content script
  // 3. On close: auto-reconnect with exponential backoff
  // Response: { success: true, url: "http://localhost:9876" }
```

#### Message: `SERVER_STOP`

```javascript
case "SERVER_STOP":
  // 1. Close WebSocket
  // 2. Clear queue
  // Response: { success: true }
```

#### Message: `QUEUE_GET`

```javascript
case "QUEUE_GET":
  // Response: { tasks: [...] }
```

#### Message: `QUEUE_CANCEL`

```javascript
case "QUEUE_CANCEL":
  // 1. Find task by id
  // 2. If queued → remove
  // 3. If processing → send cancel to content script
  // Response: { success: true }
```

#### WebSocket message handler:

```javascript
async function handleApiCommand(cmd) {
  // 1. Find existing tab on labs.google, or open one
  let tabs = await chrome.tabs.query({ url: "*://labs.google/*" });
  if (!tabs.length) {
    tabs = await chrome.tabs.create({ url: "https://labs.google/flow" });
    // Wait for page to load
  }

  // 2. Store task in chrome.storage.local queue
  const task = {
    id: cmd.id,
    mode: cmd.mode || "textToVideo",
    prompt: cmd.prompt,
    model: cmd.model || "Veo 3.1 - Fast",
    aspectRatio: cmd.aspectRatio || "16:9",
    outputCount: cmd.outputCount || 1,
    videoOption: cmd.videoOption || "6s",
    images: cmd.images || [],
    characters: cmd.characters || [],
    speaker: cmd.speaker || null,
    concurrentPrompts: cmd.concurrentPrompts || 1,
    promptDelaySecondsMin: cmd.promptDelaySecondsMin || 0,
    promptDelaySecondsMax: cmd.promptDelaySecondsMax || 0,
    status: "queued",
    progress: 0,
    result_urls: [],
    error: null,
    created_at: Date.now()
  };

  // 3. Send to content script (same payload as side panel's sendJob)
  chrome.tabs.sendMessage(tabs[0].id, {
    type: "AUTO_FILL_FLOW",
    payloads: transformPrompts(task),
    groupId: task.id,
    concurrentPrompts: task.concurrentPrompts,
    promptDelaySecondsMin: task.promptDelaySecondsMin,
    promptDelaySecondsMax: task.promptDelaySecondsMax
  });
}
```

**Keep-alive strategy:** Chrome MV3 service workers terminate after ~30s idle. Maintain connection with:
- `chrome.runtime.onSuspend` not reliable → periodic `fetch()` or WebSocket ping/pong every 20s
- Register a `chrome.alarms` periodic alarm to keep worker alive

---

### Phase 4 — Content Script: Completion Reporting

**File**: `index.ts-Bt6B9Lbt.js`

The content script already sends `PROMPT_GROUP_STATUS` messages. Enhance it to include **download URLs** when a video/image is generated:

```javascript
// In the download monitoring code, after successful download:
chrome.runtime.sendMessage({
  type: "PROMPT_GROUP_STATUS",
  data: {
    groupId: groupId,
    status: "completed",
    resultUrls: downloadUrls,  // NEW: array of URLs
    resultFilenames: filenames  // NEW: array of filenames
  }
});
```

The service worker receives this and:
1. Marks the task `completed` in the queue
2. Stores result file paths for `/api/results/:id/download`
3. Sends completion message via WebSocket to companion server

---

### Phase 5 — Companion Server Script

**File**: `server.py` (new, in extension root directory)

```python
#!/usr/bin/env python3
"""
Flow Automation HTTP API Server.
Usage: python server.py [--port 9876] [--ws-port 9877]

Translates HTTP REST calls to WebSocket messages sent to the extension.
Stores task state and serves result files for download.
"""

import asyncio
import json
import uuid
import time
import os
import argparse
from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.parse import urlparse
import websockets

TASKS = {}           # {id: {...task data...}}
WS_CLIENTS = set()   # Connected extension WebSocket clients
RESULTS_DIR = "results"

class APIHandler(BaseHTTPRequestHandler):
    """HTTP REST API handler"""
    
    def do_POST(self):
        parsed = urlparse(self.path)
        if parsed.path == "/api/generate":
            body = self._read_body()
            task_id = uuid.uuid4().hex[:8]
            task = {
                "id": task_id,
                "mode": body.get("mode", "textToVideo"),
                "prompt": body.get("prompt", ""),
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
                "status": "queued",
                "progress": 0,
                "result_urls": [],
                "error": None,
                "created_at": int(time.time()),
                "completed_at": None
            }
            TASKS[task_id] = task
            # Forward to extension via WebSocket
            asyncio.run(self._broadcast({
                "action": "generate",
                **task
            }))
            self._send_json(201, {"success": True, "task_id": task_id})
            
        elif parsed.path == "/api/queue/cancel":
            body = self._read_body()
            task_id = body.get("task_id")
            if task_id in TASKS:
                TASKS[task_id]["status"] = "cancelled"
                asyncio.run(self._broadcast({
                    "action": "cancel",
                    "task_id": task_id
                }))
                self._send_json(200, {"success": True})
            else:
                self._send_json(404, {"error": "Task not found"})
        else:
            self._send_json(404, {"error": "Not found"})
    
    def do_GET(self):
        parsed = urlparse(self.path)
        if parsed.path == "/api/health":
            self._send_json(200, {
                "status": "ok",
                "version": "1.0",
                "tasks_queued": len([t for t in TASKS.values() if t["status"] == "queued"]),
                "tasks_completed": len([t for t in TASKS.values() if t["status"] == "completed"]),
                "extension_connected": len(WS_CLIENTS) > 0
            })
        elif parsed.path == "/api/queue":
            self._send_json(200, {"tasks": list(TASKS.values())})
        elif parsed.path.startswith("/api/queue/"):
            task_id = parsed.path.split("/")[-1]
            task = TASKS.get(task_id)
            if task:
                self._send_json(200, task)
            else:
                self._send_json(404, {"error": "Task not found"})
        elif parsed.path.startswith("/api/results/"):
            # /api/results/{task_id}/{filename}
            parts = parsed.path.split("/")
            task_id = parts[3]
            filename = "/".join(parts[4:])
            filepath = os.path.join(RESULTS_DIR, task_id, filename)
            if os.path.exists(filepath):
                self.send_response(200)
                self.send_header("Content-Type", "application/octet-stream")
                self.send_header("Content-Disposition", f'attachment; filename="{filename}"')
                self.end_headers()
                with open(filepath, "rb") as f:
                    self.wfile.write(f.read())
            else:
                self._send_json(404, {"error": "File not found"})
        else:
            self._send_json(404, {"error": "Not found"})
    
    def _read_body(self):
        length = int(self.headers.get("Content-Length", 0))
        return json.loads(self.rfile.read(length)) if length else {}
    
    def _send_json(self, status, data):
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.end_headers()
        self.wfile.write(json.dumps(data).encode())
    
    async def _broadcast(self, data):
        if WS_CLIENTS:
            msg = json.dumps(data)
            await asyncio.gather(*[client.send(msg) for client in WS_CLIENTS], return_exceptions=True)
    
    def log_message(self, format, *args):
        print(f"[API] {args[0]} {args[1]} {args[2]}")


async def ws_handler(websocket):
    """Handle WebSocket connection from extension"""
    WS_CLIENTS.add(websocket)
    print(f"[WS] Extension connected ({len(WS_CLIENTS)} total)")
    try:
        async for message in websocket:
            data = json.loads(message)
            action = data.get("action")
            
            if action == "task_update":
                # Extension reports task progress/completion
                task_id = data["task_id"]
                if task_id in TASKS:
                    TASKS[task_id].update({
                        "status": data.get("status", TASKS[task_id]["status"]),
                        "progress": data.get("progress", TASKS[task_id]["progress"]),
                        "result_urls": data.get("result_urls", TASKS[task_id]["result_urls"]),
                        "error": data.get("error"),
                        "completed_at": data.get("completed_at", TASKS[task_id]["completed_at"])
                    })
                    print(f"[WS] Task {task_id}: {data.get('status')}")
                    
            elif action == "result_file":
                # Extension sends result file metadata
                task_id = data["task_id"]
                filename = data["filename"]
                # File is already downloaded by extension; just record it
                pass
    except websockets.exceptions.ConnectionClosed:
        pass
    finally:
        WS_CLIENTS.discard(websocket)
        print(f"[WS] Extension disconnected ({len(WS_CLIENTS)} total)")


async def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--port", type=int, default=9876, help="HTTP API port")
    parser.add_argument("--ws-port", type=int, default=9877, help="WebSocket port")
    args = parser.parse_args()
    
    os.makedirs(RESULTS_DIR, exist_ok=True)
    
    print(f"🚀 Flow Automation API Server")
    print(f"   HTTP API:   http://localhost:{args.port}")
    print(f"   WebSocket:  ws://localhost:{args.ws-port}")
    print(f"   Endpoints:")
    print(f"     POST /api/generate     - Submit task")
    print(f"     GET  /api/queue        - List tasks")
    print(f"     GET  /api/queue/:id    - Get task status")
    print(f"     DEL  /api/queue/:id    - Cancel task")
    print(f"     GET  /api/results/...  - Download result")
    print(f"     GET  /api/health       - Health check")
    print()
    
    # Start HTTP server
    http_server = HTTPServer(("0.0.0.0", args.port), APIHandler)
    
    # Start WebSocket server
    ws_server = await websockets.serve(ws_handler, "localhost", args.ws_port)
    
    print(f"✅ Server ready. Waiting for extension to connect...")
    
    await asyncio.gather(
        asyncio.to_thread(http_server.serve_forever),
        ws_server.wait_closed()
    )


if __name__ == "__main__":
    asyncio.run(main())
```

---

### Phase 6 — Queue & Task Storage

**Location**: `chrome.storage.local` key: `"api-task-queue"`

```javascript
// Task schema (stored in extension)
{
  id: "abc-123",
  mode: "textToVideo",
  prompt: "a cat playing piano",
  model: "Veo 3.1 - Fast",
  aspectRatio: "16:9",
  outputCount: 1,
  videoOption: "6s",
  images: [],
  characters: [],
  speaker: null,
  concurrentPrompts: 1,
  promptDelaySecondsMin: 0,
  promptDelaySecondsMax: 0,
  status: "completed",     // queued | processing | completed | failed | cancelled
  progress: 100,            // 0-100
  result_urls: ["/api/results/abc-123/cat_piano_001.mp4"],
  result_filenames: ["cat_piano_001.mp4"],
  error: null,
  created_at: 1712345678000,
  completed_at: 1712345778000
}
```

---

### Phase 7 — Result File Handling

When the extension downloads a video/image (existing `DOWNLOAD_VIDEO` message), it:
1. Copies/symlinks the downloaded file to the companion server's `results/` directory
2. Or the service worker sends the file path via WebSocket so the Python server can serve it

**Method**: The companion server's `results/{task_id}/` directory contains downloaded files. The extension's service worker sends a `result_file` WebSocket message with the file path when a download completes.

---

### Implementation Order

| Step | What | File | Complexity |
|------|------|------|------------|
| 1 | Companion server script | `server.py` (NEW) | Low (stdlib) |
| 2 | Service Worker WebSocket + task queue | `index.ts-DoSGWp_j.js` | **High** |
| 3 | Service Worker keepalive alarm | `index.ts-DoSGWp_j.js` | Medium |
| 4 | Settings tab Server UI section | `index.html-B15jV9u5.js` | **High** (Vue compiled) |
| 5 | Content script completion reporting | `index.ts-Bt6B9Lbt.js` | Low |
| 6 | Task queue viewer component | `index.html-B15jV9u5.js` | Medium |
| 7 | End-to-end testing | — | Medium |

---

### API Usage Examples

**curl — Generate video:**
```bash
curl -X POST http://localhost:9876/api/generate \
  -H "Content-Type: application/json" \
  -d '{
    "mode": "textToVideo",
    "prompt": "cinematic shot of a wolf howling at the moon",
    "model": "Veo 3.1 - Fast",
    "aspectRatio": "16:9",
    "videoOption": "8s",
    "outputCount": 2
  }'
```

**curl — Generate image with reference:**
```bash
curl -X POST http://localhost:9876/api/generate \
  -H "Content-Type: application/json" \
  -d '{
    "mode": "imageToImage",
    "prompt": "make it a cyberpunk style",
    "images": [{"base64": "'"$(base64 -i input.jpg)"'", "name": "input.jpg", "mimeType": "image/jpeg"}]
  }'
```

**Python — Submit and wait:**
```python
import requests, time

# Submit
resp = requests.post("http://localhost:9876/api/generate", json={
    "mode": "textToVideo",
    "prompt": "sunset over a futuristic city"
})
task_id = resp.json()["task_id"]

# Poll until done
while True:
    task = requests.get(f"http://localhost:9876/api/queue/{task_id}").json()
    if task["status"] in ("completed", "failed"):
        break
    print(f"Progress: {task['progress']}%")
    time.sleep(2)

# Download result
if task["status"] == "completed":
    for url in task["result_urls"]:
        r = requests.get(f"http://localhost:9876{url}")
        with open(f"output_{url.split('/')[-1]}", "wb") as f:
            f.write(r.content)
```

**Python — Check queue:**
```python
import requests
queue = requests.get("http://localhost:9876/api/queue").json()
for task in queue["tasks"]:
    print(f"{task['id']} | {task['mode']} | {task['status']} | {task['progress']}%")
```

---

### Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| **MV3 service worker terminates** after 30s idle | WebSocket disconnects | Periodic ping/pong every 20s via `setInterval` |
| **Python not installed** on user machine | Server won't start | Bundle as executable (PyInstaller) OR offer Node.js version |
| **Port 9876/9877 already in use** | Server fails | Auto-detect next available port, report in UI |
| **Multiple tasks at once** | Google Flow can't handle | Queue processes sequentially (one at a time) |
| **Extension side panel closed** during task | Tasks still run | Service worker handles queue independently of side panel |
| **CORS if UI fetches directly** | Not applicable | REST API is local, no browser CORS issues |
