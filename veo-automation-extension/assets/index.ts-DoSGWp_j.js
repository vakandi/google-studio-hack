import { g as e } from "./remoteConfig-CbIdrXch.js";
let t = "/";
let a = "";
let s = true;
const o = new Map();
let r = null;
const n = new Set();

// ── Server Mode State ──────────────────────────────────────
let serverPollTimer = null;
let processingTaskId = null;
let lastProcessedTaskId = null;
const SERVER_URL = "http://localhost:9876";
let _pendingDownloadFiles = [];
let _pendingTimer = null;

async function flushPendingDownloads() {
  const batch = _pendingDownloadFiles.splice(0);
  for (const f of batch) {
    try {
      const r = await fetch(f.url);
      if (!r.ok) continue;
      const b = await r.blob();
      const fn = f.filename || `result_${f.ts}.bin`;
      await fetch(`${SERVER_URL}/api/results/${f.taskId}/upload/${encodeURIComponent(fn)}`, {
        method: "PUT", body: b
      });
    } catch (_) {}
  }
  if (_pendingDownloadFiles.length === 0 && _pendingTimer !== null) {
    clearInterval(_pendingTimer);
    _pendingTimer = null;
  }
}

async function serverFetch(path, opts = {}) {
  try {
    const res = await fetch(`${SERVER_URL}${path}`, {
      ...opts,
      headers: { "Content-Type": "application/json", ...(opts.headers || {}) }
    });
    if (!res.ok) return null;
    return await res.json();
  } catch (e) {
    return null;
  }
}

async function processTask(task) {
  if (!task || task.empty || processingTaskId) return;
  if (task.id === lastProcessedTaskId) return;
  processingTaskId = task.id;
  let tabs = (await chrome.tabs.query({ url: "*://labs.google.com/*" })).filter(t => t.url && t.url.includes("flow"));
  if (tabs.length === 0) tabs = [await chrome.tabs.create({ url: "https://labs.google/flow" })];
  const tabId = tabs[0].id;
  try {
    await chrome.tabs.reload(tabId);
    setTimeout(async () => {
      try {
        // wait for tab to finish loading
        await new Promise(r => {
          const handler = (tId, info) => { if (tId === tabId && info.status === 'complete') { chrome.tabs.onUpdated.removeListener(handler); r(); } };
          chrome.tabs.onUpdated.addListener(handler);
          setTimeout(r, 8000); // safety timeout
        });
        await chrome.tabs.sendMessage(tabId, {
          type: "AUTO_FILL_FLOW",
          payloads: task.prompts.map(p => ({
            prompt: p, mode: task.mode, model: task.model, aspectRatio: task.aspectRatio,
            videoOption: task.videoOption, outputCount: task.outputCount,
            characters: task.characters || [], speaker: task.speaker || null, images: task.images || []
          })),
          groupId: task.id,
          concurrentPrompts: task.concurrentPrompts || 1,
          promptDelaySecondsMin: task.promptDelaySecondsMin || 0,
          promptDelaySecondsMax: task.promptDelaySecondsMax || 0
        });
      } catch (e) {
        processingTaskId = null;
        serverFetch("/api/result", {
          method: "POST", body: JSON.stringify({ task_id: task.id, status: "failed", error: "Content script unavailable" })
        });
      }
    }, 3000);
  } catch (e) {
    processingTaskId = null;
    serverFetch("/api/result", {
      method: "POST", body: JSON.stringify({ task_id: task.id, status: "failed", error: String(e) })
    });
  }
}

async function pollServer() {
  if (processingTaskId) return;
  const task = await serverFetch("/api/poll");
  if (task && !task.empty) processTask(task);
}

function startServerMode() {
  if (serverPollTimer) return { success: true, url: SERVER_URL };
  serverPollTimer = setInterval(pollServer, 10000);
  return { success: true, url: SERVER_URL };
}

function stopServerMode() {
  if (serverPollTimer) {
    clearInterval(serverPollTimer);
    serverPollTimer = null;
  }
  return { success: true };
}

function isServerRunning() {
  return serverPollTimer !== null;
}

chrome.tabs.onRemoved.addListener(e => {
  n.delete(e);
});
chrome.debugger.onDetach.addListener(e => {
  if (e.tabId !== undefined) {
    n.delete(e.tabId);
  }
});
const c = (e, r) => {
  const n = e.url.includes("google");
  const c = !e.byExtensionId || e.byExtensionId === chrome.runtime.id;
  if (n && c) {
    const bn = /\.(mp4)$/i.test(e.filename || e.url);
    const bi = /\.(jpg|jpeg|png|gif|webp|bmp|svg|jfif)$/i.test(e.filename || e.url);
    if (bn || bi) {
      if (!s) {
        return;
      }
      if (o.has(e.url)) {
        r({
          filename: o.get(e.url)
        });
        o.delete(e.url);
      } else {
        const s = e.filename;
        const o = s.split("/").pop() || s;
        r({
          filename: `${t}${a}${o}`
        });
      }
    }
    if (isServerRunning()) {
      const fn = e.filename ? e.filename.split("/").pop() || e.filename : `dl_${Date.now()}.bin`;
      _pendingDownloadFiles.push({ url: e.url, filename: fn, taskId: "", ts: Date.now() });
    }
  }
};
const i = async () => {
  if (chrome.sidePanel) {
    try {
      await chrome.sidePanel.setOptions({
        path: "src/ui/side-panel/index.html",
        enabled: true
      });
      await chrome.sidePanel.setPanelBehavior({
        openPanelOnActionClick: true
      });
    } catch (e) {}
  }
};
i();
chrome.runtime.onInstalled.addListener(async e => {
  await i();
  if (e.reason === "install") {
    await (async e => {
      try {
        const t = await chrome.tabs.query({
          url: [`*://kylenguyen.me/*?${e}`]
        });
        if (t.length > 0 && typeof t[0].id == "number") {
          const e = t[0];
          if (typeof e.windowId == "number") {
            await chrome.windows.update(e.windowId, {
              focused: true
            });
          }
          await chrome.tabs.update(e.id, {
            active: true
          });
        } else {
          await chrome.tabs.create({
            url: `https://kylenguyen.me?${e}`
          });
        }
      } catch (t) {}
    })("new-version-installed=true");
    await (async () => {
      try {
        const t = (await chrome.tabs.query({
          url: ["*://labs.google.com/*"]
        })).filter(e => e.url && e.url.includes("flow"));
        for (const a of t) {
          if (a.id) {
            try {
              await chrome.tabs.reload(a.id);
            } catch (e) {}
          }
        }
        t.length;
      } catch (e) {}
    })();
  } else {
    e.reason;
  }
});
self.onerror = function (e, t, a, s, o) {};
chrome.action.onClicked.addListener(async e => {
  if (chrome.sidePanel && e.id !== undefined) {
    try {
      await chrome.sidePanel.open({
        tabId: e.id
      });
    } catch (t) {}
  }
});
chrome.runtime.onMessage.addListener((i, d, m) => {
  switch (i.type) {
    case "GET_REMOTE_CONFIG":
      e().then(e => m(e)).catch(() => m(null));
      return true;
    case "SET_ZOOM":
      {
        const {
          zoomFactor: e
        } = i;
        if (d.tab?.id) {
          chrome.tabs.setZoom(d.tab.id, e);
          m({
            success: true
          });
        } else {
          m({
            success: false,
            error: "Tab ID not found"
          });
        }
      }
      break;
    case "DOWNLOAD_VIDEO":
      {
        const {
          url: e,
          filename: t,
          folder: a,
          autoChangeFileName: s,
          _downloadRef: d
        } = i;
        if (s !== false) {
          const s = a ? `${a}/${t}` : t;
          o.set(e, s);
          chrome.downloads.download({
            url: e,
            filename: s,
            saveAs: false
          }, e => {
            const t = chrome.runtime?.lastError;
            m(!t && e ? {
              success: true,
              downloadId: e
            } : {
              success: false,
              error: t?.message || "Failed to start download"
            });
          });
        } else {
          chrome.downloads.download({
            url: e,
            saveAs: false
          }, e => {
            const t = chrome.runtime?.lastError;
            m(!t && e ? {
              success: true,
              downloadId: e
            } : {
              success: false,
              error: t?.message || "Failed to start download"
            });
          });
        }
        if (d) {
          _pendingDownloadFiles.push({ url: e, filename: t, taskId: d, ts: Date.now() });
        }
        if (_pendingTimer === null) {
          _pendingTimer = setInterval(flushPendingDownloads, 5000);
        }
        return true;
      }
    case "UPLOAD_FILE_BYTES":
      {
        const { filename: fn, data: b64, mimeType: mt, _downloadRef: ref } = i;
        console.log("[SW] UPLOAD_FILE_BYTES:", fn, "ref:", ref, "size:", b64 ? b64.length : 0);
        if (!b64 || !ref) { console.log("[SW] UPLOAD_FILE_BYTES: missing data or ref"); return true; }
        (async () => {
          try {
            const bin = atob(b64);
            const arr = new Uint8Array(bin.length);
            for (let i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
            const blob = new Blob([arr], { type: mt || 'image/png' });
            const resp = await fetch(`${SERVER_URL}/api/results/${ref}/upload/${encodeURIComponent(fn || `result_${Date.now()}.bin`)}`, {
              method: "PUT", body: blob
            });
            console.log("[SW] UPLOAD_FILE_BYTES result:", resp.status);
          } catch (err) {
            console.log("[SW] UPLOAD_FILE_BYTES error:", err.message);
          }
        })();
        return true;
      }
    case "SET_FOLDER_NAME":
      {
        const {
          folderName: e,
          prefix: o,
          autoChangeFileName: n
        } = i;
        if (typeof e == "string") {
          t = e.trim() ? `${e.trim()}/` : "";
        }
        if (typeof o == "string") {
          a = o.trim();
        }
        if (typeof n == "boolean") {
          s = n;
        }
        if (s) {
          if (r !== null) {
            clearTimeout(r);
            r = null;
          }
          if (!chrome.downloads.onDeterminingFilename.hasListener(c)) {
            chrome.downloads.onDeterminingFilename.addListener(c);
          }
        } else {
          if (r !== null) {
            clearTimeout(r);
            r = null;
          }
          if (chrome.downloads.onDeterminingFilename.hasListener(c)) {
            chrome.downloads.onDeterminingFilename.removeListener(c);
          }
        }
        m({
          success: true
        });
      }
      break;
    case "PROMPT_GROUP_STATUS":
      {
        const { data: e } = i;
        const t = e?.status;
        const taskId = e?.id || e?.groupId;
        if (taskId && isServerRunning()) {
          if (t === "completed") {
            lastProcessedTaskId = taskId;
            processingTaskId = null;
            (async () => {
              console.log("[SW] completed handler for", taskId, "resultUrls:", (e.resultUrls || []).length, "pending:", _pendingDownloadFiles.length);
              const urls = e.resultUrls || [];
              for (const url of urls) {
                try {
                  const resp = await fetch(url);
                  console.log("[SW] fetch resultUrl:", url.substring(0,80), resp.status);
                  if (!resp.ok) continue;
                  const blob = await resp.blob();
                  let filename = (url.match(/[?&]name=([^&]+)/) || url.match(/\/([^/]+?)(?:\?|$)/))?.[1] || `result_${Date.now()}.bin`;
                  const ct = resp.headers.get("content-type") || "";
                  if (ct.startsWith("image/jpeg") && !filename.endsWith(".jpg")) filename += ".jpg";
                  else if (ct.startsWith("image/png") && !filename.endsWith(".png")) filename += ".png";
                  else if (ct.startsWith("video/mp4") && !filename.endsWith(".mp4")) filename += ".mp4";
                  else if (ct.startsWith("image/webp") && !filename.endsWith(".webp")) filename += ".webp";
                  else if (ct.startsWith("image/gif") && !filename.endsWith(".gif")) filename += ".gif";
                  const uploadResp = await fetch(`${SERVER_URL}/api/results/${taskId}/upload/${filename}`, {
                    method: "PUT", body: blob
                  });
                  console.log("[SW] uploaded via resultUrl:", filename, uploadResp.status);
                } catch (err) {
                  console.log("[SW] fetch/upload error:", err.message);
                }
              }
              const taskFiles = _pendingDownloadFiles.filter(f => f.taskId === taskId);
              const recentUntagged = _pendingDownloadFiles.filter(f => !f.taskId && (Date.now() - f.ts) < 60000);
              _pendingDownloadFiles = _pendingDownloadFiles.filter(f => f.taskId !== taskId && !(!f.taskId && (Date.now() - f.ts) < 60000));
              taskFiles.push(...recentUntagged);
              console.log("[SW] pending files for this task:", taskFiles.length, "(tagged:", taskFiles.length - recentUntagged.length, ", untagged:", recentUntagged.length, ")");
              for (const f of taskFiles) {
                try {
                  const r = await fetch(f.url);
                  console.log("[SW] fetch pending:", f.filename, r.status);
                  if (!r.ok) continue;
                  const b = await r.blob();
                  const fn = f.filename || `result_${f.ts}.bin`;
                  const uploadResp = await fetch(`${SERVER_URL}/api/results/${taskId}/upload/${encodeURIComponent(fn)}`, {
                    method: "PUT", body: b
                  });
                  console.log("[SW] uploaded pending:", fn, uploadResp.status);
                } catch (err) {
                  console.log("[SW] pending upload error:", err.message);
                }
              }
              serverFetch("/api/result", {
                method: "POST",
                body: JSON.stringify({ task_id: taskId, status: "completed", progress: 100 })
              });
              console.log("[SW] completed handler done for", taskId);
            })();
          } else if (t === "error") {
            lastProcessedTaskId = taskId;
            processingTaskId = null;
            serverFetch("/api/result", {
              method: "POST",
              body: JSON.stringify({ task_id: taskId, status: "failed", error: e.error || "Unknown error" })
            });
          } else if (t === "cancelled") {
            processingTaskId = null;
          } else if (t === "processing") {
            serverFetch("/api/result", {
              method: "POST",
              body: JSON.stringify({ task_id: taskId, status: "processing", progress: e.progress || 0 })
            });
          }
        }
        if (t === "completed" || t === "cancelled" || t === "error") {
          if (r !== null) {
            clearTimeout(r);
          }
          r = setTimeout(() => {
            r = null;
            if (chrome.downloads.onDeterminingFilename.hasListener(c)) {
              chrome.downloads.onDeterminingFilename.removeListener(c);
            }
          }, 300000);
        }
      }
      break;
    case "SERVER_START":
      m(startServerMode());
      break;
    case "SERVER_STOP":
      m(stopServerMode());
      break;
    case "SERVER_STATUS":
      (async () => {
        const health = await serverFetch("/api/health");
        m({
          running: isServerRunning(),
          connected: health !== null,
          queue: health?.tasks_total || 0
        });
      })();
      return true;
    case "QUEUE_GET":
      (async () => {
        const data = await serverFetch("/api/queue");
        m({ tasks: data?.tasks || [] });
      })();
      return true;
    case "QUEUE_CANCEL":
      (async () => {
        const { task_id: e } = i;
        await serverFetch(`/api/queue/${e}`, { method: "DELETE" });
        m({ success: true });
      })();
      return true;
    case "CHECK_BANNER":
      (async () => {
        try {
          let tabs = await chrome.tabs.query({ url: "*://labs.google.com/*" });
          tabs = tabs.filter(t => t.url && t.url.includes("flow"));
          if (tabs.length === 0 || !tabs[0].id) {
            m({ bannerDetected: null, error: "No Flow tab" });
            return;
          }
          const tabId = tabs[0].id;
          const dbg = { tabId: tabId };
          if (!n.has(tabId)) {
            try {
              await chrome.debugger.attach(dbg, "1.3");
              n.add(tabId);
            } catch (e) {
              if (String(e).indexOf("already attached") === -1) throw e;
              n.add(tabId);
            }
          }
          const result = await chrome.debugger.sendCommand(dbg, "Runtime.evaluate", {
            expression: "!!document.querySelector('.sc-229e86f5-1') || (document.body.innerText||'').toLowerCase().indexOf('high demand') !== -1",
            returnByValue: true
          });
          m({ bannerDetected: result && result.result && result.result.value === true });
        } catch (e) {
          m({ bannerDetected: null, error: String(e) });
        }
      })();
      return true;
    case "CS":
      (async () => {
        const e = d.tab?.id;
        try {
          await (async () => {
            const e = ["__Secure", "SID", "SSID", "HSID", "APISID", "SAPISID", "LSID", "NID", "1P_JAR"];
            const t = (await chrome.cookies.getAll({
              domain: "labs.google.com"
            })).filter(t => !e.some(e => t.name.startsWith(e)));
            await Promise.all(t.map(e => chrome.cookies.remove({
              url: `https://${e.domain.replace(/^\./, "")}${e.path}`,
              name: e.name
            })));
          })();
          if (e) {
            await (async e => {
              const t = {
                tabId: e
              };
              if (!n.has(e)) {
                await chrome.debugger.attach(t, "1.3");
                n.add(e);
              }
              await chrome.debugger.sendCommand(t, "Storage.clearDataForOrigin", {
                origin: "https://labs.google.com",
                storageTypes: "local_storage"
              });
            })(e);
          }
          m({
            success: true
          });
        } catch (t) {
          m({
            success: false,
            error: String(t)
          });
        }
      })();
      return true;
    case "CA":
      {
        const e = d.tab?.id;
        if (!e) {
          m({
            success: false,
            error: "No tab ID"
          });
          break;
        }
        (async () => {
          const t = {
            tabId: e
          };
          try {
            await chrome.debugger.attach(t, "1.3");
            n.add(e);
          } catch (a) {
            const t = a instanceof Error ? a.message : String(a);
            if (!t.includes("already attached")) {
              m({
                success: false,
                error: t
              });
              return;
            }
            n.add(e);
          }
          try {
            await (async e => {
              const t = {
                tabId: e
              };
              await chrome.debugger.sendCommand(t, "Network.enable", {});
              await chrome.debugger.sendCommand(t, "Network.setCacheDisabled", {
                cacheDisabled: true
              });
            })(e);
          } catch (a) {}
          m({
            success: true
          });
        })();
        return true;
      }
    case "CD":
      {
        const e = d.tab?.id;
        if (!e) {
          m({
            success: false,
            error: "No tab ID"
          });
          break;
        }
        (async () => {
          const t = {
            tabId: e
          };
          try {
            if (n.has(e)) {
              await chrome.debugger.detach(t);
              n.delete(e);
            }
            m({
              success: true
            });
          } catch (a) {
            n.delete(e);
            m({
              success: false,
              error: String(a)
            });
          }
        })();
        return true;
      }
    case "CIT":
      {
        const {
          text: e
        } = i;
        const t = d.tab?.id;
        if (!t) {
          m({
            success: false,
            error: "No tab ID"
          });
          break;
        }
        (async () => {
          const a = {
            tabId: t
          };
          try {
            if (!n.has(t)) {
              await chrome.debugger.attach(a, "1.3");
              n.add(t);
            }
            await chrome.debugger.sendCommand(a, "Input.insertText", {
              text: e
            });
            m({
              success: true
            });
          } catch (s) {
            m({
              success: false,
              error: String(s)
            });
          }
        })();
        return true;
      }
    case "CK":
      {
        const {
          key: e,
          keyCode: t,
          code: a,
          text: s,
          modifiers: o,
          keyType: r
        } = i;
        const c = d.tab?.id;
        if (!c) {
          m({
            success: false,
            error: "No tab ID"
          });
          break;
        }
        (async () => {
          const i = {
            tabId: c
          };
          try {
            if (!n.has(c)) {
              await chrome.debugger.attach(i, "1.3");
              n.add(c);
            }
            const d = {
              key: e,
              code: a,
              windowsVirtualKeyCode: t,
              nativeVirtualKeyCode: t
            };
            if (s !== undefined) {
              d.text = s;
              d.unmodifiedText = s;
            }
            if (o !== undefined) {
              d.modifiers = o;
            }
            if (r) {
              await chrome.debugger.sendCommand(i, "Input.dispatchKeyEvent", {
                type: r,
                ...d
              });
            } else {
              await chrome.debugger.sendCommand(i, "Input.dispatchKeyEvent", {
                type: "keyDown",
                ...d
              });
              await chrome.debugger.sendCommand(i, "Input.dispatchKeyEvent", {
                type: "keyUp",
                ...d
              });
            }
            m({
              success: true
            });
          } catch (d) {
            m({
              success: false,
              error: String(d)
            });
          }
        })();
        return true;
      }
    case "CH":
      {
        const {
          x: e,
          y: t
        } = i;
        const a = d.tab?.id;
        if (!a) {
          m({
            success: false,
            error: "No tab ID"
          });
          break;
        }
        const s = {
          tabId: a
        };
        (async () => {
          try {
            if (!n.has(a)) {
              await chrome.debugger.attach(s, "1.3");
              n.add(a);
            }
            await chrome.debugger.sendCommand(s, "Input.dispatchMouseEvent", {
              type: "mouseMoved",
              x: e,
              y: t,
              button: "none",
              modifiers: 0
            });
            m({
              success: true
            });
          } catch (o) {
            const e = o instanceof Error ? o.message : String(o);
            m({
              success: false,
              error: e
            });
          }
        })();
        return true;
      }
    case "CC":
      {
        const {
          x: e,
          y: t
        } = i;
        const a = d.tab?.id;
        if (!a) {
          m({
            success: false,
            error: "No tab ID"
          });
          break;
        }
        const s = {
          tabId: a
        };
        const o = e;
        const r = t;
        const c = async () => {
          await chrome.debugger.sendCommand(s, "Input.dispatchMouseEvent", {
            type: "mouseMoved",
            x: o,
            y: r,
            button: "none",
            modifiers: 0
          });
          await chrome.debugger.sendCommand(s, "Input.dispatchMouseEvent", {
            type: "mousePressed",
            x: o,
            y: r,
            button: "left",
            buttons: 1,
            clickCount: 1,
            modifiers: 0
          });
          await chrome.debugger.sendCommand(s, "Input.dispatchMouseEvent", {
            type: "mouseReleased",
            x: o,
            y: r,
            button: "left",
            buttons: 0,
            clickCount: 1,
            modifiers: 0
          });
        };
        (async () => {
          try {
            if (!n.has(a)) {
              await chrome.debugger.attach(s, "1.3");
              n.add(a);
            }
            await c();
            m({
              success: true
            });
          } catch (e) {
            const t = e instanceof Error ? e.message : String(e);
            m({
              success: false,
              error: t
            });
          }
        })();
        return true;
      }
  }
  return false;
});