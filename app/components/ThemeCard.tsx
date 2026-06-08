import React from 'react'
import themes from "@/app/lib/theme";
function ThemeCard() {
    console.log(themes)
    return (
        <div className="grid grid-cols-2 auto-rows-auto gap-2 my-4">
            {themes.map((theme) => (
                <div
                    key={theme.name}
                    className="relative flex flex-col gap-2 rounded-xl px-4 py-4 overflow-hidden"
                    style={{ backgroundImage: `url(${theme.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />
                    <div className="relative z-10 flex justify-between mb-8">
                        <p className="text-4xl text-komorebi-gold font-japanese">{theme.kanji}</p>
                        <p className="italic">{theme.numberOfTown}</p>
                    </div>
                    <h1 className="relative z-10 font-serif text-3xl italic">{theme.name}</h1>
                    <p className="relative z-10 font-sans text-[0.7rem] uppercase">{theme.description}</p>
                </div>
            ))}
        </div>
    )
}

export default ThemeCard
