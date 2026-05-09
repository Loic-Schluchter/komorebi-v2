"use client";

import { div } from "motion/react-client";
import React, { useEffect } from "react";

const Sunrise = new Date().setHours(6, 0, 0); // 6:00 AM
const Sunset = new Date().setHours(18, 0, 0); // 6:00 PM

function SunsetBar() {
  const [progress, setProgress] = React.useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const now = new Date().setHours(16, 0, 0);
      const totalDaylight = Sunset - Sunrise;
      const elapsed = now - Sunrise;
      setProgress((elapsed / totalDaylight) * 100);
    };
    updateProgress();
  }, []);
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="relative h-6 bg-[#1A2030] rounded-full overflow-hidden bg-[image:var(--gradient-komorebi-gold)]">
        <div className="h-full" style={{ width: `${progress}%` }} />

        <div
          className="absolute top-0 w-1 h-full bg-white shadow-[0_0_10px_#fff] transition-all duration-1000 ease-linear"
          style={{ left: `${progress}%` }}
        />
      </div>
      <div className="flex justify-between w-full text-sm text-white/70">
        <div>
          <p className="text-[10px]">{new Date(Sunrise).toLocaleTimeString().slice(0, 5)}</p>
          <p className="text-komorebi-gold">sunrise</p>
        </div>
        <div className="text-right">
          <p className="text-[10px]">{new Date(Sunset).toLocaleTimeString().slice(0, 5)}</p>
          <p className="text-komorebi-gold">sunset</p>
        </div>
      </div>
    </div>
  );
}

export default SunsetBar;
