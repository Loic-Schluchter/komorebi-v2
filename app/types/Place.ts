export type Place = {
    name?: string
    displayName: { 
        text: string; 
        languageCode?: string 
    }
    formattedAddress?: string
    rating?: number
    photos?: { 
        name: string;
        widthPx?: number;
        heightPx?: number;
        authorAttributions?: {
            displayName: string;
            uri: string;
            photoUri: string;
        }[]
    }[]
    addressComponents?: { 
        longText: string; 
        shortText?: string;
        types: string[] 
    }[]
    photoUrl?: string | null
    location?: {
        latitude: number
        longitude: number
    }
}

export type PlacesResponse = {
    places: Place[]
}