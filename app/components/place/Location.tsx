import React from 'react'
import PlaceMap from "./PlaceMap"
import {GpsType} from "@/app/components/place/GpsType";

type LocationProps = {
    gpsData: GpsType,
    name: string,
}

function Location({gpsData, name}: LocationProps) {
    const {lat, lng, placeId} = gpsData

    if (!lat || !lng) {
        return (
            <div>
                <p className="text-white/50 text-xs uppercase tracking-widest mb-3">Location</p>
                <p className="italic text-white/50">No location available</p>
            </div>
        )
    }

    return (
        <section className="my-2 px-6 flex flex-col justify-center items-center">
            <p className="text-white/50 text-xs uppercase tracking-widest mb-3">Location</p>
            <PlaceMap
                lat={parseFloat(lat)}
                lng={parseFloat(lng)}
                name={name}
                placeId={placeId}
            />
        </section>
    )
}

export default Location