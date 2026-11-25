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

  // Optional stretch routine on rest / surf days (Today on a rest day: "Start stretch routine").
  // Same shape as above. Hold times here can differ from the Between sets card.
  restDay: {
    title: "Surf-day stretch",
    subtitle: "About 10 minutes for hips, upper back and ankles. Optional.",
    items: [
      { name: "Deep squat hold", dose: "45s", hold: 45 },
      { name: "90/90 hip switches", dose: "6 each side" },
      { name: "Pigeon stretch", dose: "45s each side", hold: 45, sides: 2 },
      { name: "Couch stretch", dose: "45s each side", hold: 45, sides: 2 },
      { name: "Frog rock-backs", dose: "10 reps" },
      { name: "Thoracic open book", dose: "6 each side" },
      { name: "Child's pose with side reach", dose: "30s each side", hold: 30, sides: 2 },
      { name: "Knee-to-wall ankle mobility", dose: "10 each side" },
    ],
  },

  // "How to do it" notes for the ⓘ buttons, by movement name.
  how: {
    "90/90 hip switches": {
      setup: "Sit on the floor with your knees bent, feet flat and wider than your hips. Hands on the floor behind you for support.",
      steps: [
        "Let both knees drop to one side, so your front and back legs each make roughly a right angle. Sit up tall.",
        "Lift your knees and rotate them over to the other side, keeping your feet on the floor. That's one rep.",
        "Keep switching side to side, slow and smooth. When it's easy, take your hands off the floor.",
      ],
      avoid: ["Forcing your knees down to the floor. Go only as far as is comfortable.", "Slumping. Keep your chest up."],
      demo: ["90 90 hip switch"],
    },
    "World's greatest stretch": {
      setup: "Start in a push-up position.",
      steps: [
        "Step your right foot up outside your right hand into a long, low lunge. Back leg straight.",
        "Drop your right elbow toward the inside of your right foot, then rotate and reach your right arm up to the ceiling. Eyes follow your hand.",
        "Hand back down, step back to the push-up position and switch sides.",
      ],
      avoid: ["Rushing. Breathe out as you reach.", "Letting your back hip sag. Squeeze the back glute."],
      demo: ["world's greatest stretch"],
    },
    "Couch stretch": {
      setup: "Kneel with your back to a wall or couch. Put your back knee close to the wall on a pad, with that shin running up the wall. Front foot flat in a lunge.",
      steps: [
        "Squeeze the glute of the back leg and tuck your tailbone under.",
        "Slowly lift your chest up toward upright until you feel a stretch down the front of your back hip and thigh.",
        "Breathe slowly and hold, then switch legs.",
      ],
      avoid: ["Arching your lower back to get upright.", "Going too hard. If it's too much, move your knee further from the wall or keep your hands on your front knee."],
      demo: ["couch stretch"],
    },
    "Pigeon stretch": {
      setup: "From hands and knees, bring your right knee forward behind your right wrist, with your shin angled across in front of you. Slide your left leg straight back.",
      steps: [
        "Square your hips toward the floor.",
        "Stay up tall on your hands, or fold forward over your front leg for more stretch.",
        "Breathe slowly and hold, then switch sides.",
      ],
      avoid: ["Pain in the front knee. Bring that foot closer to your hips, or put a cushion under that hip.", "Letting your hips tip over to one side."],
      demo: ["pigeon stretch"],
    },
    "Deep squat hold": {
      setup: "Feet about shoulder-width, toes turned out a little. Hold a post or door frame for balance if you need to.",
      steps: [
        "Sit down as low as you can with your heels on the floor and your chest up.",
        "Use your elbows to gently push your knees out.",
        "Breathe slowly and hold. Shift your weight side to side a little if you like.",
      ],
      avoid: ["Heels lifting. Put a small plate or book under your heels if they do.", "Collapsing forward. Stay as tall as you can."],
      demo: ["deep squat hold"],
    },
    "Spiderman lunge with reach": {
      setup: "Start in a push-up position.",
      steps: [
        "Step your right foot up outside your right hand and let your hips sink low.",
        "Rotate and reach your right arm up to the ceiling, eyes following your hand. Pause.",
        "Hand back down, step back and switch sides.",
      ],
      avoid: ["Letting the back hip sag. Keep the back leg working.", "Rushing through it."],
      demo: ["spiderman lunge with reach"],
    },
    "Frog rock-backs": {
      setup: "On hands and knees, spread your knees as wide as is comfortable, with your feet out in line with your knees and the insides of your feet on the floor.",
      steps: [
        "Keeping your back flat, slowly rock your hips back toward your heels until you feel a stretch in your inner thighs.",
        "Rock forward again. That's one rep.",
      ],
      avoid: ["Rounding your back.", "Forcing your knees wider than is comfortable."],
      demo: ["frog stretch rock back"],
    },
    "Thoracic open book": {
      setup: "Lie on your side with your knees bent and stacked, pulled up toward your chest. Arms straight out in front, palms together. Pillow under your head.",
      steps: [
        "Keep your knees together on the floor.",
        "Open your top arm up and over to the other side, eyes following your hand, so your upper back rotates.",
        "Pause, breathe out, then bring it back. Do all reps, then switch sides.",
      ],
      avoid: ["Your knees lifting or sliding apart.", "Forcing the shoulder down to the floor."],
      demo: ["thoracic open book stretch"],
    },
    "Knee-to-wall ankle mobility": {
      setup: "Half-kneel or stand facing a wall, with your front toes a few centimetres from it.",
      steps: [
        "Keeping your heel down, push your knee forward to touch the wall, in line with your middle toes.",
        "Come back. That's one rep.",
        "If it's easy, move your foot a little further from the wall.",
      ],
      avoid: ["Your heel lifting.", "Your knee caving inward."],
      demo: ["knee to wall ankle mobility"],
    },
    "Cossack squat": {
      setup: "Take a wide stance with your toes turned out a little. Hold something for balance at first if you need to.",
      steps: [
        "Shift your weight to one side and sit down into that hip. The other leg goes straight, toes pointing up.",
        "Keep your chest up and your bent-leg heel down.",
        "Push back up to the middle and go to the other side.",
      ],
      avoid: ["Your heel lifting on the bent leg.", "Going deeper than you can control."],
      demo: ["cossack squat"],
    },
    "Hip airplanes": {
      setup: "Stand on one leg with a soft knee and hinge forward until your body is close to level. Hands on your hips, or one hand on a wall for balance.",
      steps: [
        "Slowly rotate your pelvis open, turning your free hip up toward the ceiling.",
        "Then rotate it back down toward your standing leg. That's one rep.",
        "Move slowly and stay balanced. Do all reps, then switch legs.",
      ],
      avoid: ["Rounding your back.", "Rushing. Slow is the whole point."],
      demo: ["hip airplanes"],
    },
    "Pop-up drill": {
      setup: "Lie face down like you're on your board, hands flat under your chest.",
      steps: [
        "Push your chest up and snap your feet under you in one move.",
        "Land low in your surf stance, feet where they'd be on the board, eyes forward.",
        "Lie back down and repeat.",
      ],
      avoid: ["Dragging your back knee on the floor.", "Landing with your feet too close together or looking down."],
      demo: ["surf pop up drill"],
    },
    "Shin box get-ups": {
      setup: "Sit in the 90/90 position, front and back legs both bent to roughly right angles.",
      steps: [
        "Drive your front hip forward and come up onto your knees, tall, without using your hands.",
        "Lower back down to sitting with control.",
        "Rotate your knees to the other side and repeat.",
      ],
      avoid: ["Using your hands.", "Leaning back as you rise."],
      demo: ["shin box get up"],
    },
    "Lateral lunge (bodyweight)": {
      setup: "Stand with your feet together.",
      steps: [
        "Take a big step to the side and sit your hips back into that leg. The other leg stays straight.",
        "Push back to the start. Do all reps, then switch sides.",
      ],
      avoid: ["Your knee caving in.", "Your heel lifting on the bent leg."],
      demo: ["bodyweight lateral lunge"],
    },
    "Single-leg glute bridge": {
      setup: "Lie on your back with one foot flat near your hips and the other leg lifted, knee toward your chest.",
      steps: [
        "Push through your heel and lift your hips until your shoulder, hip and knee are in a line.",
        "Squeeze your glute for a second at the top, then lower slowly. Do all reps, then switch.",
      ],
      avoid: ["Arching your lower back.", "Your hips dropping to one side."],
      demo: ["single leg glute bridge"],
    },
    "Skater squat (bodyweight, to box/pad)": {
      setup: "Stand on one leg with a pad or low box behind you for your back knee. Arms forward for balance.",
      steps: [
        "Bend your standing leg and send your other knee back to lightly touch the pad.",
        "Stand back up through your whole front foot. Do all reps, then switch.",
      ],
      avoid: ["Your knee caving inward.", "Dropping onto the pad. Touch it softly."],
      demo: ["skater squat"],
    },
    "Copenhagen plank (short lever)": {
      setup: "Lie on your side next to a bench with your top knee resting on it (knee, not foot: that's the short lever) and your bottom leg under the bench. Elbow under your shoulder.",
      steps: [
        "Press your top knee down into the bench and lift your hips until your body is in a straight line.",
        "Hold, breathing steadily, then lower and switch sides.",
      ],
      avoid: ["Your hips sagging.", "Pain in the groin. Stop, or use a lower bench."],
      demo: ["copenhagen plank short lever"],
    },
    "Pop-up to low lunge hold": {
      setup: "Lie face down like you're on your board, hands flat under your chest.",
      steps: [
        "Pop up into a low surf stance, like a deep lunge, and hold it for 3 seconds, balanced, eyes forward.",
        "Lie back down and repeat.",
        "Do 4 with your normal stance, then 4 with your feet switched.",
      ],
      avoid: ["Standing up tall instead of staying low.", "Your back knee dragging on the floor."],
      demo: ["surf pop up drill"],
    },
    "Child's pose with side reach": {
      setup: "Kneel and sit back toward your heels with your knees wide, arms stretched forward on the floor.",
      steps: [
        "Walk both hands over to the right and sink your hips back. You'll feel it down the left side of your back.",
        "Breathe slowly and hold, then walk your hands to the other side.",
      ],
      avoid: ["Shrugging your shoulders up to your ears."],
      demo: ["child's pose side reach lat stretch"],
    },
  },
};
