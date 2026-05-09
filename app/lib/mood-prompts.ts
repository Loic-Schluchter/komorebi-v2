 export type MoodPrompt = {
  weather: weatherCondition;
  prompt: string;
  smallPrompt: string;
};

export type weatherCondition = "Clear" | "Clouds" | "Rain" | "Snow" | "Drizzle" | "Mist" | "Fog" | "Thunderstorm";


 export const moodPrompts: MoodPrompt[] = [
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
    weather: "Drizzle",
    prompt: "Light rain, light steps",
    smallPrompt: "The kind of morning that smells like moss.",
  },

  {
    weather: "Mist",
    prompt: "The mountains keep their secrets",
    smallPrompt: "Mornings like these belong to bamboo forests.",
  },
  {
    weather: "Fog",
    prompt: "A city wrapped in silence",
    smallPrompt: "Discover what hides in the haze.",
   },
  
  {
    weather: "Thunderstorm",
    prompt: "Stay in, stay warm",
    smallPrompt: "A perfect day for ramen and stories.",
  },
];
