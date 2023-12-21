"use client"
import { useState } from "react";

let options = ['For You', 'New', 'Trending', 'Popular', 'Following']

export default function EventOptions(){

    const [activeDayIndex, setActiveDayIndex] = useState<number | null>(0);
    return(
            <div className="flex overflow-x-scroll">
                {options.map((option, index) => (
                    <div
                    onClick={() => setActiveDayIndex(index)}
                    className={`mr-10 mt-5 font-light text-center 
                                ${
                                activeDayIndex === index
                                    ? "underline font-semibold"
                                    : "hover:cursor-pointer"
                                }`}
                    key={index}
                    >
                    <p>{option}</p>
                    </div>
                ))}
                
            </div>
    )
}