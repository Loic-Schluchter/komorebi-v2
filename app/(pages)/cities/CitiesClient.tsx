'use client'

import CityList from "@/app/components/city/CityList";
import IslandNav from "@/app/components/layout/IslandNav";
import {useState} from "react";
import {CityWithWeather} from "@/app/types/City";

interface CitiesClientProps {
    citiesWithWeather: CityWithWeather[]
}

function CitiesClient({citiesWithWeather}: CitiesClientProps) {
    const [selectedIsland, setSelectedIsland] = useState("All islands")

    return (
        <section className="w-full flex flex-col items-center justify-between px-4 bg-[#0F1A14]">
            <IslandNav
                cities={citiesWithWeather}
                selectedIsland={selectedIsland}
                setSelectedIsland={setSelectedIsland}
            />
            <CityList selectedIsland={selectedIsland} citiesWithWeather={citiesWithWeather}/>
        </section>
    )
}

export default CitiesClient