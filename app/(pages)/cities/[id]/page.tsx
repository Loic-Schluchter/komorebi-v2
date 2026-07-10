import {cities} from "@/app/lib/cities";
import BackButton from "@/app/components/ui/BackButton";
import MoodCard from "@/app/components/home/MoodCard";
import MeteoCard from "@/app/components/ui/MeteoCard";
import ThingsToDo from "@/app/components/city/ThingsToDo";
import {getWeather} from "@/app/lib/weather";

export default async function Page({params}: { params: Promise<{ id: string }> }) {
    const {id} = await params;

    const city = cities.find(c => c.slug === id);

    if (!city) return <div>Ville non trouvée</div>;

    const weather = await getWeather(city.name);

    return (
        <div className="w-full bg-linear-to-b from-[#3d2a4a] via-[#1a1f2e] to-[#0F1A14] min-h-svh text-komorebi-ivory">

            <section className="px-8 my-2 flex flex-col gap-2">

                <div className="p-4">
                    <BackButton size={24}/>
                </div>

                <div>
                    <span className="text-komorebi-gold font-light">
                        {city.island} · {city.region}
                    </span>
                </div>

                <p className="text-komorebi-ivory font-japanese">
                    {city.japaneseName}
                </p>

                <h1 className="text-6xl font-serif font-bold italic">
                    {city.name}
                </h1>

                <div className="mt-10 flex flex-col gap-4">
                    <MoodCard
                        location={city.name}
                        weather={weather}
                    />

                    <MeteoCard
                        weather={weather}
                    />
                </div>

                <ThingsToDo city={city.name}/>

            </section>
        </div>
    );
}
