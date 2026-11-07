# Notes for Claude

- The owner is not a developer. Keep explanations plain and short, and tell them exactly what (if anything) they need to tap.
- The app is live on GitHub Pages, served from the `main` branch. The owner does not want to merge pull requests by hand: when a change is finished and tested, push your branch, open a pull request into `main` and merge it yourself so the live app updates.
- Changes reach the phone within about 10 minutes of merging; the owner may need to close and reopen the home-screen app.
- Keep it a single page with no build step: `index.html` (app), `program.js` (the workout program, the file the owner edits), `manifest.json` + `icon.png` (home screen).
