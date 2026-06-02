import PlaceMap from "@/app/components/PlaceMap";
import {getPlaceDetails} from "@/app/lib/places";
import PhotoCarousel from "@/app/components/PhotoCarousel";
import {CircleChevronDown, Star} from "lucide-react";
import {PlaceDetails} from "@/app/types/Place";
import BackButton from "@/app/components/BackButton";

export async function Page({
                               params,
                               searchParams
                           }: {
    searchParams: Promise<{ lat: string, lng: string, placeId?: string }>,
    params: Promise<{ id: string }>
}) {
    const {lat, lng, placeId} = await searchParams
    const {id} = await params

    if (!placeId) return null
    const details: PlaceDetails = await getPlaceDetails(decodeURIComponent(placeId))

    const photoUrls: string[] = details?.photos?.map(photo =>
        `https://places.googleapis.com/v1/${photo.name}/media?maxWidthPx=800&key=${process.env.GOOGLE_PLACES_API_KEY}`
    ) ?? []

    const closeTime = details?.currentOpeningHours?.nextCloseTime
        ? new Date(details.currentOpeningHours.nextCloseTime).toLocaleTimeString("ja-JP", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
            timeZone: "Asia/Tokyo"
        })
        : null

    const openStatus = details?.currentOpeningHours?.openNow
        ? details?.currentOpeningHours?.nextCloseTime
            ? `Open until ${closeTime}`
            : "Always open"
        : details?.currentOpeningHours === undefined
            ? "Always open"
            : "Closed"

    return (
        <div className="w-full bg-linear-to-b from-[#3d2a4a] via-[#1a1f2e] to-[#0F1A14] min-h-svh text-komorebi-ivory">

            {/* Photos */}
            <PhotoCarousel photoUrls={photoUrls}/>

            {/* Content */}
            <div className="px-6 flex flex-col gap-6 mt-4">

                {/* Back + Title */}
                <div className="flex items-center gap-3">
                    <BackButton size={20}/>
                    <h1 className="font-serif text-4xl font-bold italic capitalize">
                        {decodeURIComponent(id)}
                    </h1>
                </div>

                {details && (
                    <>
                        {/* Stats */}
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

                        {/* About */}
                        {details?.editorialSummary?.text && (
                            <div className="flex flex-col gap-2">
                                <p className="text-komorebi-gold text-xs uppercase tracking-widest">About</p>
                                <p className="font-serif italic text-[1rem] leading-relaxed text-komorebi-ivory/80">
                                    {details.editorialSummary.text}
                                </p>
                            </div>
                        )}

                        {/* Opening hours */}
                        <div className="flex justify-between items-center border-t border-white/10 pt-4">
                            <p className="flex items-center gap-2 text-sm">
                                <CircleChevronDown size={16} className="text-komorebi-gold"/>
                                {openStatus}
                            </p>
                            <button className="text-komorebi-gold text-sm">See hours →</button>
                        </div>
                    </>
                )}
            </div>

            {/* Map */}
            <div className="mt-6 px-6">
                <p className="text-white/50 text-xs uppercase tracking-widest mb-3">Location</p>
                <PlaceMap lat={parseFloat(lat)} lng={parseFloat(lng)}/>
            </div>
        </div>
    )
}

export default Page