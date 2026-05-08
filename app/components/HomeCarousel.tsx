import { cities } from "@/lib/cities";
import { MoveRight } from "lucide-react";
import Image from "next/image";

function HomeCarousel() {
  const maxItems = 10;

  return (
    <>
      {/* Titre de section */}
      <div className="py-4 flex justify-between items-center text-[0.8rem] uppercase tracking-wider">
        <h2 className="text-komorebi-gold text-[0.8rem] uppercase tracking-wider">Destinations · {cities.length}</h2>
        <button className="font-serif italic  flex items-center gap-2 text-lg">
          See all <MoveRight size={16} />
        </button>
      </div>

      {/* Carousel qui déborde */}
      <ul className="flex gap-4 overflow-x-auto snap-x snap-mandatory -mx-6 px-6 pb-8">
        {cities.slice(0, maxItems).map((city) => (
          <li key={city.slug} className="snap-center shrink-0 relative w-70 h-90 rounded-2xl overflow-hidden">
            <Image src={city.image} alt={city.name} fill className="object-cover" />
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/60" />
            <div className="absolute inset-0 p-5 flex flex-col">
              <p className="font-japanese text-2xl text-komorebi-gold">{city.japaneseName}</p>
              <h3 className="font-serif text-4xl italic">{city.name}</h3>
            </div>
            <button className="absolute bottom-4 right-4 bg-[#B8392C] text-white p-2 rounded-full hover:opacity-90 transition-opacity">
              <MoveRight size={20} />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default HomeCarousel;
