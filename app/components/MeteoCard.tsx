
import {getWeather} from "@/app/lib/weather";
import {OpenWeatherMapResponse} from "@/app/types/weather";



async function MeteoCard({city}: {city: string}) {
    const weather : OpenWeatherMapResponse = await getWeather(city)
    console.log(city, weather)
    if (!weather) return null;

    return (
        <div className="w-full bg-white/10 rounded-xl grid grid-cols-4 items-center py-4 text-komorebi-ivory">
            {[
                { value: `${weather.main.temp_min.toFixed()}°`, label: "LOW" },
                { value: `${weather.main.temp_max.toFixed()}°`, label: "HIGH" },
                { value: `${weather.main.humidity}%`, label: "HUMIDITY" },
                { value: `${weather.wind.speed.toFixed()}km`, label: "WIND" },
            ].map(({ value, label }) => (
                <div key={label} className="flex flex-col items-center gap-1">
                    <span className="font-serif italic text-2xl">{value}</span>
                    <span className="font-sans text-xs tracking-widest uppercase text-white/50">{label}</span>
                </div>
            ))}
        </div>
    )
}

export default MeteoCard
