import React from 'react'
import {cities} from "@/app/lib/cities";
import BackButton from "@/app/components/BackButton";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const city = cities.find(c=>c.slug === id)
    if (!city) return <div>Ville non trouvée</div>
    return (
        <div>
            <BackButton/>
            <div>
                <p>{city.japaneseName}</p>
            <h1>
                {city.name}
            </h1>

            </div>

        </div>
    )
    
}
