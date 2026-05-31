'use client'
import {useEffect, useState} from "react";
export function useGeolocation() {
    const [location, setLocation] = useState<{lat: number, lng: number} | null>(null)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (pos) => setLocation({
                lat: pos.coords.latitude,
                lng: pos.coords.longitude
            }),
            (err) => console.error(err)
        )
    }, [])

    return location
}