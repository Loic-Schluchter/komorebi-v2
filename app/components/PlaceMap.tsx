'use client'

import React from 'react'
import {AdvancedMarker, APIProvider, Map, Map3D} from "@vis.gl/react-google-maps";

function PlaceMap({lat, lng} : {lat : number, lng : number}) {
    const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY
    const MAP_ID = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID
    if (!API_KEY) throw new Error("Missing API key")

    const position = {lat: lat, lng: lng}
    return (
        <div className="w-full h-full flex justify-center items-center border-2 border-komorebi-gold">
            <APIProvider apiKey={API_KEY}>
            <Map
                style={{width: '80vw', height: '30vh'}}
                defaultCenter={position}
                defaultZoom={15}
                gestureHandling='greedy'
                mapId={MAP_ID}
            >
                <AdvancedMarker position={position} />
            </Map>
        </APIProvider>
        </div>
    )
}

export default PlaceMap
