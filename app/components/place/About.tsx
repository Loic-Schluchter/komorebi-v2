import React from 'react'
import HoursPlace from "@/app/components/place/HoursPlace";
import {PlaceDetails} from "@/app/types/Place";

function About({details} : {details: PlaceDetails }) {
    return (
        <section className="flex flex-col gap-2">
            <p className="text-komorebi-gold uppercase tracking-widest">About</p>
            <p className="font-serif italic text-[1.1rem] leading-relaxed text-komorebi-ivory/80">
                {details.editorialSummary.text}
            </p>
            <HoursPlace details={details}/>
        </section>
    )
}

export default About
