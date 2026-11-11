// =====================================================================
//  MOVEMENT LIBRARY
//  Extra movements you can swap into, or add to, a day's session from
//  the app (the ⇄ button on an exercise, or "+ Add Movement").
//  Each movement looks like:
//    { name: "KB swing", focus: "Power", sets: "4-5", reps: "3-5",
//      cue: "One short coaching cue.", equipment: "Kettlebell" },
//  - "focus" must match one of the focus names below.
//  - "sets" can be a range like "4-5". When you add a movement to a
//    session, the app uses the first number for the sets you tap off.
//  - Keep the commas, quote marks and brackets exactly like the examples.
// =====================================================================

window.MOVEMENTS = {
  // The focus picker shows these in this order. "rest" is used when a
  // movement from this focus is added to a session.
  focuses: [
    { name: "Power", rest: "2-3 min" },
    { name: "Paddle & Pull", rest: "60-90 sec" },
    { name: "Legs & Balance", rest: "60-90 sec" },
    { name: "Rotation & Core", rest: "60-90 sec" },
    { name: "Shoulder Health", rest: "60 sec" },
    { name: "Conditioning", rest: "as written" },
  ],

  list: [
    // ---------- Power: 4-5 x 3-5 ----------
    { name: "KB swing", focus: "Power", sets: "4-5", reps: "3-5", cue: "Snap the hips forward; the bell floats up and your arms just guide it.", equipment: "Kettlebell" },
    { name: "KB snatch", focus: "Power", sets: "4-5", reps: "3-5/side", cue: "Punch your hand through at the top so the bell rolls over softly, not onto your wrist.", equipment: "Kettlebell" },
    { name: "DB jump squat (light)", focus: "Power", sets: "4-5", reps: "3-5", cue: "Light dumbbells, quick quarter-squat dip, jump tall, land soft.", equipment: "Light dumbbells" },
    { name: "Broad jump", focus: "Power", sets: "4-5", reps: "3-5", cue: "Swing the arms, jump out not up, and stick the landing.", equipment: "None" },
    { name: "Explosive push-up", focus: "Power", sets: "4-5", reps: "3-5", cue: "Push hard enough that your hands leave the floor; land with soft elbows.", equipment: "None" },
    { name: "DB push press", focus: "Power", sets: "4-5", reps: "3-5", cue: "Quick shallow dip, then drive with the legs to straight arms overhead.", equipment: "Dumbbells" },

    // ---------- Paddle & Pull: 3-4 x 4-6 ----------
    { name: "Pull-up", focus: "Paddle & Pull", sets: "3-4", reps: "4-6", cue: "From a dead hang, drive your elbows down to your ribs until your chin clears the bar.", equipment: "Pull-up bar" },
    { name: "Chin-up", focus: "Paddle & Pull", sets: "3-4", reps: "4-6", cue: "Palms facing you, chest up to the bar, straight arms at the bottom.", equipment: "Pull-up bar" },
    { name: "Single-arm DB row", focus: "Paddle & Pull", sets: "3-4", reps: "4-6/side", cue: "Pull your elbow back toward your hip without twisting your body.", equipment: "Dumbbell, bench" },
    { name: "Renegade row", focus: "Paddle & Pull", sets: "3-4", reps: "4-6/side", cue: "Feet wide and hips square to the floor while you row.", equipment: "Dumbbells" },
    { name: "Scap pull-up", focus: "Paddle & Pull", sets: "3-4", reps: "4-6", cue: "Arms stay straight: pull your shoulders down away from your ears, then relax.", equipment: "Pull-up bar" },
    { name: "DB pullover", focus: "Paddle & Pull", sets: "3-4", reps: "4-6", cue: "Ribs down, elbows soft; lower behind your head, then pull back over your chest.", equipment: "Dumbbell, bench" },

    // ---------- Legs & Balance: 3 x 5-6 each side ----------
    { name: "Bulgarian split squat", focus: "Legs & Balance", sets: "3", reps: "5-6/leg", cue: "Back foot on the bench, drop straight down, front leg does the work.", equipment: "Dumbbells, bench" },
    { name: "Single-leg RDL", focus: "Legs & Balance", sets: "3", reps: "5-6/leg", cue: "Hips level, back leg in a straight line with your body.", equipment: "Dumbbell or kettlebell" },
    { name: "Cossack squat", focus: "Legs & Balance", sets: "3", reps: "5-6/side", cue: "Sit deep into one hip with the other leg straight, heel down.", equipment: "Bodyweight or kettlebell" },
    { name: "Lateral lunge", focus: "Legs & Balance", sets: "3", reps: "5-6/side", cue: "Big step to the side, sit back into that hip, push back to the middle.", equipment: "Dumbbell or kettlebell" },
    { name: "Step-up", focus: "Legs & Balance", sets: "3", reps: "5-6/leg", cue: "Whole foot on the box and drive through the top leg; don't push off the bottom one.", equipment: "Box, dumbbells" },
    { name: "KB goblet squat", focus: "Legs & Balance", sets: "3", reps: "5-6", cue: "Hold the bell tight to your chest and sit down between your heels.", equipment: "Kettlebell" },

    // ---------- Rotation & Core: 3 x 5-8 ----------
    { name: "Turkish get-up", focus: "Rotation & Core", sets: "3", reps: "2/side", cue: "Arm locked, eyes on the bell, every step slow.", equipment: "Kettlebell" },
    { name: "KB halo", focus: "Rotation & Core", sets: "3", reps: "5-8 each way", cue: "Ribs down and glutes tight; circle the bell close to your head.", equipment: "Kettlebell" },
    { name: "DB woodchop", focus: "Rotation & Core", sets: "3", reps: "5-8/side", cue: "Turn from the hips and pivot the back foot; arms stay long.", equipment: "Dumbbell" },
    { name: "Hanging knee raise / toes-to-bar", focus: "Rotation & Core", sets: "3", reps: "5-8", cue: "Curl your hips up toward the bar and lower slowly, no swinging.", equipment: "Pull-up bar" },
    { name: "Dead bug", focus: "Rotation & Core", sets: "3", reps: "5-8/side", cue: "Keep your lower back pressed into the floor the whole time.", equipment: "None" },
    { name: "KB windmill", focus: "Rotation & Core", sets: "3", reps: "5-8/side", cue: "Eyes on the bell overhead; push your hip out and fold sideways.", equipment: "Kettlebell" },

    // ---------- Shoulder Health: 2-3 x 8-10, light ----------
    { name: "Dead hang", focus: "Shoulder Health", sets: "2-3", reps: "20-30s", cue: "Relax into the hang with your shoulders gently switched on.", equipment: "Pull-up bar" },
    { name: "KB bottoms-up press", focus: "Shoulder Health", sets: "2-3", reps: "8-10/side", cue: "Light bell held upside down; squeeze the handle hard and press slowly.", equipment: "Light kettlebell" },
    { name: "DB Y-T-W raise", focus: "Shoulder Health", sets: "2-3", reps: "8-10", cue: "Chest on an incline bench, very light weights, thumbs up, squeeze the shoulder blades.", equipment: "Light dumbbells, bench" },
    { name: "Side-lying DB external rotation", focus: "Shoulder Health", sets: "2-3", reps: "8-10/side", cue: "Elbow pinned to your side; rotate the weight up slowly.", equipment: "Light dumbbell" },

    // ---------- Conditioning: 8-10 rounds ----------
    { name: "Spin bike sprints", focus: "Conditioning", sets: "8-10", reps: "20s on / 40s off", cue: "All-out for 20 seconds, then easy spinning for 40.", equipment: "Spin bike" },
    { name: "KB swing EMOM", focus: "Conditioning", sets: "8-10", reps: "swings every minute", cue: "Start each minute with a set of crisp swings; rest for the rest of the minute.", equipment: "Kettlebell" },
  ],
};
