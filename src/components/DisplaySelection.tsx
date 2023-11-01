"use client"
import { useState } from "react";

interface Option {
    option: string;
  }
  
  interface OptionProps {
    options: Option[];
  }

export default function DisplaySelection({options}:OptionProps){


const [activeDayIndex, setActiveDayIndex] = useState<number | null>(null);
    return(
        <div className="flex overflow-x-scroll">
                {options.map((option, index) => (
                    <div
                    onClick={() => setActiveDayIndex(index)}
                    className={`border mr-3 mt-5 rounded-full font-light p-2 px-4 text-center 
                                ${
                                activeDayIndex === index
                                    ? "bg-primary text-white"
                                    : "hover:cursor-pointer"
                                }`}
                    key={index}
                    >
                    <p>{option.option}</p>
                    </div>
                ))}
                
            </div>
    )
}