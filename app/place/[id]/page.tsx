import PlaceMap from "@/app/components/PlaceMap";
import {getPlaceDetails} from "@/app/lib/places";
import PhotoCarousel from "@/app/components/PhotoCarousel";
import {CircleChevronDown, Star} from "lucide-react";
import {PlaceDetails} from "@/app/types/Place";
import BackButton from "@/app/components/BackButton";
import HoursPlace from "@/app/components/HoursPlace";


export async function Page({
                               params,
                               searchParams
                           }: {
    searchParams: Promise<{ lat: string, lng: string, placeId?: string }>,
    params: Promise<{ id: string }>
}) {

    const {lat, lng, placeId} = await searchParams
    if (!placeId || !lat || !lng) return null
    const {id} = await params


    const details: PlaceDetails = await getPlaceDetails(decodeURIComponent(placeId))

    const photoUrls: string[] = details?.photos?.map(photo =>
        `https://places.googleapis.com/v1/${photo.name}/media?maxWidthPx=800&key=${process.env.GOOGLE_PLACES_API_KEY}`
    ) ?? []
    return (
        <div className="w-full bg-linear-to-b from-[#3d2a4a] via-[#1a1f2e] to-[#0F1A14] min-h-svh text-komorebi-ivory">

            <PhotoCarousel photoUrls={photoUrls}/>
            <div className="px-6 flex flex-col gap-6 mt-4">
                <div className="flex items-center gap-3">
                    <BackButton size={20}/>
                    <h1 className="font-serif text-4xl font-bold italic capitalize">
                        {decodeURIComponent(id)}
                    </h1>
                </div>
                {details && (
                    <>
                        <div className="grid grid-cols-3 gap-2 border-t border-b border-white/10 py-4">
                            <div className="flex flex-col gap-1">
                                <p className="text-white/50 text-xs uppercase tracking-widest">Rating</p>
                                <p className="flex items-center gap-1 text-komorebi-gold">
                                    <Star size={12} fill="currentColor"/>
                                    <span className="font-serif italic text-lg">{details.rating}</span>
                                </p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="text-white/50 text-xs uppercase tracking-widest">Cost</p>
                                <p className="font-serif italic text-lg text-komorebi-ivory">
                                    {details.priceLevel ?? "Free"}
                                </p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="text-white/50 text-xs uppercase tracking-widest">Dogs</p>
                                <p className="font-serif italic text-lg text-komorebi-ivory">
                                    {details.allowsDogs ? "Welcome" : "No"}
                                </p>
                            </div>
                        </div>

                        {details?.editorialSummary?.text && (
                            <div className="flex flex-col gap-2">
                                <p className="text-komorebi-gold uppercase tracking-widest">About</p>
                                <p className="font-serif italic text-[1.1rem] leading-relaxed text-komorebi-ivory/80">
                                    {details.editorialSummary.text}
                                </p>
                            </div>
                        )}
                        <HoursPlace details={details}/>
                    </>
                )}
            </div>
            <div className="my-6 px-6">
                <p className="text-white/50 text-xs uppercase tracking-widest mb-3">Location</p>
                <PlaceMap lat={parseFloat(lat)} lng={parseFloat(lng)} selfLat={parseFloat(lat)} selfLng={parseFloat(lng)}/>
            </div>
        </div>
    )
}

export default Page