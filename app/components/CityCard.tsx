'use client'


import {cities, City} from "@/app/lib/cities"
import Image from "next/image";
import {useRouter} from "next/navigation"
import {OpenWeatherMapResponse} from "@/app/types/weather";
import {CityWithWeather} from "@/app/types/City";

interface CityCardProps {
    city: CityWithWeather

}

function CityCard({city}: CityCardProps) {
    const router = useRouter();
    return (
        <div className="flex items-center gap-4 py-4 justify-center  border-t border-white/10">
            <Image src={city.image} alt={city.name} width={100} height={100}
                   className="rounded-lg object-cover shrink-0 w-20 h-30"/>
            <div className="flex-1">
                <h2 className="font-serif italic text-[#d9cfb8] text-xl ">
                    {city.name} <span className="font-japanese text-[0.7rem]">{city.japaneseName}</span>
                </h2>
                <p className="font-serif italic  text-[#d9cfb8]">
                    {`"${city.catchphrase}"`}
                </p>
                <p className="font-serif italic text-komorebi-gold">
                    {city.bestMonths.join(" · ")}
                </p>
            </div>
            <div>
                {city ? (
                    <div className="flex flex-col items-center ">

                        <h2 className="font-serif italic text-komorebi-gold text-2xl">
                            {city.weather?.main.temp.toFixed()}°
                        </h2>
                        
                        <p className="text-[0.7rem] text-[#d9cfb8]">
                            {city.weather?.weather[0].main}
                        </p>
                        <button className="text-komorebi-gold mt-8"
                                onClick={() => router.push(`/cities/${city.slug}`)}>
                            →
                        </button>
                    </div>
                ) : null}
            </div>
        </div>
    )
}

export default CityCard
