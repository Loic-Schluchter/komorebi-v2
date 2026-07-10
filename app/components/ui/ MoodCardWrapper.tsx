"use client";

import { useEffect, useState } from "react";
import { OpenWeatherMapResponse } from "@/app/types/weather";
import MoodCard from "@/app/components/home/MoodCard";

function MoodCardWrapper({ location }: { location: string }) {
    const [weather, setWeather] = useState<OpenWeatherMapResponse | null>(null);

    useEffect(() => {
        async function fetchWeather() {
            const response = await fetch(
                `/api/weather?city=${encodeURIComponent(location)}`
            );

            if (!response.ok) return;

            const data = await response.json();
            setWeather(data);
        }

        fetchWeather();
    }, [location]);


    return (
        <MoodCard
            location={location}
            weather={weather}
        />
    );
}

export default MoodCardWrapper;