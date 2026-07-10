
import {getPlaceDetails} from "@/app/lib/places";
async function DataFetcher({ searchParams, params} : {searchParams : Promise<{ lat: string; lng: string; placeId: string }> , params: Promise<{ id: string }>}) {
    try {
        const [gpsData, { id }] = await Promise.all([
            searchParams,
            params.then(({ id }) => ({ id: decodeURIComponent(id) })),
        ])

        if (!gpsData) {
            return null
        }

        const details = await getPlaceDetails(gpsData.placeId)

        if (!details) {
            return null
        }

        const photoUrls =
            details.photos?.map(
                photo =>
                    `https://places.googleapis.com/v1/${photo.name}/media?maxWidthPx=800&key=${process.env.GOOGLE_PLACES_API_KEY}`
            ) ?? []

        return { gpsData, details, photoUrls, id }
    } catch (error) {
        throw new Error("Failed to fetch data")
    }


}

export default DataFetcher
