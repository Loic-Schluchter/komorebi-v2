import { getWeather } from "@/app/lib/weather";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const city = searchParams.get("city");

    if (!city) {
        return Response.json({ error: "Missing city" }, { status: 400 });
    }

    const weather = await getWeather(city);

    if (!weather) {
        return Response.json({ error: "Weather not found" }, { status: 404 });
    }

    return Response.json({
        sunrise: weather.sys.sunrise,
        sunset: weather.sys.sunset,
        conditions: weather.weather[0].main,
    });
}