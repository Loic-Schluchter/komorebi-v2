'use client'

import { ChevronLeft } from "lucide-react"
import {useRouter} from "next/navigation";


interface BackButtonProps {
    size?: number
}
export default function BackButton({size = 20 }: BackButtonProps) {
    const router = useRouter()
    return (
        <button
            className="rounded-full bg-black/20 p-2 hover:bg-black/30 transition"
            aria-label="Go Back"
            onClick={()=> router.back()}
        >
            <ChevronLeft size={size} />
        </button>
    )
}