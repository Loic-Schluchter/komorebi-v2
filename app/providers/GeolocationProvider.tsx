'use client'
import {createContext, useContext, useEffect, useState, ReactNode} from "react";

type Location = {lat: number, lng: number} | null;

const GeolocationContext = createContext<Location>(null);

export function GeolocationProvider({children}: {children: ReactNode}) {
    const [location, setLocation] = useState<Location>(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (pos) => setLocation({
                lat: pos.coords.latitude,
                lng: pos.coords.longitude
            }),
            (err) => console.error(err),
            {
                enableHighAccuracy: false,
                timeout: 5000,
                maximumAge: 60000,
            }
        );
    }, []);

    return (
        <GeolocationContext.Provider value={location}>
            {children}
        </GeolocationContext.Provider>
    );
}

export function useGeolocation() {
    return useContext(GeolocationContext);
}