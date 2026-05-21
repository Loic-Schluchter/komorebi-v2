import {City} from "@/app/lib/cities";
import {OpenWeatherMapResponse} from "@/app/types/weather";

export type CityWithWeather = City & {
    weather: OpenWeatherMapResponse | null
}