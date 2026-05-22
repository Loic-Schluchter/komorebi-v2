import {getPhotoUrl, getPlaces} from "@/app/lib/places";
import {PlacesResponse} from "@/app/types/Place";
import {Star} from "lucide-react";
import FilterButton from "@/app/components/FilterButton";
import Image from "next/image";


async function ThingsToDo({city}: { city: string }) {
    const places: PlacesResponse = await getPlaces(city)
    if (!places) return null
    console.log(places)

    return (
        <div>
            <div className="flex justify-between items-center my-6">
                <h2 className="text-3xl font-serif font-bold italic">Things to do</h2>
                <FilterButton/>
            </div>
            {places.places.map((place, index) => {
                const neighborhood = place.addressComponents?.find(
                    c => c.types?.includes("sublocality_level_1")
                )?.longText || place.addressComponents?.find(
                    c => c.types?.includes("locality")
                )?.longText

                return (
                    <div key={index} className="flex gap-6 my-4">
                        <Image
                            src={getPhotoUrl(place.photos[0].name)}
                            alt={place.displayName.text}
                            width={80}
                            height={80}
                            className="w-20 h-20 object-cover  rounded-2xl"
                        />
                        <div className="flex flex-col ">
                            <p className="text-komorebi-gold">{neighborhood}</p>
                            <p className="text-komorebi-ivory font-serif text-xl font-bold italic">{place.displayName.text}</p>
                            <div className="flex gap-2 text-sm items-center text-komorebi-gold">
                                <p><Star size={10} color={"yellow"} fill={"yellow"}/></p>
                                <p>{place.rating}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ThingsToDo
