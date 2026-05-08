

export type Place = {
    displayName: {
        text: string
        languageCode: string
    }
    "postalAddress": {
        "regionCode": string,
        "languageCode": string,
        "postalCode": string,
        "administrativeArea": string,
        "addressLines": [
            string
        ]
    }
    rating: number,
    "googleMapsLinks": {
    "placeUri": string,

}
    userRatingCount:number
    formattedAddress: string
    location: {
        latitude: number
        longitude: number
    }
    photos: {
        name: string
    }[]
}