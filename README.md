# Pang Fitness

A tiny iPhone web app for sticking to a 3-day-a-week weights program around surfing.

- **Today** – opens straight to today's session (warm-up + exercises, sets × reps, rest). Tap a card to tick it off. Rest days say "Go surf" and show your next lift day.
- **Swap** – shoulders cooked? Tap *Swap session* to switch today's session. The rest of the week re-shuffles so you still get all three sessions in.
- **Week** – the 7 days at a glance.
- **Settings** – pick your 3 lift days, and set/reset the start date of your 5-week cycle.
- **5-week cycle** – shows "Week X of 5". Week 5 is the deload: sets are automatically halved.
- **How to run it** – the rules are shown under every session.

Everything is saved on your phone only (in the browser). No accounts, no server. Ticks clear each new day; swaps clear each new week (weeks start Monday).

## Files

| File | What it is |
|---|---|
| `program.js` | **Your program.** Exercises, warm-up, rules. This is the one to edit. |
| `index.html` | The app itself. You shouldn't need to touch it. |
| `manifest.json`, `icon.png` | Home-screen name and icon. |

## Changing exercises

Open `program.js` (you can edit it right on github.com – click the file, then the pencil icon, then "Commit changes"). Each exercise is one line:

```js
{ name: "Romanian deadlift", sets: 4, reps: "5", rest: "2-3 min" },
```

- `sets` must be a plain number (the app halves it on deload week).
- `reps` and `rest` are text in quotes, so `"6/leg"`, `"30s/side"`, `"30m"` all work.
- Optional: `note: "Max effort"` adds a short note.
- Keep the quotes, commas and brackets exactly as they are. If the app goes blank after an edit, a missing comma or quote is almost always the reason.

After you save, wait a minute, then close and reopen the app on your phone to get the new version.

## Putting it on your iPhone (free)

1. On github.com, open this repo → **Settings** → **Pages**.
2. Under *Build and deployment*, set **Source: Deploy from a branch**, **Branch: `main`**, folder **`/ (root)`**, then **Save**.
3. Wait 1–2 minutes. The page shows your link, like `https://aidanpang.github.io/Pang-Fitness/`.
4. On your iPhone, open that link in **Safari**.
5. Tap the **Share** button (square with an up arrow) → **Add to Home Screen** → **Add**.

It now opens full-screen like a normal app.

> GitHub Pages is free for **public** repos. If this repo is private (and you're on the free GitHub plan), either make it public (Settings → General → Danger Zone → Change visibility; the program is the only thing in it), or use [Netlify Drop](https://app.netlify.com/drop): download this repo as a ZIP, unzip it, and drag the folder onto that page to get a free link.

**Note:** your ticks and settings live in the home-screen app on that phone. If you delete the app or clear Safari's website data, they reset (no big deal – just pick your days and start date again).
