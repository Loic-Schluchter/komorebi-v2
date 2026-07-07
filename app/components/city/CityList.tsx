import CityCard from "@/app/components/city/CityCard"
import { CityWithWeather } from "@/app/types/City"

interface CityListProps {
    selectedIsland?: string
    citiesWithWeather?: CityWithWeather[]
}

function CityList({ selectedIsland, citiesWithWeather }: CityListProps) {
    if (!selectedIsland || !citiesWithWeather) return null

    const filteredCities =
        selectedIsland === "All islands"
            ? citiesWithWeather
            : citiesWithWeather.filter(city => city.island === selectedIsland)

    const groupedCities = filteredCities.reduce((acc, city) => {
        if (!acc[city.region]) acc[city.region] = []
        acc[city.region].push(city)
        return acc
    }, {} as Record<string, CityWithWeather[]>)

    return (
        <div className="w-full flex flex-col gap-2 mt-10 min-h-140">
            {Object.entries(groupedCities).map(([region, cities], index) => (
                <div key={region}>
                    <div className="flex justify-between items-center gap-2 mb-2">
                        <p className="text-komorebi-gold text-[0.8rem]">
                            {`0${index + 1}`}
                        </p>
                        <h2 className="text-[#d9cfb8] uppercase tracking-wider text-lg whitespace-nowrap font-serif font-bold">
                            {region}
                        </h2>
                        <div className="w-full h-px bg-white/20"></div>
                        <p className="text-sm whitespace-nowrap uppercase text-[#d9cfb8]">
                            {cities.length} cities
                        </p>
                    </div>
                    {cities.map(city => (
                        <CityCard key={city.slug} city={city} />
                    ))}
                </div>
            ))}
        </div>
    )
}

export default CityList