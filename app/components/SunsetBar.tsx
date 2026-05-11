"use client";

import { useEffect, useState } from "react";

type City = {
  sunrise: number;
  sunset: number;
};

function SunsetBar({ sunrise, sunset }: City) {
  const [progress, setProgress] = useState(0);
  const totalDaylight = sunset - sunrise;

  const fmt = (ts: number) =>
    new Date(ts * 1000).toLocaleTimeString("ja-JP", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Asia/Tokyo",
    });

  useEffect(() => {
    const update = () => {
      const now = Date.now() / 1000;
      const pct = ((now - sunrise) / totalDaylight) * 100;
      setProgress(Math.min(Math.max(pct, 0), 100));
    };

    update();
    const id = setInterval(update, 60000);
    return () => clearInterval(id);
  }, [sunrise, sunset, totalDaylight]);

  const isNight = progress <= 0 || progress >= 100;
  const icon = isNight ? "🌙" : "☀️";

  const glowColor = isNight ? "rgba(147, 197, 253, 0.6)" : "rgba(255, 255, 255, 0.6)";

  return (
    <div className="w-full flex flex-col gap-2">
      <div
        className="relative h-8 rounded-full overflow-hidden"
        style={{
          background:
            "linear-gradient(to right, #0f172a 0%, #1e3a5f 8%, #f59e0b 15%, #fbbf24 25%, #93c5fd 50%, #fbbf24 75%, #f97316 85%, #7c3aed 92%, #0f172a 100%)",
        }}
      >
        <div className="absolute top-0 h-full bg-white/10 rounded-l-full" style={{ width: `${progress}%` }} />

        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 transition-all duration-1000 ease-linear flex items-center justify-center"
          style={{ left: `${progress}%` }}
        >
          <div
            className="absolute w-10 h-10 rounded-full animate-pulse"
            style={{
              background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
            }}
          />
          <span className="text-sm z-10 drop-shadow-lg">{icon}</span>
        </div>
      </div>

      <div className="flex justify-between w-full text-sm text-white/70">
        <div>
          <p className="text-[10px]">{fmt(sunrise)}</p>
          <p className="text-komorebi-gold">sunrise</p>
        </div>
        <div className="text-right">
          <p className="text-[10px]">{fmt(sunset)}</p>
          <p className="text-komorebi-gold">sunset</p>
        </div>
      </div>
    </div>
  );
}

export default SunsetBar;
