import React from 'react'
import theme from "@/app/lib/theme";
import BackButton from "@/app/components/ui/BackButton";
import ThemeBox from "@/app/components/theme/ThemeBox";
import ThemeQuotes from "@/app/components/theme/ThemeQuotes";
import ThemedCityList from "@/app/components/theme/ThemedCityList";


async function Page({params}: { params: Promise<{ id: string }> }) {
    const {id} = await params
    const filtredTheme = theme.find(t => t.name === id)
    if (!filtredTheme) return <div>Theme not found</div>
    return (
        <div className="w-full p-6 bg-[#0f1a14]">
            <div className="flex  items-center mb-4 gap-20">
                <BackButton size={24}/>
                <p className="font-sans uppercase text-komorebi-ivory"><span className="font-japanese ">テーマ</span> · Theme 1 of 6</p>
            </div>
            <div className=" flex flex-col w-full rounded-2xl bg-linear-to-b from-[#8F1D21] from-10% to-[#0f1a14] to-90%  p-4 pb-20 " >
                <p className="self-end text-6xl font-japanese text-komorebi-gold">{filtredTheme.kanji}</p>
                <div className="mt-20">
                    <p className="text-komorebi-gold font-serif text-2xl">{filtredTheme.kanjiMeaning}</p>
                    <h1 className="text-6xl text-komorebi-ivory font-serif italic"> {filtredTheme.name}</h1>
                    <p className="text-komorebi-ivory italic font-serif text-[1.3rem]">
                        {filtredTheme.description}
                    </p>
                </div>
            </div>
            <section className=" font-serif italic flex flex-col gap-4 mb-10">
                <div className="flex-1 border-t border-komorebi-gold/30" />
                <h2 className="text-komorebi-ivory text-2xl ">{filtredTheme.title}</h2>
                <p className="text-komorebi-gold/40 w-80 text-xl">{filtredTheme.longDescription}</p>
            </section>
            <section className="flex flex-col gap-10">
                <ThemeBox filtredTheme={filtredTheme}/>
                <ThemeQuotes filtredTheme={filtredTheme}/>
                <ThemedCityList theme={filtredTheme.name}/>
            </section>

        </div>
    )
}

export default Page
