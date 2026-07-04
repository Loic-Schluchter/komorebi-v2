import React from 'react'
import PlaceMap from "./PlaceMap"
import {GpsType} from "@/app/types/GpsData";

function Location({gpsData} : {gpsData : GpsType}) {
    const {lat, lng} = gpsData
    if (!lat || !lng){
        return <div>
            <p className="text-white/50 text-xs uppercase tracking-widest mb-3">Location</p>
            <p className="italic text-white/50">No location available</p>
        </div>
    }
    return (
        <div className="my-6 px-6">
            <p className="text-white/50 text-xs uppercase tracking-widest mb-3">Location</p>
            <PlaceMap lat={parseFloat(lat)} lng={parseFloat(lng)} selfLat={parseFloat(lat)} selfLng={parseFloat(lng)}/>
        </div>
    )
}
export default Location
