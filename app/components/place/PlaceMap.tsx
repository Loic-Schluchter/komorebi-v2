'use client'

import React from 'react'
import {AdvancedMarker, APIProvider, Map} from "@vis.gl/react-google-maps";
import {useGeolocation} from "@/app/hooks/geoLocalisation";
import {MapPin, PersonStanding, Map as MapIcon} from "lucide-react";

type PlaceMapProps = {
    lat: number,
    lng: number,
    name: string,
    placeId?: string,
}

function PlaceMap({lat, lng, name, placeId}: PlaceMapProps) {
    const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    const MAP_ID = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID
    if (!API_KEY) throw new Error("Missing API key")
    const selfLocation = useGeolocation()
    const position = {lat: lat, lng: lng}

    const handleOpenGoogleMaps = () => {
        const query = encodeURIComponent(name);
        const url = placeId
            ? `https://www.google.com/maps/search/?api=1&query=${query}&query_place_id=${placeId}`
            : `https://www.google.com/maps/search/?api=1&query=${query}`;
        window.open(url, '_blank');
    };

    return (
        <div className="w-86 h-80 flex flex-col">
            <div className="w-full h-full justify-center items-center border-2 border-komorebi-gold rounded-2xl overflow-hidden">
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
                                <PersonStanding size={16} color="white"/>
                            </div>
                        </AdvancedMarker>
                        <AdvancedMarker position={position}>
                            <div className="bg-komorebi-gold rounded-full p-2">
                                <MapPin size={16} color="white"/>
                            </div>
                        </AdvancedMarker>
                    </Map>
                </APIProvider>
            </div>
            <div className="flex justify-center items-center bg-komorebi-gold text-white py-2 px-4 rounded-full mt-4 mx-auto gap-2">
                <button onClick={handleOpenGoogleMaps}>
                    Open in Google Map
                </button>
                <MapIcon/>
            </div>
        </div>
    )
}

export default PlaceMap