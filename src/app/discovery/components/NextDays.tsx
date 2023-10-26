"use client";
import { useState } from "react";

interface Day {
  day: string;
  number: string;
}

interface NextDaysProps {
  Days: Day[];
}

export default function NextDays({ Days }: NextDaysProps) {
  const [activeDayIndex, setActiveDayIndex] = useState<number | null>(null);

  return (
    <div className="flex overflow-x-scroll mt-5 pb-4">
      {Days.map((day, index) => (
        <div
          onClick={() => setActiveDayIndex(index)}
          className={`border mr-3 shadow-lg rounded-md border-primary p-4 px-9 text-center text-lg 
                     ${
                       activeDayIndex === index
                         ? "bg-FFD6B8"
                         : "hover:cursor-pointer"
                     }`}
          key={index}
        >
          <p>{day.day}</p>
          <p className="text-sm">{day.number}</p>
        </div>
      ))}
    </div>
  );
}
