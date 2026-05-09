import { moodPrompts, weatherCondition } from "@/app/lib/mood-prompts";
import React, { useMemo } from "react";
import SunsetBar from "./SunsetBar";

function MoodCard({ location, weather }: { location: string; weather: weatherCondition }) {
  const mood = useMemo(() => {
    const matching = moodPrompts.filter((p) => p.weather === weather);
    if (matching.length === 0) {
      console.log(`No mood prompts found for weather condition: ${weather}`);
      return moodPrompts[0];
    }
    return matching[Math.floor(Math.random() * matching.length)];
  }, [weather, location]);

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
      <div>
        <SunsetBar />
      </div>
    </div>
  );
}

export default MoodCard;
