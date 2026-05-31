import PlaceMap from "@/app/components/PlaceMap";


export async function Page({
                               params,
                               searchParams
                           }: {
    searchParams: Promise<{ lat: string, lng: string, name?: string }>,
    params: Promise<{ id: string }>
}) {
    const {lat, lng, name} = await searchParams
    const {id} = await params
    const placeName = name ? name : decodeURIComponent(id)

    return (
        <div className="w-full h-svh flex flex-col justify-center items-center">
            <h1 className="font-serif text-3xl font-bold italic mb-4">{placeName}</h1>
            <div>
                <PlaceMap lat={parseFloat(lat)} lng={parseFloat(lng)}/>
            </div>

        </div>

    )
}

export default Page
