// =====================================================================
//  YOUR PROGRAM
//  Edit this file to change exercises. Each exercise looks like:
//    { name: "Exercise name", sets: 4, reps: "5", rest: "2-3 min", how: { ... } },
//  - "sets" must be a number (the app halves it on deload week, and you
//    tap the card once per set).
//  - "reps" and "rest" are just text, e.g. "6/leg", "30s/side", "30m".
//  - "note" (optional) adds a short note, e.g. note: "Max effort".
//  - "how" is what the "How to do it" button shows:
//      setup: one sentence or two on getting into position
//      steps: [ "first step", "second step", ... ]
//      avoid: [ "common mistake", ... ]
//      demo:  [ "search words" ]  -> a YouTube search link for each
//    You can leave "how" out of a new exercise; it just won't have the button.
//  - Keep the commas, quote marks and brackets exactly like the examples.
//    If the app shows "Couldn't read your program", a comma or quote is
//    missing: undo your last edit on GitHub.
// =====================================================================

window.PROGRAM = {
  warmup: {
    title: "Warm-up (~8 min)",
    items: [
      { name: "5 min easy spin bike", short: "Spin bike", how: {
        setup: "Seat height so your knee is only slightly bent at the bottom of the pedal stroke.",
        steps: [
          "Pedal at an easy, steady pace. You should be able to talk in full sentences.",
          "Bring it up a little over the last minute so you're warm and lightly sweating.",
        ],
        avoid: ["Going hard. This is a warm-up, not a workout."],
      } },
      { name: "World's greatest stretch 5/side", short: "World's greatest stretch", how: {
        setup: "Start in a push-up position. Step your right foot up outside your right hand into a long, low lunge. Back leg straight, back knee off the floor.",
        steps: [
          "Drop your right elbow down toward the inside of your right foot. Pause.",
          "Put that hand back down, then rotate and reach your right arm up to the ceiling. Eyes follow your hand.",
          "Bring the hand down to the floor, step back to the push-up position and switch sides. That's one rep.",
        ],
        avoid: [
          "Rushing. Move slowly and breathe out as you reach.",
          "Letting your back hip sag. Squeeze the back glute so you feel the stretch in the front of that hip.",
        ],
        demo: ["world's greatest stretch"],
      } },
      { name: "Band pull-aparts x15", short: "Pull-aparts", how: {
        setup: "Hold a light band in both hands, about shoulder-width apart, arms straight out in front at chest height.",
        steps: [
          "Pull the band apart by squeezing your shoulder blades together, until it touches your chest.",
          "Keep your arms nearly straight the whole time.",
          "Return slowly. Don't let the band snap back.",
        ],
        avoid: [
          "Shrugging your shoulders up toward your ears.",
          "Arching your lower back to finish the rep. Keep your ribs down.",
        ],
        demo: ["band pull apart"],
      } },
      { name: "KB halos x5 each way", short: "KB halos", how: {
        setup: "Hold a light kettlebell upside down by the horns, bell up, in front of your chest. Stand tall, glutes and stomach tight.",
        steps: [
          "Circle the bell around your head, keeping it close to your skull. It passes behind your head at neck level.",
          "Come back to the front of your chest. That's one. Do 5, then 5 the other way.",
          "Move slowly and keep your shoulders loose.",
        ],
        avoid: [
          "Arching your lower back or flaring your ribs as the bell goes behind you.",
          "Going heavy. This is to loosen your shoulders before the session.",
        ],
        demo: ["kettlebell halo"],
      } },
    ],
  },
  sessions: [
    {
      name: "Day 1",
      title: "Legs + Pull",
      exercises: [
        { name: "Broad or box jumps", sets: 4, reps: "3", rest: "full (as long as you need)", note: "Max effort", how: {
          setup: "Feet hip-width apart. Broad jump: clear space in front of you, on a floor that isn't slippery. Box jump: a sturdy box that can't slide or tip (not a bench, crate or stacked plates), low enough that you land in a quarter squat, not a deep squat. Stand close, about a foot away.",
          steps: [
            "Swing your arms back as you quickly bend your hips and knees.",
            "Explode up and forward, swinging your arms through hard.",
            "Land softly on both feet: hips back, knees bent and pointing over your toes. Hold the landing for a second.",
            "Box jump: stand up tall on the box, then STEP down. Walk back and reset fully before the next jump.",
          ],
          avoid: [
            "Knees caving in on the landing.",
            "Jumping back down off the box.",
            "Doing them tired. Every rep should be your best jump. Rest as long as you need.",
          ],
          demo: ["broad jump", "box jump"],
        } },
        { name: "Front squat or heavy goblet squat", sets: 4, reps: "5", rest: "2-3 min", how: {
          setup: "Front squat: work in a squat rack. Set the bar just below shoulder height, and set the safety arms a little below where the bar will be at the bottom of your squat. Step under so the bar rests on the front of your shoulders, close to your throat, fingertips under the bar (or arms crossed), elbows pointing forward and high. Stand up and take two small steps back. If a rep gets stuck, sink down and let the bar roll forward off your shoulders onto the safety arms, then step out. No rack with safety arms? Do the goblet squat instead. Goblet: hold a heavy dumbbell or kettlebell upright against your chest, elbows under it. Feet about shoulder-width, toes slightly out.",
          steps: [
            "Take a big breath into your belly and brace like you're about to be punched.",
            "Sit straight down between your heels. Knees push out over your toes, chest stays up.",
            "Go as deep as you can while keeping your back flat. Thighs at least parallel to the floor if your mobility allows.",
            "Drive up through your whole foot, chest up. Front squat: keep your elbows high. Goblet: keep the weight tight to your chest. Breathe out at the top.",
          ],
          avoid: [
            "Front squat: elbows dropping, so the bar rolls forward and your back rounds. Goblet: the weight drifting away from your chest and pulling you forward.",
            "Heels lifting or knees caving in.",
          ],
          demo: ["front squat", "goblet squat"],
        } },
        { name: "Weighted pull-ups", sets: 4, reps: "4", rest: "60-90 sec", how: {
          setup: "Add weight with a dip belt, a weight vest, or a dumbbell held between your feet. Hands just wider than shoulders, palms facing away.",
          steps: [
            "Start from a dead hang. Pull your shoulders down away from your ears before you bend your arms.",
            "Pull your chest toward the bar, driving your elbows down toward your ribs, until your chin clears the bar.",
            "Lower under control all the way back to a straight-arm hang.",
          ],
          avoid: [
            "Kicking or swinging to get up.",
            "Half reps. Full hang at the bottom, chin over the bar at the top.",
            "So much weight that a rep grinds. Stop with about 2 reps left.",
          ],
          demo: ["weighted pull up"],
        } },
        { name: "Bulgarian split squat", sets: 3, reps: "6/leg", rest: "60-90 sec", how: {
          setup: "Stand in front of a bench, about a big step away. Put the top of your back foot on the bench, laces down. Hold dumbbells at your sides or one at your chest.",
          steps: [
            "Lower straight down until your back knee is just above the floor.",
            "Keep your front knee pointing over your toes. A slight forward lean is fine.",
            "Push through your whole front foot to stand back up. Do all reps on one leg, then switch.",
          ],
          avoid: [
            "Pushing off the back foot. The front leg does the work.",
            "Front foot too close to the bench, so your heel lifts. Shuffle it forward.",
            "Front knee caving in. Slow down if you wobble.",
          ],
          demo: ["bulgarian split squat"],
        } },
        { name: "Pallof press or side plank", sets: 3, reps: "30s/side", rest: "60-90 sec", how: {
          setup: "Pallof press: anchor a band at chest height. Stand side-on to it, a step or two away so the band is tight, feet shoulder-width, knees soft. Hold the band with both hands at your chest. Side plank: lie on your side, elbow directly under your shoulder, feet stacked.",
          steps: [
            "Pallof press: push your hands straight out from your chest and hold them there. The band will try to twist you; don't let it.",
            "Keep your hips and shoulders square to the front the whole time. Bring your hands back in before the 30 seconds runs out if you need a breather, then press out again.",
            "Side plank: lift your hips so your body is a straight line from head to heels, and hold.",
            "Turn around and do the other side.",
          ],
          avoid: [
            "Pallof: rotating toward the anchor, or leaning away from it.",
            "Side plank: hips sagging toward the floor, or rolling forward.",
          ],
          demo: ["pallof press", "side plank"],
        } },
      ],
    },
    {
      name: "Day 2",
      title: "Upper + Rotation",
      exercises: [
        { name: "Plyo push-ups", sets: 4, reps: "5", rest: "2-3 min", how: {
          setup: "Push-up position, hands slightly wider than your shoulders, body in a straight line, stomach and glutes tight.",
          steps: [
            "Lower your chest until it's just above the floor, elbows angled back about 45 degrees from your sides, not flared straight out.",
            "Push as hard and fast as you can so your hands leave the floor.",
            "Land with soft, slightly bent elbows and flow straight into the next rep.",
          ],
          avoid: [
            "Hips sagging or piking up.",
            "Landing on locked straight arms.",
            "Elbows flaring straight out to the sides. It strains the front of the shoulder, especially on the landing.",
            "Too hard? Do them with your hands on a bench or box, or from your knees.",
          ],
          demo: ["plyometric push up"],
        } },
        { name: "Half-kneeling single-arm DB press", sets: 4, reps: "5/side", rest: "2-3 min", how: {
          setup: "Kneel on one knee, with the knee on the floor on the same side as the arm that presses (pressing right arm = right knee down). Front foot flat, both knees at 90 degrees. Dumbbell at your shoulder.",
          steps: [
            "Squeeze the glute of the down leg and pull your ribs down.",
            "Press the dumbbell straight up until your arm is straight and your bicep is next to your ear.",
            "Lower it back to your shoulder under control. Do all reps, then switch arm and knee.",
          ],
          avoid: [
            "Leaning away from the dumbbell, or arching your lower back to get it up.",
            "Letting the down-leg glute switch off. That's what keeps your back safe.",
          ],
          demo: ["half kneeling single arm dumbbell press"],
        } },
        { name: "Chin-ups", sets: 4, reps: "5", rest: "60-90 sec", how: {
          setup: "Hands shoulder-width apart, palms facing you.",
          steps: [
            "Start from a dead hang. Pull your shoulders down away from your ears.",
            "Pull your chest up toward the bar until your chin clears it.",
            "Lower under control to a full straight-arm hang.",
          ],
          avoid: [
            "Swinging or kicking.",
            "Stopping short at the bottom. Straighten your arms every rep.",
          ],
          demo: ["chin up"],
        } },
        { name: "Turkish get-up", sets: 3, reps: "2/side", rest: "60-90 sec", how: {
          setup: "Learn it with no weight (or a shoe balanced on your fist) before using a kettlebell. To get the bell up: lie curled on your right side facing it, grab the handle with both hands, roll onto your back holding it at your chest, then press it up with both hands and let go with your left. Start position: on your back, kettlebell in your right hand, arm straight up to the ceiling. Right knee bent with your foot flat. Left arm and left leg flat on the floor, out at about 45 degrees.",
          steps: [
            "Push through your right foot and punch the bell up as you roll onto your left elbow, then push up onto your left hand.",
            "Lift your hips into a bridge, then sweep your left leg back under you and put that knee down.",
            "Lift your left hand off the floor so you're kneeling upright, then swing your left foot round behind you so you're in a straight half-kneeling lunge. Then stand up.",
            "Reverse every step slowly until you're lying on your back again with the arm straight up. That's one rep. After 2, bring the bell to your chest with both hands and roll onto your side to set it down. Then switch sides, picking it up the same way with your left hand.",
            "The whole time: arm locked straight, wrist straight, shoulder pulled down away from your ear, eyes on the bell.",
          ],
          avoid: [
            "Bending the arm holding the bell.",
            "Letting the bell push your shoulder up toward your ear. Keep it pulled down into the socket.",
            "Picking up or putting down the bell with one hand. Always use both hands, rolled onto your side.",
            "Trying to save a falling bell. If it tips, let it go and move out of the way.",
            "Rushing. Each step should be slow and controlled.",
          ],
          demo: ["turkish get up"],
        } },
        { name: "Band external rotations or face pulls", sets: 3, reps: "15", rest: "60-90 sec", how: {
          setup: "External rotations: anchor a band at elbow height and stand side-on to it. Hold the band in the hand farther from the anchor, elbow bent to 90 degrees and tucked to your side (a rolled towel between elbow and ribs helps). Face pulls: anchor a band at face height and hold it with both hands, palms down, arms out in front.",
          steps: [
            "External rotations: keeping your elbow pinned, rotate your forearm outward away from your belly, then come back slowly. Do all reps, then turn around and do the other arm.",
            "Face pulls: pull the band toward your forehead with your elbows high and wide, finishing with your hands beside your ears.",
            "Light band, slow and controlled, squeeze at the end of each rep.",
          ],
          avoid: [
            "Going heavy. These are for healthy shoulders, not strength.",
            "Elbow drifting away from your side (rotations) or dropping low (face pulls).",
            "Leaning back to cheat the rep.",
          ],
          demo: ["band external rotation", "band face pull"],
        } },
        { name: "Hanging knee raises", sets: 3, reps: "10", rest: "60-90 sec", how: {
          setup: "Hang from the bar, hands shoulder-width, shoulders pulled slightly down, legs together.",
          steps: [
            "Bring your knees up toward your chest by curling your hips and tucking your tailbone under, not just lifting your thighs.",
            "Pause briefly at the top.",
            "Lower slowly, without swinging, until your legs are straight.",
          ],
          avoid: [
            "Swinging to build momentum. Stop the swing before the next rep.",
            "Arching your lower back at the bottom.",
          ],
          demo: ["hanging knee raise"],
        } },
      ],
    },
    {
      name: "Day 3",
      title: "Hinge + Full Body Power",
      exercises: [
        { name: "KB swings (32kg)", sets: 6, reps: "8", rest: "2-3 min", how: {
          setup: "Feet a bit wider than shoulders, kettlebell about a foot in front of you. Push your hips back, keep your back flat and grab the handle with both hands.",
          steps: [
            "Hike the bell back between your legs, high up toward your groin, like a football snap.",
            "Snap your hips forward hard and stand tall. The bell floats up to about chest height from the hip drive. Your arms just guide it.",
            "At the top: glutes squeezed, stomach tight, standing straight like a plank.",
            "Let the bell fall. When your forearms touch your hips, push your hips back and hike it again.",
            "To finish the set: let the bell swing back between your legs once more, then let it drift forward and set it down in front of you with a flat back, hips back. Don't stop it dead at your feet.",
          ],
          avoid: [
            "Squatting it. It's a hinge: hips go back, knees bend only a little.",
            "Lifting the bell with your arms or shoulders.",
            "Leaning back at the top, or rounding your back at the bottom.",
          ],
          demo: ["kettlebell swing"],
        } },
        { name: "Romanian deadlift", sets: 4, reps: "5", rest: "2-3 min", how: {
          setup: "Get the weight up first: take a barbell off a rack set at mid-thigh height, or deadlift it (or the dumbbells) up from the floor with a flat back, hips back and chest up. Stand tall with it in front of your thighs, hands just outside your legs. Feet hip-width, knees slightly bent. At the end of the set, put it down the same way.",
          steps: [
            "Push your hips straight back. Let the weight slide down your thighs, staying close to your legs.",
            "Keep your back flat and your knees slightly bent but still.",
            "Go down until you feel a strong stretch in your hamstrings (usually around or just below the knees).",
            "Drive your hips forward to stand tall. Squeeze your glutes at the top.",
          ],
          avoid: [
            "Rounding your lower back to reach lower. Stop where your back stays flat.",
            "Bending your knees more as you go down. That turns it into a squat.",
            "Letting the weight drift away from your legs.",
          ],
          demo: ["romanian deadlift"],
        } },
        { name: "DB push press", sets: 4, reps: "4", rest: "60-90 sec", how: {
          setup: "Stand with feet hip-width, dumbbells held at your shoulders, palms facing in. Stomach tight.",
          steps: [
            "Do a quick, shallow dip: bend your knees a few inches, keeping your chest upright.",
            "Without pausing, drive hard through your legs and press the dumbbells straight overhead.",
            "Finish with arms straight and biceps beside your ears.",
            "Lower the dumbbells back to your shoulders under control.",
          ],
          avoid: [
            "A deep or slow dip. It's a quick bounce.",
            "Leaning back or arching your lower back at the top.",
          ],
          demo: ["dumbbell push press"],
        } },
        { name: "Explosive chest-to-bar pull-ups", sets: 4, reps: "3", rest: "60-90 sec", how: {
          setup: "Hands just wider than shoulders, palms facing away. Start from a dead hang with your shoulders pulled down.",
          steps: [
            "Pull as fast as you can, aiming to touch the bar with your upper chest. Lean back slightly as you pull.",
            "Lower under control to a full hang.",
            "Reset for a second, then go again. Every rep fast.",
          ],
          avoid: [
            "Kipping or swinging. Speed comes from pulling hard, not momentum.",
            "Grinding a slow rep. If you slow down, the set is done.",
          ],
          demo: ["chest to bar pull up strict"],
        } },
        { name: "Single-leg RDL", sets: 3, reps: "6/leg", rest: "60-90 sec", how: {
          setup: "Stand on one leg with that knee slightly bent. Hold a dumbbell or kettlebell in the opposite hand. Hold something with your free hand for balance if you need to.",
          steps: [
            "Hinge forward at the hips while your free leg goes straight back behind you, in a line with your body.",
            "Keep your hips level: the toes of your back foot point at the floor.",
            "Lower until you feel a stretch in the standing leg's hamstring, or your body is close to parallel with the floor.",
            "Drive through your standing foot and squeeze that glute to come back up. All reps, then switch legs.",
          ],
          avoid: [
            "Your hip opening up and rotating to the side.",
            "Rounding your back to reach lower.",
          ],
          demo: ["single leg romanian deadlift"],
        } },
        { name: "Farmer or suitcase carry", sets: 3, reps: "30m", rest: "60-90 sec", how: {
          setup: "Farmer carry: a heavy dumbbell or kettlebell in each hand. Suitcase carry: a heavy weight in one hand only. Pick the weights up from beside your feet with a flat back, like a deadlift: hips back, chest up, push the floor away. Then stand tall, shoulders down and back, stomach braced.",
          steps: [
            "Walk 30 metres with short, quick, controlled steps.",
            "Suitcase carry: stay perfectly upright, without leaning toward or away from the weight. Switch hands halfway through every set (15 m each hand) so both sides do the same work.",
            "Put the weights down with a flat back, like a deadlift.",
          ],
          avoid: [
            "Shrugging, or letting the weights pull your shoulders forward.",
            "Leaning to one side, or rushing.",
          ],
          demo: ["farmer carry", "suitcase carry"],
        } },
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
