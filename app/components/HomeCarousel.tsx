"use client";
import { cities } from "@/app/lib/cities";
import { on } from "events";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect } from "react";

function HomeCarousel({ onActiveChange }: { onActiveChange: (index: number) => void }) {
  const maxItems = 10;
  const carouselRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            onActiveChange(index);
          }
        });
      },
      {
        root: carousel,
        threshold: 0.5,
      },
    );
    const cards = carousel.querySelectorAll("li");
    cards.forEach((card) => {
      observer.observe(card);
    });
    return () => observer.disconnect();
  }, [onActiveChange]);

  return (
    <>
      <div className="py-4 flex justify-between items-center text-[0.8rem] uppercase tracking-wider noScrollbar">
        <h2 className="text-komorebi-gold text-[0.8rem] uppercase tracking-wider">Destinations · {cities.length}</h2>
        <button className="font-serif italic  flex items-center gap-2 text-lg">
          See all <MoveRight size={16} />
        </button>
      </div>
      <ul className="flex gap-4 overflow-x-auto snap-x snap-mandatory -mx-6 px-6 pb-8" ref={carouselRef}>
        {cities.slice(0, maxItems).map((city, index) => (
          <li
            key={city.slug}
            data-index={index}
            className="snap-center shrink-0 relative w-65 h-90 rounded-2xl overflow-hidden"
          >
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
