'use client'

import { ChevronLeft } from "lucide-react"
import { useRouter } from "next/navigation"


 interface BackButtonProps {
    size?: number
 }
export default function BackButton({size} : BackButtonProps) {
    const router = useRouter()
    return (
        <button className="rounded-full bg-black/20 p-1"  onClick={() => router.back()}>
            <ChevronLeft size={size}/>
        </button>
    )
}