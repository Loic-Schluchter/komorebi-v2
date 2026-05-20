'use client'


import { City } from "@/app/lib/cities"
import Image from "next/image";
import { useRouter } from "next/navigation"

interface CityCardProps {
    city: City
}

function CityCard({ city }: CityCardProps) {
    const router = useRouter();
    return (
        <div className="flex items-center gap-4 py-4  border-t border-white/10">
            <Image src={city.image} alt={city.name} width={80} height={80} className="rounded-lg object-cover shrink-0 w-20 h-20" />
            <div className="flex-1">
                <h2 className="font-serif italic text-[#d9cfb8]">
                    {city.name} <span className="font-japanese text-sm">{city.japaneseName}</span>
                </h2>
            </div>
            <button className="text-komorebi-gold" onClick={() => router.push(`/cities/${city.slug}`)}>
                →</button>
        </div>
    )
}

export default CityCard
