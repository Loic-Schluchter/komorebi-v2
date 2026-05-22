'use client'

import React from 'react'
import {ListFilter} from "lucide-react";

function FilterButton() {
    return (
        <div className="flex gap-2 text-[0.8rem] items-center text-komorebi-gold">
            <ListFilter size={"16"} />
            <p>FILTER</p>
        </div>
    )
}

export default FilterButton
