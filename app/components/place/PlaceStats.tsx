import React from 'react'
import {Star} from "lucide-react";
import {PlaceDetails} from "@/app/types/Place";

function PlaceStats({details}: {details: PlaceDetails})  {
    return (
        <section>
            <div className="grid grid-cols-3 gap-2 border-t border-b border-white/10 py-4">
                <div className="flex flex-col gap-1">
                    <p className="text-white/50 text-xs uppercase tracking-widest">Rating</p>
                    <p className="flex items-center gap-1 text-komorebi-gold">
                        <Star size={12} fill="currentColor" />
                        <span className="font-serif italic text-lg">{details.rating}</span>
                    </p>
                </div>

                <div className="flex flex-col gap-1">
                    <p className="text-white/50 text-xs uppercase tracking-widest">Cost</p>
                    <p className="font-serif italic text-lg text-komorebi-ivory">
                        {details.priceLevel ?? "Free"}
                    </p>
                </div>

                <div className="flex flex-col gap-1">
                    <p className="text-white/50 text-xs uppercase tracking-widest">Dogs</p>
                    <p className="font-serif italic text-lg text-komorebi-ivory">
                        {details.allowsDogs ? "Welcome" : "No"}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default PlaceStats
