"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "../../components/ui/Button";
import { Dot } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";
import ProgressionBar from "../../components/ui/ProgressionBar";

type Step = {
  kanji: string;
  image: string;
  label: string;
  title: string;
  description: string;
  bgColor: string;
};

const steps: Step[] = [
  {
    kanji: "春",
    image: "/sakura.webp",
    label: "SPRING",
    title: "Discover Japan, season by season.",
    description:
      "Cherry in April, fireflies in June, momiji in November. Komorebi tells you what is happening, where, today.",
    bgColor: "#E8D5D0",
  },
  {
    kanji: "旅",
    image: "/travel.webp",
    label: "TRAVEL",
    title: "Curated places, local voices",
    description:
      "Every spot is checked, dated, and described by someone who has been. No fake reviews, no algorithmic noise.",
    bgColor: "#5A3220",
  },
  {
    kanji: "心",
    image: "/mindful.webp",
    label: "MINDFUL",
    title: "Slower travel, deeper memory.",
    description: "Save the places that move you. Build your own journey. Carry it home as a quiet, beautiful book.",
    bgColor: "#496337",
  },
];

function OnboardingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      document.cookie = "onboardingCompleted=true; path=/; max-age=31536000";
      router.push("/home");
    }
  };

  const handleSkip = () => {
    document.cookie = "onboardingCompleted=true; path=/; max-age=31536000";
    router.push("/home");
  };

  return (
    <main
      className="w-screen h-svh flex flex-col"
      style={{
        background: `linear-gradient(to bottom, ${steps[currentStep].bgColor} 20%, #0d1f15 60%)`,
      }}
    >
      <motion.section className="w-screen h-svh flex flex-col"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}>
        <div className="absolute z-10 flex justify-between items-center w-full p-6">
          <ProgressionBar currentStep={currentStep} total={steps.length} />
          <Button  onClick={handleSkip} ariaLabel="next">
            SKIP
          </Button>
        </div>
        <div className=" relative w-full h-full ">
          <Image
              src={steps[currentStep].image}
              alt={steps[currentStep].label}
              fill
              sizes="width: 800px, height: 800px"
              className="object-cover"
              priority
          />
        </div>

        <div className="flex flex-col items-start justify-center gap-4 px-10 h-200">
          <div className="flex gap-2 text-komorebi-gold text-xl ">
            <span className="font-japanese">{steps[currentStep].kanji}</span> <Dot />{" "}
            <span className="font-serif font-bold ">{steps[currentStep].label}</span>
          </div>
          <h1 className=" font-serif text-5xl italic text-white text-balance">{steps[currentStep].title}</h1>
          <p className="text-[1rem] text-white">{steps[currentStep].description}</p>
          <div className=" flex justify-center w-full mt-6">
            <Button ariaLabel="Continue" onClick={handleNext}>{currentStep === steps.length - 1 ? "Enter Komorebi" : "Continue"}</Button>
          </div>
        </div>
      </motion.section>

    </main>
  );
}

export default OnboardingPage;
