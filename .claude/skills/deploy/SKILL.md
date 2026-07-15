---
name: deploy
description: Use when the user asks to deploy shokuei-hp to production — "デプロイして", "firebase deploy", "本番に反映して", "公開して". Runs build → deploy → verify → commit & push as one flow.
---

# Deploy shokuei-hp to Firebase Hosting

The site is an **Astro static build** (`dist-astro/`) as of the 2026-07-06 cutover. `firebase.json`'s `hosting.public` is `dist-astro`, with `cleanUrls: true` (no SPA rewrite — each route is its own `.html` file). The old React/Vite `dist/` build is no longer deployed.

## DO
1. Run `npx astro build` (builds `dist-astro/`). If it fails, stop and report the error — nothing else happens.
2. Run `npx firebase deploy` (deploys Hosting `dist-astro/` + `firestore.rules`).
3. Verify: `curl -s -o /dev/null -w "%{http_code}" https://shokuei-hp.web.app/` — expect 200. Spot-check one non-home route too (e.g. `/features`) since cleanUrls routing is what makes non-home pages reachable at all.
4. Show `git status --short`, then commit **all** changes with a one-line Japanese message following the existing convention (`feat:` / `fix:` prefix + 日本語要約), and `git push`.

## DON'T
- Don't deploy if the build failed or was skipped.
- Don't commit without first showing the file list — if unrelated/unexpected files appear (e.g. files under `docs/`), list them and ask before including.
- Don't force-push, amend, or skip hooks.
- Don't reintroduce a catch-all `rewrites: [{ source: "**", destination: "/index.html" }]` in `firebase.json` — that was the React SPA's fallback and would break every route by serving the homepage HTML for all of them under the current static multi-page Astro output.

## OUTPUT FORMAT
1. **Build**: OK / failed (with error)
2. **Deploy**: Hosting URL + HTTP status from verification (home + one other route)
3. **Commit**: hash + message + pushed branch (or "commit skipped: <reason>")
