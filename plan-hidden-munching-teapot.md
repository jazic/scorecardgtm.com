# Plan: Restart local dev server

## Context

The user reports that `http://localhost:8765/system.html` won't open. The Python http.server that was previously serving the project root was killed (task `bk1pbv66y` reported `status: killed` in an earlier task notification). The page itself (`/Users/justin/Documents/vscode/scorecardgtm.com/system.html`) exists and is unchanged — only the server is missing.

## Approach

Restart the same server in the background and reopen the page in the default browser.

## Steps

1. Run `python3 -m http.server 8765` from `/Users/justin/Documents/vscode/scorecardgtm.com` in the background.
   - Note: I already kicked this off (background task `bku5he86d`) before plan mode was signaled. If it is healthy, no second start is needed; otherwise restart.
2. Verify it is listening on port 8765 (e.g. `curl -sI http://localhost:8765/system.html` returns 200, or `lsof -ti:8765` returns a PID).
3. Open `http://localhost:8765/system.html` with `open`.

## Files

No file edits. Static assets only:
- `/Users/justin/Documents/vscode/scorecardgtm.com/system.html` (already exists)
- `/Users/justin/Documents/vscode/scorecardgtm.com/index.html`
- `/Users/justin/Documents/vscode/scorecardgtm.com/scorecard-logo.png`

## Verification

- `curl -sI http://localhost:8765/system.html` → `HTTP/1.0 200 OK`
- Browser tab loads the design system page (header, side TOC, six sections, three motif thumbnails rendered).

## Stopping later

`kill $(lsof -ti:8765)`
