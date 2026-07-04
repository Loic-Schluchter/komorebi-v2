'use client'

import React from 'react'
import {AdvancedMarker, APIProvider, Map} from "@vis.gl/react-google-maps";
import {useGeolocation} from "@/app/hooks/geoLocalisation";
import {MapPin, PersonStanding} from "lucide-react";


    type map ={
        lat : number,
        lng : number,
        selfLat : number,
        selfLng : number,
    }
function PlaceMap({lat, lng} : map) {
    const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY
    const MAP_ID = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID
    if (!API_KEY) throw new Error("Missing API key")
    const selfLocation = useGeolocation()

    const position = {lat: lat, lng: lng}
    console.log(selfLocation)
    console.log(` self position : ${position}`)
    return (
        <div className="w-full h-80 flex justify-center items-center border-2 border-komorebi-gold">
            <APIProvider apiKey={API_KEY}>
            <Map
                style={{width: '100%', height: '100%'}}
                defaultCenter={position}
                defaultZoom={15}
                gestureHandling='greedy'
                mapId={MAP_ID}
            >
                <AdvancedMarker position={selfLocation}>
                    <div className="bg-komorebi-gold rounded-full p-2">
                        <PersonStanding size={16} color="white"  />
                    </div>
                </AdvancedMarker>
                <AdvancedMarker position={position}>
                    <div className="bg-komorebi-gold rounded-full p-2">
                        <MapPin size={16} color="white" />
                    </div>
                </AdvancedMarker>
            </Map>
        </APIProvider>
        </div>
    )
}

export default PlaceMap
