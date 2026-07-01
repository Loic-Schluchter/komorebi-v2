import React from 'react'
import {Theme} from "@/app/lib/theme";

function ThemeQuotes({filtredTheme}: { filtredTheme: Theme}) {
    return (
        <section className="text-komorebi-gold flex flex-col gap-4">
            <div className="flex gap-2">
                <p className="font-japanese">一</p>
                <p className="text-komorebi-ivory italic font-serif text-xl">{filtredTheme.hints[0]}</p>
            </div>
            <div className="flex gap-2">
                <p className="font-japanese">二</p>
                <p className="text-komorebi-ivory italic font-serif text-xl">{filtredTheme.hints[1]}</p>
            </div>
            <div className="flex gap-2">
                <p className="font-japanese">三</p>
                <p className="text-komorebi-ivory italic font-serif text-xl">{filtredTheme.hints[2]}</p>
            </div>
        </section>
    )
}

export default ThemeQuotes
