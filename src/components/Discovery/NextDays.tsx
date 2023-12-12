'use client'
import React, { useState } from 'react'
import { type NextDaysProps } from '../../types/discovery.interfaces'

export default function NextDays ({ Days }: NextDaysProps): JSX.Element {
  const [activeDayIndex, setActiveDayIndex] = useState<number | null>(null)

  return (
    <div className="flex overflow-x-scroll mt-5 pb-4">
      {Days.map((day, index) => (
        <div
          onClick={() => { setActiveDayIndex(index) }}
          className={`border mr-3 shadow-lg rounded-md border-primary p-4 px-9 text-center text-lg 
                     ${
                       activeDayIndex === index
                         ? 'bg-[#FFD6B8]'
                         : 'hover:cursor-pointer'
                     }`}
          key={index}
        >
          <p>{day.day}</p>
          <p className="text-sm">{day.number}</p>
        </div>
      ))}
    </div>
  )
}
