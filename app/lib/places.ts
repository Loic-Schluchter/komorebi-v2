import {PlaceDetails} from "@/app/types/Place";

const googleURL = "https://places.googleapis.com/v1/places:searchText"

export async function getPlaces(city: string) {
    const API_KEY = process.env.GOOGLE_PLACES_API_KEY

    const response = await fetch(googleURL,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Goog-Api-Key": API_KEY!,
                "X-Goog-FieldMask": "places.name,places.displayName,places.formattedAddress,places.rating,places.photos,places.addressComponents,places.location,places.regularOpeningHours"
            },
            body: JSON.stringify({
                textQuery: `tourist attractions in ${city}`
            }),
            next: {revalidate: 86400}
        }
    )

    if (!response.ok) return null
    return response.json()
}

export async function getPlaceDetails(placeId: string) : Promise<PlaceDetails> {
    const API_KEY = process.env.GOOGLE_PLACES_API_KEY

    const response = await fetch(
        `https://places.googleapis.com/v1/${placeId}`,
        {
            headers: {
                "X-Goog-Api-Key": API_KEY!,
                "X-Goog-FieldMask": "displayName,regularOpeningHours,rating,currentOpeningHours,editorialSummary,priceLevel,photos,allowsDogs "
            }
        }
    )

    console.log("Status:", response.status)
    console.log("PlaceId:", placeId)

    if (!response.ok){
        throw new Error("Failed to fetch place details")
    }
    return response.json()
}

