import React from 'react'
import BackButton from "@/app/components/ui/BackButton";
import {Theme} from "@/app/lib/theme";

function ThemeHeader({filters} : {filters: Theme}) {
    return (
        <div className="w-full p-4 bg-[#0f1a14]">
            <div className="flex  items-center mb-4 gap-20">
                <BackButton size={24}/>
                <p className="font-sans uppercase text-komorebi-ivory"><span className="font-japanese ">テーマ</span> · Theme 1 of 6</p>
            </div>
            <div className=" flex flex-col w-full rounded-2xl bg-linear-to-b from-[#8F1D21] from-10% to-[#0f1a14] to-90%  p-4 pb-20 " >
                <p className="self-end text-6xl font-japanese text-komorebi-gold">{filters.kanji}</p>
                <div className="mt-20">
                    <p className="text-komorebi-gold font-serif text-2xl">{filters.kanjiMeaning}</p>
                    <h1 className="text-6xl text-komorebi-ivory font-serif italic"> {filters.name}</h1>
                    <p className="text-komorebi-ivory italic font-serif text-[1.3rem]">
                        {filters.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ThemeHeader
