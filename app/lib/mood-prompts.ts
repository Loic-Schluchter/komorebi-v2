export type MoodPrompt = {
  weather: string;
  prompt: string;
  smallPrompt: string;
};

export const moodPrompts: MoodPrompt[] = [
  // CLEAR
  {
    weather: "Clear",
    prompt: "A perfect walking day",
    smallPrompt: "Plan a long route between two shrines.",
  },
  {
    weather: "Clear",
    prompt: "Golden light, golden hours",
    smallPrompt: "Find a rooftop view before sunset.",
  },
  {
    weather: "Clear",
    prompt: "Made for slow exploration",
    smallPrompt: "Wander through a quiet neighborhood.",
  },
  {
    weather: "Clear",
    prompt: "Shadows stretched long",
    smallPrompt: "Follow a stray cat through the alleys.",
  },
  {
    weather: "Clear",
    prompt: "The kind of blue that hums",
    smallPrompt: "Find a park bench and just look up.",
  },

  // CLOUDS
  {
    weather: "Clouds",
    prompt: "Soft skies, soft pace",
    smallPrompt: "A perfect afternoon for tea and books.",
  },
  {
    weather: "Clouds",
    prompt: "Quiet light, quiet thoughts",
    smallPrompt: "Wander a temple garden in muted tones.",
  },
  {
    weather: "Clouds",
    prompt: "No glare, no rush",
    smallPrompt: "The river walk feels endless today.",
  },
  {
    weather: "Clouds",
    prompt: "The sky is saving its brightness",
    smallPrompt: "A day for museums and old arcades.",
  },

  // RAIN
  {
    weather: "Rain",
    prompt: "Stay close to a window",
    smallPrompt: "Watch the city breathe in the rain.",
  },
  {
    weather: "Rain",
    prompt: "Rain washes everything new",
    smallPrompt: "Listen to it from a small café.",
  },
  {
    weather: "Rain",
    prompt: "An umbrella kind of day",
    smallPrompt: "The covered shopping streets are calling.",
  },
  {
    weather: "Rain",
    prompt: "Puddles like little mirrors",
    smallPrompt: "Step carefully. Look down often.",
  },
  {
    weather: "Rain",
    prompt: "The city smells like wet stone",
    smallPrompt: "Take the long way home through the gardens.",
  },

  // SNOW
  {
    weather: "Snow",
    prompt: "Silent footsteps in fresh snow",
    smallPrompt: "Find a shrine wrapped in white.",
  },
  {
    weather: "Snow",
    prompt: "A world made of soft edges",
    smallPrompt: "Onsen weather, properly speaking.",
  },
  {
    weather: "Snow",
    prompt: "Even the noise fell asleep",
    smallPrompt: "A bowl of hot noodles and a frosted window.",
  },
  {
    weather: "Snow",
    prompt: "The lanterns burn warmer tonight",
    smallPrompt: "Walk until your cheeks turn pink.",
  },

  // DRIZZLE
  {
    weather: "Drizzle",
    prompt: "Light rain, light steps",
    smallPrompt: "The kind of morning that smells like moss.",
  },
  {
    weather: "Drizzle",
    prompt: "No need for an umbrella",
    smallPrompt: "Let it cool your forehead just a little.",
  },
  {
    weather: "Drizzle",
    prompt: "The world is holding its breath",
    smallPrompt: "Perfect for a ferry ride across the bay.",
  },

  // MIST
  {
    weather: "Mist",
    prompt: "The mountains keep their secrets",
    smallPrompt: "Mornings like these belong to bamboo forests.",
  },
  {
    weather: "Mist",
    prompt: "Half‑hidden, half‑revealed",
    smallPrompt: "A shrine gate fading into white.",
  },
  {
    weather: "Mist",
    prompt: "The lake has disappeared",
    smallPrompt: "Walk the shore by memory alone.",
  },

  // FOG
  {
    weather: "Fog",
    prompt: "A city wrapped in silence",
    smallPrompt: "Discover what hides in the haze.",
  },
  {
    weather: "Fog",
    prompt: "Streetlamps glow like lanterns",
    smallPrompt: "Early morning before the world wakes.",
  },
  {
    weather: "Fog",
    prompt: "Every corner is a mystery",
    smallPrompt: "Lose yourself on purpose.",
  },

  // THUNDERSTORM
  {
    weather: "Thunderstorm",
    prompt: "Stay in, stay warm",
    smallPrompt: "A perfect day for ramen and stories.",
  },
  {
    weather: "Thunderstorm",
    prompt: "The sky is arguing with itself",
    smallPrompt: "Find a basement bar with old jazz.",
  },
  {
    weather: "Thunderstorm",
    prompt: "Lightning as punctuation",
    smallPrompt: "Watch from a covered balcony.",
  },

  // WIND
  {
    weather: "Wind",
    prompt: "The city is restless today",
    smallPrompt: "Find a narrow alley that breaks the gusts.",
  },
  {
    weather: "Wind",
    prompt: "Leaves dancing like spirits",
    smallPrompt: "A good day for a bridge crossing.",
  },
  {
    weather: "Wind",
    prompt: "Hold your hat tight",
    smallPrompt: "The coast path is roaring.",
  },

  // HEAT / HOT
  {
    weather: "Heat",
    prompt: "Shade is a luxury",
    smallPrompt: "Follow the riverside breezes.",
  },
  {
    weather: "Heat",
    prompt: "The pavement is glowing",
    smallPrompt: "A cold soba and a quiet temple.",
  },
  {
    weather: "Heat",
    prompt: "Everything moves slower",
    smallPrompt: "Find a basement café with iced matcha.",
  },

  // FREEZING / COLD
  {
    weather: "Freezing",
    prompt: "Your breath turns into ghosts",
    smallPrompt: "A vending machine hot cocoa kind of day.",
  },
  {
    weather: "Freezing",
    prompt: "The cold sharpens everything",
    smallPrompt: "Walk fast. Warm up with yakisoba.",
  },
  {
    weather: "Freezing",
    prompt: "Frost on every leaf",
    smallPrompt: "The garden belongs to the crows now.",
  },

  // HAIL
  {
    weather: "Hail",
    prompt: "The sky is throwing pebbles",
    smallPrompt: "Wait under a roof. Watch it bounce.",
  },
  {
    weather: "Hail",
    prompt: "Loud and white",
    smallPrompt: "A convenience store break never felt safer.",
  },

  // DUST / SANDSTORM
  {
    weather: "Dust",
    prompt: "The horizon turned yellow",
    smallPrompt: "Stay inside. Watch the world fade.",
  },
  {
    weather: "Dust",
    prompt: "Everything tastes like earth",
    smallPrompt: "A mask and a short walk only.",
  },

  // SMOKE (from wildfires)
  {
    weather: "Smoke",
    prompt: "The sun is a pale coin",
    smallPrompt: "Close the windows. Breathe slowly.",
  },
  {
    weather: "Smoke",
    prompt: "Orange sky at noon",
    smallPrompt: "A strange quiet falls over the city.",
  },

  // ASH (volcanic or post‑fire)
  {
    weather: "Ash",
    prompt: "Silence and soft falling",
    smallPrompt: "Cover your hair. Walk like a ghost.",
  },
  {
    weather: "Ash",
    prompt: "The world turned monochrome",
    smallPrompt: "Find shelter. Wait for the wind to change.",
  },

  // SLEET
  {
    weather: "Sleet",
    prompt: "Rain that wants to be snow",
    smallPrompt: "Messy but beautiful in its own way.",
  },
  {
    weather: "Sleet",
    prompt: "The glassy sidewalks",
    smallPrompt: "Step lightly. Warm tea is waiting.",
  },
];
