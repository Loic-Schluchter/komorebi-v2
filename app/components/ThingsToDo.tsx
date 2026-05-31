import { getPlaces} from "@/app/lib/places";
import {PlacesResponse} from "@/app/types/Place";

import FilterButton from "@/app/components/FilterButton";

import {PlacesList} from "@/app/components/PlaceList";


async function ThingsToDo({ city }: { city: string }) {
    const places: PlacesResponse = await getPlaces(city)
    if (!places) return null

    const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY

    const enrichedPlaces = places.places.map(place => ({
        ...place,
        photoUrl: place.photos?.[0]
            ? `https://places.googleapis.com/v1/${place.photos[0].name}/media?maxWidthPx=400&key=${API_KEY}`
            : null
    }))
    return (
        <div>
            <div className="flex justify-between items-center my-6">
                <h2 className="text-3xl font-serif font-bold italic">Things to do</h2>
                <FilterButton/>
            </div>
            <PlacesList places={enrichedPlaces} />
        </div>
    )
}

export default ThingsToDo
