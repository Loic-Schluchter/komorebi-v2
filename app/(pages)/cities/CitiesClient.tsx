'use client'

import CityList from "@/app/components/city/CityList";
import SortNav from "@/app/components/layout/SortNav";
import IslandNav from "@/app/components/layout/IslandNav";
import {useState} from "react";
import {CityWithWeather} from "@/app/types/City";


interface CitiesClientProps{
    citiesWithWeather: CityWithWeather[]
}
function CitiesClient({citiesWithWeather}: CitiesClientProps) {
    const [selectedIsland, setSelectedIsland] = useState("All islands")
    const [selectedSort, setSelectedSort] = useState("Region")
    return (
        <div className="w-full flex flex-col  items-center justify-between px-4 bg-[#0F1A14]">
            <IslandNav selectedIsland={selectedIsland} setSelectedIsland={setSelectedIsland}/>
            <SortNav selectedSort={selectedSort} setSelectedSort={setSelectedSort}/>
            <CityList selectedIsland={selectedIsland} selectedSort={selectedSort} citiesWithWeather={citiesWithWeather}/>
        </div>
    )
}

export default CitiesClient
