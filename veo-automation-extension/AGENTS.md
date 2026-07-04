# veo-automation-extension — Chrome MV3 Extension

**Purpose**: Automates Google Flow video/image generation. Opens Flow tabs, fills forms, captures download URLs, uploads results.

## STRUCTURE
```
veo-automation-extension/
├── manifest.json                  # MV3 manifest (permissions, entry points)
├── service-worker-loader.js       # 1-line loader → assets/index.ts-DoSGWp_j.js
├── assets/                        # Pre-built bundles (Vite output)
│   ├── index.ts-DoSGWp_j.js       # Service worker (825 lines)
│   ├── index.ts-Bt6B9Lbt.js       # Content script (8.5K lines)
│   ├── index.html-B15jV9u5.js     # Side panel Vue app (162K lines)
│   ├── server-panel.js            # Server-mode UI DOM injection
│   ├── catchUploadFile.ts-DJwIizxX.js  # File upload monkey-patch
│   └── remoteConfig-CbIdrXch.js   # External config fetcher
├── src/
│   ├── ui/side-panel/index.html   # Side panel entry
│   └── assets/logo.png            # Extension icon
└── logo/                          # Chrome + Edge SVG logos
```

## WHERE TO LOOK
| Area | File | Notes |
|------|------|-------|
| Service worker logic | `assets/index.ts-DoSGWp_j.js` | Flow tab lifecycle, polling, WS client, downloads |
| Content script | `assets/index.ts-Bt6B9Lbt.js` | Form fill, auto-fill flow, gen monitoring |
| Side panel UI | `assets/index.html-B15jV9u5.js` | Vue 3 SPA with PrimeVue components |
| Server panel (bolt-on) | `assets/server-panel.js` | Standalone DOM injection (not part of Vue app) |
| Permissions/entry points | `manifest.json` | `debugger`, `cookies`, host perms |
| File upload intercept | `assets/catchUploadFile.ts-DJwIizxX.js` | Monkey-patches `HTMLInputElement` |
| Remote config | `assets/remoteConfig-CbIdrXch.js` | Fetches selectors from CDN |

## CONVENTIONS (extension-specific)
- **Bundle naming**: `{sourceExt}-{contentHash}.js` (Vite content-hash). NOT built in-repo.
- **Side panel**: Vue 3 + PrimeVue (primeicons font files in `assets/`).
- **Content script messaging**: `AUTO_FILL_FLOW` → fills form. `PROMPT_GROUP_STATUS` → reports progress.
- **Task lifecycle**: pending → processing (via service worker poll) → completed/failed/cancelled.

## ANTI-PATTERNS (extension)
- **No TypeScript source in-repo** — only Vite-compiled JS bundles. Cannot modify without build tooling.
- **`server-panel.js` bypasses Vue** — injected via `<script defer>` in `index.html`. If Vue re-renders its mount point, the injected DOM disappears.
- **Hardcoded API secret** — `remoteConfig-CbIdrXch.js` sends `X-Client-Secret: YES_THAT_IS_VERY_EASY_RIGHT_?!$` in plaintext.
- **Logo triplication** — `logo.png` at extension root + `logo/chrome.svg` + `src/assets/logo.png`.
- **Remote config dependency** — Extension fetches selectors from `configs.kylenguyen.me` and `extension-config.onegreen.workers.dev`. Breaks if those endpoints go down.
