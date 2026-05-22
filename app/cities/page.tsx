import {cities} from "@/app/lib/cities";
import CitiesClient from "@/app/cities/CitiesClient";
import BackButton from "@/app/components/BackButton";
import {getWeather} from "@/app/lib/weather";

async function Cities() {

    const weatherData = await Promise.all(
        cities.map(city => getWeather(city.name))
    )
    const citiesWithWeather = cities.map((city, index) => ({
        ...city,
        weather: weatherData[index]
    }))

    return (
        <div className="w-full flex flex-col  items-center justify-between px-4 bg-[#0F1A14] min-h-svh ">
            <div className="flex items-center gap-4 w-full mt-10 ">
                <BackButton></BackButton>
                <div className="flex flex-col text-komorebi-gold">
                    <p><span className="font-japanese">都市</span> · <span>Toshi</span></p>
                    <h1 className="text-4xl  text-[#d9cfb8] font-serif italic">All destinations</h1>
                </div>
            </div>
            <div className="flex justify-end gap-4 w-full mr-10">
                <div className="flex flex-col items-end gap-1">
                    <span className="text-komorebi-gold italic font-serif text-4xl">{cities.length}</span>
                    <p className="text-[#d9cfb8] text-sm tracking-wider uppercase">cities</p>
                </div>
            </div>
            <p className="font-serif p-4 mb-2 italic text-[1.1rem] text-[#d9cfb8]">Sixteen places chosen carefully -
                five islands, ten regions. each one with a season when its at its best.</p>
            <CitiesClient citiesWithWeather={citiesWithWeather}/>
        </div>
    )
}

export default Cities
