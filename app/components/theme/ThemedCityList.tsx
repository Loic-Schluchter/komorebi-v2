
import CityCard from "@/app/components/city/CityCard";
import {getWeather} from "@/app/lib/weather";
import {supabase} from "@/app/lib/supabase";


async function ThemedCityList({theme}: {theme: string}) {
    if (!theme) {
        console.error("Theme is undefined");
        return null;
    }
    const {data : themedCities, error} = await supabase.from("cities").select("*").eq("theme", theme)
    if (error) {
        console.error("Error fetching themed cities:", error);
        return null;
    }
    if (themedCities.length === 0) {
        return (
            <div>
                <p>No themed city found</p>
            </div>
        )
    }
    const weatherData = await Promise.all(
        themedCities.map(city => getWeather(city.name))
    )
    const citiesWithWeather = themedCities.map((city, index) => ({
        ...city,
        weather: weatherData[index]
    }))
    return (
        <section>
            <div className="w-full flex flex-col gap-2  min-h-140">
                <div className="flex font-serif items-baseline gap-4 text-komorebi-ivory">
                    <p className="text-komorebi-gold italic text-2xl">03</p>
                    <h2 className="text-2xl italic">Cities we recommend</h2>
                </div>

                {citiesWithWeather.map((city, i) => (
                    <div key={i}>
                        <CityCard city={city}/>
                    </div>

                ))}
            </div>
        </section>

        )

}

export default ThemedCityList;
