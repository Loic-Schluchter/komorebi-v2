export async function getWeather(city: string) {
    const API_KEY = process.env.OPEN_WEATHER_API_KEY

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
            { next: { revalidate: 3600 } }
        )
        if (!response.ok) return null
        return response.json()
    } catch {
        return null
    }
}