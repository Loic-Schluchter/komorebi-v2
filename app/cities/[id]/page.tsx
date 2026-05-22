import {cities} from "@/app/lib/cities";
import BackButton from "@/app/components/BackButton";
import MoodCard from "@/app/components/MoodCard";

import MeteoCard from "@/app/components/MeteoCard";
import ThingsToDo from "@/app/components/ThingsToDo";

export default async function Page({params}: { params: Promise<{ id: string }> }) {
    const {id} = await params
    const city = cities.find(c => c.slug === id)
    if (!city) return <div>Ville non trouvée</div>

    return (
        <div className="w-full bg-linear-to-b from-[#3d2a4a] via-[#1a1f2e] to-[#0F1A14] min-h-svh text-komorebi-ivory ">
            <div className="p-4">
                <BackButton size={24}/>
            </div>
            <div className="px-8 my-2 flex flex-col gap-2">
                <div>
                    <span className="text-komorebi-gold font-light">{city.island} · {city.region}</span>
                </div>
                <p className="text-komorebi-ivory font-japanese">{city.japaneseName}</p>
                <h1 className="text-6xl font-serif font-bold italic ">
                    {city.name}
                </h1>
                <div className="mt-10 flex flex-col gap-4">
                    <MoodCard location={city.name}/>
                    <MeteoCard city={city.name}/>
                </div>
                <ThingsToDo city={city.name}/>
            </div>
        </div>
    )

}
