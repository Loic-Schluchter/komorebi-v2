import theme from "@/app/lib/theme";
import ThemeBox from "@/app/components/theme/ThemeBox";
import ThemeQuotes from "@/app/components/theme/ThemeQuotes";
import ThemedCityList from "@/app/components/theme/ThemedCityList";
import ThemeHeader from "@/app/components/theme/ThemeHeader";


async function Page({params}: { params: Promise<{ id: string }> }) {
    const {id} = await params
    const filteredTheme = theme.find(t => t.name === id)
    if (!filteredTheme) return <div>Theme not found</div>
    return (
        <div>
            <ThemeHeader filters={filteredTheme} />
            <div className="w-full p-6 bg-[#0f1a14]">
                <section className=" font-serif italic flex flex-col gap-4 mb-10">
                    <div className="flex-1 border-t border-komorebi-gold/30" />
                    <h2 className="text-komorebi-ivory text-2xl ">{filteredTheme.title}</h2>
                    <p className="text-komorebi-gold/40 w-80 text-xl">{filteredTheme.longDescription}</p>
                </section>
                <section className="flex flex-col gap-10">
                    <ThemeBox filtredTheme={filteredTheme}/>
                    <ThemeQuotes filtredTheme={filteredTheme}/>
                    <ThemedCityList theme={filteredTheme.name}/>
                </section>
            </div>
        </div>

    )
}

export default Page
