"use client";
import { cities } from "@/app/lib/cities";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useCallback } from "react";
import {useRouter} from "next/navigation";
import { motion } from "motion/react";


function HomeCarousel({ onActiveChange }: { onActiveChange: (index: number) => void }) {
  const maxItems = 10;
  const carouselRef = useRef<HTMLUListElement>(null);

  const findCenterCard = useCallback(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const carouselRect = carousel.getBoundingClientRect();
    const centerX = carouselRect.left + carouselRect.width / 2;

    const cards = carousel.querySelectorAll("li");
    let closestIndex = 0;
    let closestDist = Infinity;

    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const dist = Math.abs(cardCenter - centerX);
      if (dist < closestDist) {
        closestDist = dist;
        closestIndex = Number(card.getAttribute("data-index"));
      }
    });

    onActiveChange(closestIndex);
  }, [onActiveChange]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let timeout: ReturnType<typeof setTimeout>;

    const onScrollEnd = () => findCenterCard();

    const onScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(findCenterCard, 150);
    };

    if ("onscrollend" in carousel) {
      carousel.addEventListener("scrollend", onScrollEnd);
    }
    carousel.addEventListener("scroll", onScroll);
    findCenterCard();
    return () => {
      carousel.removeEventListener("scrollend", onScrollEnd);
      carousel.removeEventListener("scroll", onScroll);
      clearTimeout(timeout);
    };
  }, [findCenterCard]);

      const router = useRouter();
      function handleClick(city : string) {

        router.push(`/cities/${city}`.toLowerCase());
      }
  return (
    <section>
      <div className="py-4 flex justify-between items-center text-[0.8rem] uppercase tracking-wider">
        <h2 className="text-komorebi-gold text-[0.8rem] uppercase tracking-wider">Destinations · {cities.length}</h2>
        <button className="font-serif italic flex items-center gap-2 text-lg" onClick={() => (router.push("/cities"))}>
          See all <MoveRight size={16} />
        </button>
      </div>
      <ul className="flex gap-4 overflow-x-auto snap-x snap-mandatory -mx-6 px-6 pb-8 noScrollbar" ref={carouselRef}>
        {cities.slice(0, maxItems).map((city, index) => (
          <li
            key={city.slug}
            data-index={index}
            className="snap-center shrink-0 relative w-65 h-90 rounded-2xl overflow-hidden"
          >
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
            >
              <Image src={city.image} alt={city.name} fill className="object-cover" />
            </motion.div>

            <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/60" />
            <div className="absolute inset-0 p-5 flex flex-col">
              <p className="font-japanese text-2xl text-komorebi-gold">{city.japaneseName}</p>
              <h3 className="font-serif text-4xl italic">{city.name}</h3>
            </div>
            <button className="absolute bottom-4 right-4 bg-[#B8392C] text-white p-2 rounded-full hover:opacity-90 transition-opacity" onClick={()=> handleClick(city.name)}>
              <MoveRight size={20} />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default HomeCarousel;
