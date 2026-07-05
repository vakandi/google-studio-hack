# Google Studio Hack

**Stack**: Python (stdlib) + Chrome MV3 Extension (Vue/TypeScript — pre-compiled)

## OVERVIEW
Automates Google Flow (labs.google.com/fx/tools/flow) video/image generation at scale. REST API server (`server.py`) queues tasks; Chrome extension opens Flow tabs, fills forms via content script, captures download URLs, and uploads results.

## STRUCTURE
```
./
├── server.py                             # REST API (port 9876, stdlib-only)
├── veo-automation-extension/             # OUR HACKED VERSION — work here
├── veo-automation-extension-original/    # ⛔ ORIGINAL — DO NOT TOUCH, reference only
├── docs/API-SERVER-PLAN.md              # Architecture doc (partially stale)
├── results/                             # Downloaded media artifacts
├── .sisyphus/                           # Sisyphus dev tool tracking
├── .playwright-mcp/                     # Playwright browser session recordings
├── AGENTS.md                            # ← this file
├── insights_*.png                       # Google Flow UI screenshots
└── __pycache__/                         # Python bytecode cache
```

## ⛔ CRITICAL RULE: NEVER TOUCH THE ORIGINAL
- **`veo-automation-extension-original/`** is the STORE VERSION (copied from Edge, has `key` + `update_url` in manifest).
- This folder exists ONLY as reference — to compare working original code vs our hacked version.
- **NEVER edit, never load unpacked, never modify** any file inside `veo-automation-extension-original/`.
- Always work in `veo-automation-extension/` (no `key`, no `update_url`).

## WHERE TO LOOK
| Task | Location | Notes |
|------|----------|-------|
| REST API endpoints | `server.py` | All endpoints in one file |
| Task queue logic | `server.py` `TaskStore` class | Thread-safe in-memory queue |
| Extension service worker | `veo-automation-extension/assets/index.ts-DoSGWp_j.js` | Tab lifecycle, polling, downloads |
| Content script (Flow automation) | `veo-automation-extension/assets/index.ts-Bt6B9Lbt.js` | Form fill, generation monitoring |
| Side panel UI (Vue) | `veo-automation-extension/assets/index.html-B15jV9u5.js` | 162KLOC compiled Vue app |
| Server-mode UI patch | `veo-automation-extension/assets/server-panel.js` | Non-Vue DOM injection |
| Extension manifest | `veo-automation-extension/manifest.json` | Permissions, entry points |
| File upload intercept | `veo-automation-extension/assets/catchUploadFile.ts-DJwIizxX.js` | `HTMLInputElement` monkey-patch |
| Remote config | `veo-automation-extension/assets/remoteConfig-CbIdrXch.js` | External config fetcher |
| Original reference (DO NOT TOUCH) | `veo-automation-extension-original/` | Store version — compare only |
| Known bugs | `AGENTS.md` (below) | 5 documented issues |
| Server mode design (unimplemented) | `docs/API-SERVER-PLAN.md` | WebSocket+HTTP version |

## KNOWN BUGS
| Issue | Root Cause | Fix |
|-------|-----------|-----|
| Tab creation URL 404 | `labs.google.com/flow` → 404 | Use `labs.google/fx/tools/flow` |
| Content script not injecting | `*://labs.google/*` no match `labs.google.com` | All patterns changed to `*://labs.google.com/*` |
| Infinite regeneration loop | Download failure re-adds prompt index | `_processedGenIndexes` Set skips re-submission |
| `folderName.trim()` crash | `t.folderName` is `undefined` | `(t.folderName \|\| "").trim()` |
| Ugly filenames from TRPC | Filename from TRPC path not media ID | Extract `name` query param from URL |

## CONVENTIONS
- **Python**: stdlib-only (`http.server`, `threading`, `json`, `pathlib`, `uuid`, `urllib.request`). No pip deps.
- **API**: REST on port 9876, JSON body, CORS wide-open (`*`). Task IDs = `uuid.hex[:12]`.
- **Task flow**: POST → pending → processing (via poll) → completed/failed/cancelled.
- **Content script**: `AUTO_FILL_FLOW` message triggers form automation on Flow tab.
- **Bundles**: Named `{sourceExt}-{contentHash}.js` (Vite convention). NOT built in-repo.

## ANTI-PATTERNS
- **No `.gitignore` at root** — `__pycache__/`, `.playwright-mcp/`, `results/` not excluded.
- **No build tooling in-repo** — Extension cannot be modified at source level. Bundles are deploy-only.
- **`server-panel.js` bolt-on** — Side-panel server UI injected via `<script defer>` outside Vue app. Breaks if Vue re-renders the DOM.
- **Hardcoded secret** — `remoteConfig-CbIdrXch.js` has `X-Client-Secret` in plaintext.
- **Orphaned plan** — `docs/API-SERVER-PLAN.md` describes WebSocket server that was never built.
- **Screenshots at root** — `insights_*.png` pollute workspace top-level.

## COMMANDS
```bash
python3 server.py              # Start REST API on port 9876
# Extension: Chrome → Extensions → Load unpacked → veo-automation-extension/
curl -X POST http://localhost:9876/api/generate \
  -H "Content-Type: application/json" \
  -d '{"prompt": "a cat playing piano"}'
```

## NOTES
- The extension is pre-built with Vite. Source `.ts` files are NOT in this repo.
- Server is single-threaded HTTP + background threads for file downloads.
- Results stored in `results/{task_id}/` on server filesystem.
- Extension service worker uses `chrome.alarms` for keepalive.
