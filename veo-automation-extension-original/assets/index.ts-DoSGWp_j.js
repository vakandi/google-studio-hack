import { g as e } from "./remoteConfig-CbIdrXch.js";
let t = "/";
let a = "";
let s = true;
const o = new Map();
let r = null;
const n = new Set();
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
    const n = /\.(mp4)$/i.test(e.filename || e.url);
    const c = /\.(jpg|jpeg|png|gif|webp|bmp|svg|jfif)$/i.test(e.filename || e.url);
    if (n || c) {
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
          url: ["*://labs.google/*"]
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
          autoChangeFileName: s
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
        const {
          data: e
        } = i;
        const t = e?.status;
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
    case "CS":
      (async () => {
        const e = d.tab?.id;
        try {
          await (async () => {
            const e = ["__Secure", "SID", "SSID", "HSID", "APISID", "SAPISID", "LSID", "NID", "1P_JAR"];
            const t = (await chrome.cookies.getAll({
              domain: "labs.google"
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
                origin: "https://labs.google",
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