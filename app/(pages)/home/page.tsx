"use client";


import HomeCarousel from "../../components/home/HomeCarousel";
import HomeInput from "../../components/home/HomeInput";
import { cities } from "@/app/lib/cities";
import {useState} from "react";
import ThemeSection from "@/app/components/theme/ThemeSection";
import MoodCardWrapper from "@/app/components/ui/ MoodCardWrapper";
import {motion} from "motion/react";

function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCity = cities[activeIndex];


  return (
    <main className="min-h-svh w-screen bg-[#0d1f15] px-6 pt-10 text-[#F2E9D6]"
                 >
        <motion.section initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.85,
                            ease: "easeOut",
                        }}>
            <HomeInput />
            <HomeCarousel onActiveChange={setActiveIndex} />
            <MoodCardWrapper location={activeCity.name}/>
            <ThemeSection/>
        </motion.section>

    </main>
  );
}

export default HomePage;
