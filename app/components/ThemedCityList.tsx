import {cities} from "@/app/lib/cities";
import CityCard from "@/app/components/CityCard";
import {getWeather} from "@/app/lib/weather";


async function ThemedCityList({theme}: {theme: string}) {
    if (!theme) {
        return null;
    }
    const themedCities = cities.filter(
        city => city.theme === theme
    );
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
        <div className="w-full flex flex-col gap-2 mt-10 min-h-140">
            <h2>Cities we recommend</h2>
            {citiesWithWeather.map((city, i) => (
                <div key={i}>
                    <CityCard city={city}/>
                </div>

            ))}
        </div>
        )

}

export default ThemedCityList;
