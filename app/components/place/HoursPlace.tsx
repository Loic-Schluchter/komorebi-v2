'use client'
import { useState } from "react"
import React from 'react'
import {ChevronDown, CircleChevronDown, CircleSmall} from "lucide-react"
import {PlaceDetails} from "@/app/types/Place"

function HoursPlace({details}: { details: PlaceDetails }) {
    const [showHours, setShowHours] = useState(false)
    const closeTime = details?.currentOpeningHours?.nextCloseTime
        ? new Date(details.currentOpeningHours.nextCloseTime).toLocaleTimeString("ja-JP", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
            timeZone: "Asia/Tokyo"
        })
        : null

    const isOpen = details?.currentOpeningHours === undefined || details?.currentOpeningHours?.openNow
    const openStatus = isOpen
        ? closeTime ? `Open until ${closeTime}` : "Always open"
        : "Closed"
    const statusColor = isOpen ? "text-green-400" : "text-red-400"
    const statusBg = isOpen ? "bg-green-400/10 border border-green-400/40" : "bg-red-400/20 border border-red-400/40"

    return (
        <div className="flex flex-col  border-2 rounded-3xl border-komorebi-gold/40 shadow-komorebi-gold/10 shadow-md overflow-hidden">
            <div className="flex justify-between items-center p-6">
                <div className={`${statusColor} flex items-center gap-2`}>
                    <div className={`flex items-center justify-center w-14 h-14 rounded-2xl ${statusBg}`}>
                        <CircleChevronDown size={22} className="text-komorebi-gold"/>
                    </div>
                    <div className="flex items-center gap-1">
                        <CircleSmall
                            size={12}
                            fill={isOpen ? "#4ade80" : "#f87171"}
                            className={statusColor}
                        />
                        {openStatus}
                    </div>
                </div>
                <button
                    className="text-komorebi-gold"
                    onClick={() => setShowHours(!showHours)}
                >
                    <ChevronDown className={`transition-transform duration-300 ${showHours ? "rotate-180" : ""}`}/>
                </button>
            </div>

            {showHours && details?.regularOpeningHours.weekdayDescriptions && (
                <ul className="px-6 pb-6 flex flex-col   gap-1 border-t border-white/10 ">
                    {details.regularOpeningHours.weekdayDescriptions.map((day: string, index: number) => (
                        <li key={index} className="text-sm text-komorebi-gold pt-2 font-bold">{day}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default HoursPlace