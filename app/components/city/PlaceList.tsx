'use client'

import { Place } from "@/app/types/Place"
import { useGeolocation } from "@/app/hooks/geoLocalisation"
import { calculateDistance } from "@/app/lib/distance"
import { Star } from "lucide-react"
import Image from "next/image"
import {useRouter} from "next/navigation";
import {slugify} from "@/app/lib/slugify";

export function PlacesList({ places }: { places: Place[] }) {
    const location = useGeolocation()
    const router = useRouter()
    return (
        <div>
            {places.map((place, index) => {

                const neighborhood = place.addressComponents?.find(
                    c => c.types?.includes("sublocality_level_1")
                )?.longText || place.addressComponents?.find(
                    c => c.types?.includes("locality")
                )?.longText

                const distance = location && place.location
                    ? calculateDistance(location.lat, location.lng, place.location.latitude, place.location.longitude).toFixed(1)
                    : null
                const placeName = place.displayName.text
                const placeSlug = slugify(placeName)
                const latitude = place.location?.latitude
                const longitude = place.location?.longitude

                return (
                    <div key={index} className="flex gap-6 my-4">
                        {place.photoUrl && (
                            <button onClick={() => {
                                if (!latitude || !longitude) return
                                router.push(`/place/${placeSlug}?lat=${latitude}&lng=${longitude}&placeId=${encodeURIComponent(place.name ?? '')}`)
                            }}>
                                <section className="flex gap-6">
                                    <div className="w-20 h-20 shrink-0 ">
                                        <Image
                                            src={place.photoUrl}
                                            alt={place.displayName.text}
                                            width={80}
                                            height={80}
                                            className="w-20 h-20 object-cover rounded-2xl"
                                        />
                                    </div>

                                    <div className="text-left">
                                        <p className="text-komorebi-gold">{neighborhood} <span className="text-[0.7rem]">{distance && `· ${distance} km`}</span> </p>
                                        <p className="text-white font-serif text-xl font-bold italic">{place.displayName.text}</p>
                                        <div className="flex gap-2 text-sm items-center text-komorebi-gold">
                                            <Star size={10} color={"yellow"} fill={"yellow"}/>
                                            <p>{place.rating}</p>

                                        </div>
                                    </div>
                                </section>
                            </button>

                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default PlacesList