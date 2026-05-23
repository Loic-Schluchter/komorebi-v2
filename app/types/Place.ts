export type Place = {
    name: string
    displayName: { text: string; languageCode: string }
    formattedAddress: string
    rating: number
    photos: { name: string }[]
    addressComponents?: { longText: string; types: string[] }[]
    photoUrl?: string | null
    location?: {
        latitude: number
        longitude: number
    }
}

export type PlacesResponse = {
    places: Place[]
}