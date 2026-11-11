# Pang Fitness

A tiny iPhone web app for sticking to a 3-day-a-week weights program around surfing.

- **Today** – opens straight to today's session (warm-up + exercises, sets × reps, rest). Rest days say "Go surf" and show your next lift day.
- **Sets** – tap an exercise card once each time you finish a set. The bar under it shows how many are done and which set you're on ("Set 2 of 4"); it counts as finished after the last set. **↶ Undo set** takes one back off. The warm-up is a single tap.
- **How to do it** – every exercise (and each warm-up move) has a button that shows how to set up, the steps, the common mistakes to avoid, and a link to a YouTube demo.
- **Swap** – shoulders cooked? Tap *Swap session* to switch today's session. The rest of the week re-shuffles so you still get all three sessions in.
- **Week** – the 7 days at a glance. Tap any lift day to see that workout (sets × reps, rest). Tapping today's lift day takes you to Today, where you tick things off.
- **Library** – 30 extra movements grouped by focus (Power, Paddle & Pull, Legs & Balance, Rotation & Core, Shoulder Health, Conditioning), each with sets × reps, a coaching cue and equipment. Pick a focus at the top to filter.
- **Swap or add** – on a day, tap ⇄ on an exercise to swap it for a library movement (or remove it), or tap **+ Add Movement**. The library slides up over the day. Changes stick to that session every week until you tap **Reset to Program**; `program.js` itself is never changed.
- **Settings** – pick your 3 lift days, and set/reset the start date of your 5-week cycle.
- **5-week cycle** – shows "Week X of 5". Week 5 is the deload: sets are automatically halved.
- **How to run it** – the rules are shown under every session.

Everything is saved on your phone only (in the browser). No accounts, no server. Sets clear each new day; swaps clear each new week (weeks start Monday).

## Files

| File | What it is |
|---|---|
| `program.js` | **Your program.** Exercises, warm-up, rules. This is the one to edit. |
| `movements.js` | **The movement library.** Add or change movements here (same rules as `program.js`). |
| `index.html` | The app itself. You shouldn't need to touch it. |
| `manifest.json`, `icon.png` | Home-screen name and icon. |

## Changing exercises

Open `program.js` (you can edit it right on github.com – click the file, then the pencil icon, then "Commit changes"). Each exercise starts like this:

```js
{ name: "Romanian deadlift", sets: 4, reps: "5", rest: "2-3 min", how: { ... } },
```

- `sets` must be a plain number (the app halves it on deload week).
- `reps` and `rest` are text in quotes, so `"6/leg"`, `"30s/side"`, `"30m"` all work.
- Optional: `note: "Max effort"` adds a short note.
- Optional: `how: { ... }` holds the "How to do it" notes: `setup` (text), `steps` and `avoid` (lists of text in square brackets), and `demo` (search words for the YouTube link). Copy the shape from an existing exercise. A new exercise without `how` just won't have the button.
- Keep the quotes, commas and brackets exactly as they are. If the app says **"Couldn't read your program"** after an edit, a comma, quote or bracket is missing: undo your last change (or fix the typo).

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
