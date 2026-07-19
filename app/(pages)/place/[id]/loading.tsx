export default function Loading() {
    return (
        <div className="w-full min-h-dvh bg-linear-to-b from-[#3d2a4a] via-[#1a1f2e] to-[#0F1A14] flex flex-col items-center justify-center gap-6 text-komorebi-ivory">
            <div className="relative w-16 h-16">
                <div className="absolute inset-0 rounded-full border-2 border-komorebi-gold/20"/>
                <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-komorebi-gold animate-spin"/>
            </div>

            <div className="flex flex-col items-center gap-1">
                <p className="font-japanese text-komorebi-gold text-lg tracking-widest">
                    木漏れ日
                </p>
                <p className="font-serif italic text-xl text-komorebi-ivory/80">
                    Just a moment...
                </p>
            </div>
        </div>
    )
}