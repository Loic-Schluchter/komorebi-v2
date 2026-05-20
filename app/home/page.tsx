"use client";
import React, {useEffect} from "react";

import HomeCarousel from "../components/HomeCarousel";
import HomeInput from "../components/HomeInput";
import MoodCard from "../components/MoodCard";
import { cities } from "@/app/lib/cities";

function HomePage() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const activeCity = cities[activeIndex];


  return (
    <main className="min-h-svh w-screen bg-[#0d1f15] px-6 pt-10 text-[#F2E9D6]">
      <HomeInput />
      <HomeCarousel onActiveChange={setActiveIndex} />
      <MoodCard location={activeCity.name} />
    </main>
  );
}

export default HomePage;
