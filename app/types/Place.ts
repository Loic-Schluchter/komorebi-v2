export type Place = {
    name: string
    displayName: {
        text: string
        languageCode: string
    }
    formattedAddress: string
    rating: number
    photos: {
        name: string
    }[]
    addressComponents?: {
        longText: string
        types: string[]
    }[]

}

export type PlacesResponse = {
    places: Place[]
}