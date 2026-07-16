import React from 'react'
import HoursPlace from "@/app/components/place/HoursPlace";
import {PlaceDetails} from "@/app/types/Place";

function About({details}: {details: PlaceDetails}) {
    return (
        <section className="flex flex-col gap-2">
            <p className="text-komorebi-gold uppercase tracking-widest">Hours</p>
            <HoursPlace details={details}/>
        </section>
    )
}

export default About
