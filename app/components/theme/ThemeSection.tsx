import React from 'react'
import ThemeCard from "@/app/components/theme/ThemeCard";

function ThemeSection() {
    return (
        <div className="my-4">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-3xl italic font-serif ">Browse by theme</h1>
                <p className="font-japanese text-komorebi-gold text-2xl">テーマ</p>
            </div>

            <p className="italic font-serif text-[1.1rem]">
                Six ways to read the country. Pick a mood, not a map.
            </p>
            <ThemeCard/>
        </div>
    )
}

export default ThemeSection
