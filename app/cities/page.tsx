'use client'
import IslandNav from "@/app/components/IslandNav";

import { ChevronLeft} from "lucide-react";
import {cities} from "@/app/lib/cities";
import { useRouter} from "next/navigation";
import CityList from "@/app/components/CityList";
import SortNav from "@/app/components/SortNav";
import {useState} from "react";
function Cities() {
    const [selectedIsland, setSelectedIsland   ] = useState("All islands")
    const [selectedSort, setSelectedSort] = useState("Region")
    const router = useRouter();

    return (
        <div className="w-full flex flex-col  items-center justify-between px-4 bg-[#0F1A14] min-h-svh ">
            <div className="flex items-center gap-4 w-full mt-10 ">
                <button onClick={() => router.push("/home")}>
                <ChevronLeft color="white"/>

                </button>
                <div className="flex flex-col text-komorebi-gold">
                <p><span className="font-japanese">都市</span> · <span>Toshi</span></p>
                <h1 className="text-4xl  text-[#d9cfb8] font-serif italic">All destinations</h1>
                </div>
            </div>
            <div className="flex justify-end gap-4 w-full mr-10">
                    <div className="flex flex-col items-end gap-1">
                <span className="text-komorebi-gold italic font-serif text-4xl">{cities.length}</span>
                <p className="text-[#d9cfb8] text-sm tracking-wider uppercase">cities</p>
                </div>
            </div>
            <p className="font-serif p-4 mb-2 italic text-[1.1rem] text-[#d9cfb8]">Sixteen places chosen carefully - five islands, ten regions. each one with a season when it's at its best.</p>
            <IslandNav selectedIsland={selectedIsland} setSelectedIsland={setSelectedIsland}/>
            <SortNav selectedSort={selectedSort} setSelectedSort={setSelectedSort}/>
            <CityList  selectedIsland={selectedIsland} selectedSort={selectedSort}/>

        </div>
    )
}

export default Cities
