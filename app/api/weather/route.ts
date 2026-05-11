import { OpenWeatherMapResponse } from "@/app/types/weather";



export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const city = searchParams.get("city");

    if (!city) {
        return Response.json({ error: "City parameter is required" }, { status: 400 });
    }
    const API_KEY = process.env.VISUAL_CROSSING_API_KEY;
    if (!API_KEY) {
        return Response.json({ error: "Missing API key" }, { status: 500 });
    }
    try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}`,
          {
            cache: "no-store",
          },
        );
        if (!response.ok) {
            throw new Error("Weather API failed");
        }
        const data : OpenWeatherMapResponse = await response.json();
        return Response.json({
            sunset: data.sys.sunset,
            sunrise: data.sys.sunrise,
            conditions:data.weather[0].main
        })
    } catch {
        return Response.json({ error: "Failed to fetch weather data" }, { status: 500 }); 
    }
    
}