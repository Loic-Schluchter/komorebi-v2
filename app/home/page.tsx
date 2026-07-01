"use client";


import HomeCarousel from "../components/HomeCarousel";
import HomeInput from "../components/HomeInput";
import MoodCard from "../components/MoodCard";
import { cities } from "@/app/lib/cities";
import {useState} from "react";
import ThemeSection from "@/app/components/ThemeSection";

function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCity = cities[activeIndex];


  return (
    <main className="min-h-svh w-screen bg-[#0d1f15] px-6 pt-10 text-[#F2E9D6]">
      <HomeInput />
      <HomeCarousel onActiveChange={setActiveIndex} />
      <MoodCard location={activeCity.name} />
      <ThemeSection/>
    </main>
  );
}

export default HomePage;
