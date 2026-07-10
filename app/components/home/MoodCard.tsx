import { moodPrompts } from "@/app/lib/mood-prompts";
import SunsetBar from "../ui/SunsetBar";
import { OpenWeatherMapResponse } from "@/app/types/weather";

type Props = {
  location: string;
  weather?: OpenWeatherMapResponse | null;
};

function MoodCard({ location, weather }: Props) {
  const condition = weather?.weather[0]?.main;

  const matching = moodPrompts.filter(
      (p) => p.weather === condition
  );

  const mood =
      matching.length > 0
          ? matching[Math.floor(Math.random() * matching.length)]
          : moodPrompts[0];

  return (
      <div className="bg-[#1E2118] border-amber-200/10 border h-60 rounded-2xl px-6 py-2 flex flex-col gap-4 justify-center">
        <div className="flex flex-col gap-1">
          <p className="text-komorebi-gold text-sm uppercase">
            Mood · Today in {location}
          </p>

          <h2 className="italic text-[22px] font-serif text-white">
            {mood.prompt}
          </h2>

          <p className="text-sm font-serif text-komorebi-ivory">
            {mood.smallPrompt}
          </p>
        </div>

        <div>
          <p className="border-b border-white/10 italic"></p>
        </div>

        <h2 className="uppercase text-[12px] text-komorebi-ivory">
          light today
        </h2>

        <div>
          {weather && (
              <SunsetBar
                  sunrise={weather.sys.sunrise}
                  sunset={weather.sys.sunset}
              />
          )}
        </div>
      </div>
  );
}

export default MoodCard;