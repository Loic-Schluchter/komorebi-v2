import { moodPrompts } from "@/app/lib/mood-prompts";
import React, { useEffect, useState, useMemo } from "react";
import SunsetBar from "./SunsetBar";

export type CityWeather = {
  conditions: string;
  sunrise: number;
  sunset: number;
};

function MoodCard({ location }: { location: string }) {
  const [cityData, setCityData] = useState<CityWeather | null>(null);

  const mood = useMemo(() => {
    const condition = cityData?.conditions;

    if (!condition) {
      return moodPrompts[0];
    }

    const matching = moodPrompts.filter((p) => p.weather === condition);

    if (matching.length === 0) {
      return moodPrompts[0];
    }

    return matching[Math.floor(Math.random() * matching.length)];
  }, [cityData?.conditions]);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(`/api/weather?city=${encodeURIComponent(location)}`);
        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }
        const data: CityWeather = await response.json();

        setCityData({
          conditions: data.conditions,
          sunrise: data.sunrise,
          sunset: data.sunset,
        });
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }
    fetchWeather();
  }, [location]);

  return (
    <div className=" bg-[#1E2118] border-amber-200/10 border h-60 rounded-2xl px-6 py-2 flex flex-col gap-4 justify-center">
      <div className=" flex flex-col gap-1">
        <p className="text-komorebi-gold text-sm uppercase ">Mood · Today in {location}</p>
        <h2 className="italic text-[22px] font-serif">{mood.prompt}</h2>
        <p className="text-sm font-serif">{mood.smallPrompt}</p>
      </div>
      <div>
        <p className=" border-b border-white/10 italic"></p>
      </div>
      <h2 className="uppercase text-[12px]">light today</h2>
      <div>{cityData && <SunsetBar sunrise={cityData.sunrise} sunset={cityData.sunset} />}</div>
    </div>
  );
}

export default MoodCard;
