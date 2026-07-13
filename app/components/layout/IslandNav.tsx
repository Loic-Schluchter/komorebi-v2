'use client'
import {CityWithWeather} from "@/app/types/City";


interface IProps {
    selectedIsland: string,
    setSelectedIsland: (island: string) => void,
    cities: CityWithWeather[];
}

function IslandNav({selectedIsland, setSelectedIsland, cities}: IProps) {


    const islands = ["All islands", ...new Set(cities.map(city => city.island))];
    return (
        <nav className="flex gap-2 overflow-x-auto scrollbar-hide w-full noScrollbar ">
            {islands.map((island) => (
                <div key={island} className={`px-8 py-2 border-2 rounded-full whitespace-nowrap uppercase  ${island === selectedIsland
                    ? "  border-komorebi-gold text-komorebi-gold bg-komorebi-gold/20"
                    : "border-[#d9cfb8] text-[#d9cfb8]"}`}>
                    <button className="flex items-center space-x-2 uppercase text-sm" onClick={() => {setSelectedIsland(island)}}>
                        <span>{island}</span>
                        <span>{island === "All islands"
                            ? cities.length
                            : cities.filter(city => city.island === island).length}</span>
                    </button>
                </div>
            ))}
        </nav>
    )
}

export default IslandNav
