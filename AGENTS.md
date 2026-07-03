# Google Studio Hack — Agent Memory

## Known Issues & Fixes

### Issue: Tab creation URL 404
**Problem**: Changed tab creation URL from `https://labs.google/flow` to `https://labs.google.com/flow` which is a 404.

**Fix**: Use `https://labs.google/fx/tools/flow` instead — this redirects to the correct `labs.google.com/fx/tools/flow`.

**File**: `assets/index.ts-DoSGWp_j.js` line 54

### Issue: Content script not injecting
**Problem**: Match patterns `*://labs.google/*` don't match `labs.google.com`.

**Fix**: All patterns changed to `*://labs.google.com/*` in manifest.json (content_scripts, host_permissions, web_accessible_resources) and service worker (tabs.query, cookie domain, debugger origin).

### Issue: Infinite regeneration loop
**Problem**: Download failure re-adds prompt index to `pendingIndexes`, causing `oe()` to call `$()` again → infinite loop.

**Fix**: `_processedGenIndexes` Set in `oe()` tracks indexes already submitted to Google Flow. When `J()` re-adds an index after download failure, it's skipped.

### Issue: folderName.trim() crash
**Problem**: `t.folderName.trim()` on `undefined` throws, caught by outer catch returning `{success: false}`.

**Fix**: Changed to `(t.folderName || "").trim()`.

### Issue: Ugly filenames from TRPC URLs
**Problem**: Filename derived from TRPC endpoint path (`media.getMediaUrlRedirect`) instead of media ID.

**Fix**: Extract `name` query param from URL, append proper extension from Content-Type header.

## Pipeline Flow
1. `POST /api/generate` → task created (pending)
2. Service worker polls `GET /api/poll` every 10s
3. Service worker finds/creates Flow tab at `labs.google/fx/tools/flow`
4. Reloads tab, sends `AUTO_FILL_FLOW` message after 3s
5. Content script fills form, submits, waits for generation
6. Content script captures download URL from generated tile
7. Service worker fetches URL, uploads bytes via `PUT /api/results/<tid>/upload/<filename>`
8. Task marked completed with result_files populated