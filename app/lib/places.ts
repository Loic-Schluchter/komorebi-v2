const googleURL = "https://places.googleapis.com/v1/places:searchText"

export async function getPlaces(city: string) {
    const API_KEY = process.env.GOOGLE_PLACES_API_KEY

    const response = await fetch(googleURL,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Goog-Api-Key": API_KEY!,
                "X-Goog-FieldMask": "places.displayName,places.formattedAddress,places.rating,places.photos,places.addressComponents,places.location"
            },
            body: JSON.stringify({
                textQuery: `things to do in ${city}`
            }),
            next: {revalidate: 86400}
        }
    )

    if (!response.ok) return null
    return response.json()
}

export const getPhotoUrl = (photoName: string) =>
    `https://places.googleapis.com/v1/${photoName}/media?maxWidthPx=400&key=${process.env.GOOGLE_PLACES_API_KEY}`