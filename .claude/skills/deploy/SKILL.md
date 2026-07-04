---
name: deploy
description: Use when the user asks to deploy shokuei-hp to production — "デプロイして", "firebase deploy", "本番に反映して", "公開して". Runs build → deploy → verify → commit & push as one flow.
---

# Deploy shokuei-hp to Firebase Hosting

## DO
1. Run `npm run build`. If it fails, stop and report the error — nothing else happens.
2. Run `npx firebase deploy` (deploys Hosting `dist/` + `firestore.rules`).
3. Verify: `curl -s -o /dev/null -w "%{http_code}" https://shokuei-hp.web.app/` — expect 200.
4. Show `git status --short`, then commit **all** changes with a one-line Japanese message following the existing convention (`feat:` / `fix:` prefix + 日本語要約), and `git push`.

## DON'T
- Don't deploy if the build failed or was skipped.
- Don't commit without first showing the file list — if unrelated/unexpected files appear (e.g. files under `docs/`), list them and ask before including.
- Don't force-push, amend, or skip hooks.

## OUTPUT FORMAT
1. **Build**: OK / failed (with error)
2. **Deploy**: Hosting URL + HTTP status from verification
3. **Commit**: hash + message + pushed branch (or "commit skipped: <reason>")
