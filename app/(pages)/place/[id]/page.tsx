import PhotoCarousel from "@/app/components/ui/PhotoCarousel";
import About from "@/app/components/place/About";
import Location from "@/app/components/place/Location"
import DataFetcher from "@/app/components/place/DataFetcher";
import PlaceStats from "@/app/components/place/PlaceStats";
import PlaceHeader from "@/app/components/place/PlaceHeader";

export async function Page({
    params,
    searchParams
}: {
    searchParams: Promise<{ lat: string; lng: string; placeId: string }>
    params: Promise<{ id: string }>
}) {
        const data = await DataFetcher({params, searchParams})
        if (!data) return <div>Place not found</div>
        return (
            <div className="w-full bg-linear-to-b from-[#3d2a4a] via-[#1a1f2e] to-[#0F1A14] min-h-dvh text-komorebi-ivory">
                <PhotoCarousel photoUrls={data.photoUrls} />
                <div className="px-6 flex flex-col gap-6 mt-4">
                    <PlaceHeader
                        displayText={data.details.displayName.text}
                    />
                    <PlaceStats details={data.details} />
                    <About details={data.details} />
                    <Location gpsData={data.gpsData} name={data.details.displayName.text}/>
                </div>
            </div>
        )
}

export default Page