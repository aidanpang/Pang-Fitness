// =====================================================================
//  YOUR PROGRAM
//  Edit this file to change exercises. Keep the same shape:
//    { name: "Exercise name", sets: 4, reps: "5", rest: "2-3 min" }
//  - "sets" must be a number (the app halves it on deload week).
//  - "reps" and "rest" are just text, so write whatever you like
//    e.g. "6/leg", "30s/side", "30m".
//  - Keep the commas and quote marks exactly like the examples.
// =====================================================================

window.PROGRAM = {
  warmup: {
    title: "Warm-up (~8 min)",
    items: [
      "5 min easy spin bike",
      "World's greatest stretch 5/side",
      "Band pull-aparts x15",
      "KB halos x5 each way",
    ],
  },

  sessions: [
    {
      name: "Day 1",
      title: "Legs + Pull",
      exercises: [
        { name: "Broad or box jumps", sets: 4, reps: "3", rest: "full (as long as you need)", note: "Max effort" },
        { name: "Front squat or heavy goblet squat", sets: 4, reps: "5", rest: "2-3 min" },
        { name: "Weighted pull-ups", sets: 4, reps: "4", rest: "60-90 sec" },
        { name: "Bulgarian split squat", sets: 3, reps: "6/leg", rest: "60-90 sec" },
        { name: "Pallof press or side plank", sets: 3, reps: "30s/side", rest: "60-90 sec" },
      ],
    },
    {
      name: "Day 2",
      title: "Upper + Rotation",
      exercises: [
        { name: "Plyo push-ups", sets: 4, reps: "5", rest: "2-3 min" },
        { name: "Half-kneeling single-arm DB press", sets: 4, reps: "5/side", rest: "2-3 min" },
        { name: "Chin-ups", sets: 4, reps: "5", rest: "60-90 sec" },
        { name: "Turkish get-up", sets: 3, reps: "2/side", rest: "60-90 sec" },
        { name: "Band external rotations or face pulls", sets: 3, reps: "15", rest: "60-90 sec" },
        { name: "Hanging knee raises", sets: 3, reps: "10", rest: "60-90 sec" },
      ],
    },
    {
      name: "Day 3",
      title: "Hinge + Full Body Power",
      exercises: [
        { name: "KB swings (32kg)", sets: 6, reps: "8", rest: "2-3 min" },
        { name: "Romanian deadlift", sets: 4, reps: "5", rest: "2-3 min" },
        { name: "DB push press", sets: 4, reps: "4", rest: "60-90 sec" },
        { name: "Explosive chest-to-bar pull-ups", sets: 4, reps: "3", rest: "60-90 sec" },
        { name: "Single-leg RDL", sets: 3, reps: "6/leg", rest: "60-90 sec" },
        { name: "Farmer or suitcase carry", sets: 3, reps: "30m", rest: "60-90 sec" },
      ],
    },
  ],

  rules: [
    "Reps low (3-6), stop each set with ~2 reps left",
    "Rest 2-3 min on the first two lifts each day, 60-90 sec on the rest",
    "Add weight when every rep still moves fast",
    "Every 5th week: deload, half the sets",
  ],

  cycleWeeks: 5, // the last week of each cycle is the deload
};
