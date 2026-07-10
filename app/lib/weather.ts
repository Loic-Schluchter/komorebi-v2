export async function getWeather(city: string) {
    const API_KEY = process.env.OPEN_WEATHER_API_KEY

    type GeoCodingResponse = {
            lat: number,
            lon: number,
    }


    try {
        const geoCoding= await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city},JP&limit=1&appid=${API_KEY}`)
        if (!geoCoding.ok) {
            throw new Error("Failed to geocode city");
        }
        const data : GeoCodingResponse[] =  await geoCoding.json()
        if (data.length === 0) {
            throw new Error("City not found");
        }

        const {lat, lon} = data[0]
        const response = await fetch(

            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`,
            { next: { revalidate: 3600 } }
        )
        if (!response.ok) return null
        return response.json()
    } catch {
        return null
    }
}