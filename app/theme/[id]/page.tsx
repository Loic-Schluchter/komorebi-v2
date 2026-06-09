import React from 'react'
import theme from "@/app/lib/theme";

async function  Page({params}: { params: Promise<{ id: string }>}) {
    const {id} = await params
    const filtredTheme = theme.find(t => t.name === id)
    if (!filtredTheme) return <div>Theme not found</div>
    return (
        <div>
            <p>{filtredTheme.kanji}</p>
            <p>{filtredTheme.kanjiMeaning}</p>
            <h1> {filtredTheme.name}</h1>
            <p>
                {filtredTheme.description}
            </p>
        </div>
    )
}

export default Page
