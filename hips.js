// =====================================================================
//  BETWEEN SETS: HIPS
//  The card on Today with one Mobility and one Strength movement to do
//  while you rest between sets.
//  - "pairs" is the default for each session, in order: Day 1, Day 2, Day 3.
//  - Each movement looks like:
//      { name: "Couch stretch", dose: "30s each side", hold: 30, sides: 2 },
//    "dose" is the text you see. For a timed hold, also add:
//      hold:  seconds per hold (turns on the countdown timer)
//      sides: 2 if it's done on each side
//      reps:  holds per side (leave out for 1)
//  - Use the Swap button on the card to pick a different movement for
//    today's session only; the pairs below stay the same.
//  - Keep the commas, quote marks and brackets exactly like the examples.
// =====================================================================

window.HIPS = {
  title: "Between sets",
  pairs: [
    { mobility: "90/90 hip switches", strength: "Cossack squat" },        // Day 1
    { mobility: "World's greatest stretch", strength: "Hip airplanes" },  // Day 2
    { mobility: "Couch stretch", strength: "Pop-up drill" },              // Day 3
  ],

  mobility: [
    { name: "90/90 hip switches", dose: "6 each side" },
    { name: "World's greatest stretch", dose: "3 each side" },
    { name: "Couch stretch", dose: "30s each side", hold: 30, sides: 2 },
    { name: "Pigeon stretch", dose: "30s each side", hold: 30, sides: 2 },
    { name: "Deep squat hold", dose: "30s", hold: 30 },
    { name: "Spiderman lunge with reach", dose: "4 each side" },
    { name: "Frog rock-backs", dose: "8 reps" },
    { name: "Thoracic open book", dose: "6 each side" },
    { name: "Knee-to-wall ankle mobility", dose: "10 each side" },
  ],

  strength: [
    { name: "Cossack squat", dose: "5 each side" },
    { name: "Hip airplanes", dose: "4 each side" },
    { name: "Pop-up drill", dose: "5 reps" },
    { name: "Shin box get-ups", dose: "4 each side" },
    { name: "Lateral lunge (bodyweight)", dose: "5 each side" },
    { name: "Single-leg glute bridge", dose: "8 each side" },
    { name: "Skater squat (bodyweight, to box/pad)", dose: "4 each side" },
    { name: "Copenhagen plank (short lever)", dose: "15s each side", hold: 15, sides: 2 },
    { name: "Pop-up to low lunge hold", dose: "4 each side, 3s hold", hold: 3, sides: 2, reps: 4 },
  ],
};
