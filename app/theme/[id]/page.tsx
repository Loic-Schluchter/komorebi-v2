import React from 'react'
import theme from "@/app/lib/theme";
import BackButton from "@/app/components/BackButton";

async function Page({params}: { params: Promise<{ id: string }> }) {
    const {id} = await params
    const filtredTheme = theme.find(t => t.name === id)
    if (!filtredTheme) return <div>Theme not found</div>
    return (
        <div className="w-full p-6 bg-[#0f1a14]">
            <div className="flex  items-center mb-4 gap-20">
                <BackButton size={24}/>
                <p className="font-sans uppercase"><span className="font-japanese">テーマ</span> · Theme 1 of 6</p>
            </div>
            <div className=" flex flex-col w-full  bg-linear-to-b from-[#8F1D21] from-10% to-[#0f1a14] to-90% rounded-2xl p-4 pb-20 ">
                <p className="self-end text-6xl font-japanese text-komorebi-gold">{filtredTheme.kanji}</p>
                <div className="mt-20">
                    <p className="text-komorebi-gold font-serif text-2xl">{filtredTheme.kanjiMeaning}</p>
                    <h1 className="text-6xl text-komorebi-ivory font-serif italic"> {filtredTheme.name}</h1>
                    <p className="text-komorebi-ivory italic font-serif text-[1.3rem]">
                        {filtredTheme.description}
                    </p>
                </div>
            </div>
            <section className="mt-10">
                <h2>{filtredTheme.title}</h2>
                <p>{filtredTheme.longDescription}</p>
            </section>
            <section>
                <div className="flex justify-between">
                    <h2>Good to know</h2>
                    <p>Before you go</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4 border border-komorebi-gold text-komorebi-ivory rounded-2xl p-4">
                    {filtredTheme.infos.map((info) => (
                        <div
                            key={info.label}
                            className="flex flex-col gap-2"
                        >
                            <h3 className="text-komorebi-gold">
                                {info.label}
                            </h3>
                            <p>{info.value}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="text-komorebi-gold flex flex-col gap-4 mt-10">
                <div className="flex gap-2">
                    <p className="font-japanese">一</p>
                    <p className="text-komorebi-ivory italic font-serif text-xl">{filtredTheme.hints[0]}.</p>
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
        </div>
    )
}

export default Page
