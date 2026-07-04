'use client'

import Image from "next/image"
import { useState } from "react"

function PhotoCarousel({ photoUrls }: { photoUrls: string[] }) {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div className="flex flex-col gap-2">
            <ul
                className="flex gap-4 overflow-x-auto snap-x snap-mandatory noScrollbar"
                onScroll={(e) => {
                    const index = Math.round(e.currentTarget.scrollLeft / e.currentTarget.offsetWidth)
                    setActiveIndex(index)
                }}
            >
                {photoUrls.map((url, index) => (
                    <li key={index} className="snap-center shrink-0 relative w-full h-100  overflow-hidden">
                        <Image src={url} alt="photo" fill className="object-cover" priority/>
                    </li>
                ))}
            </ul>

            <div className="flex gap-1 justify-center">
                {photoUrls.map((_, index) => (
                    <div
                        key={index}
                        className={`h-1 rounded-full transition-all duration-300 ${
                            index === activeIndex
                                ? "w-6 bg-komorebi-gold"
                                : "w-2 bg-white/30"
                        }`}
                    />
                ))}
            </div>
        </div>
    )
}

export default PhotoCarousel