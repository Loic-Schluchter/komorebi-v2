import React from 'react'
import BackButton from "../ui/BackButton"

type PlaceHeaderProps = {
    displayText: string,
}

function PlaceHeader({displayText} :PlaceHeaderProps) {
    return (
        <div className="flex items-center justify-center gap-3">
            <BackButton size={20}/>
            <h1 className="font-serif text-4xl font-bold italic capitalize">
                {displayText}
            </h1>
        </div>
    )
}
export default PlaceHeader
