'use client'
import React, { useState } from 'react'

const options = ['For You', 'New', 'Trending', 'Popular', 'Following']

export default function EventOptions (): JSX.Element {
  const [activeDayIndex, setActiveDayIndex] = useState<number | null>(0)
  return (
            <div className="flex overflow-x-scroll">
                {options.map((option, index) => (
                    <div
                    onClick={() => { setActiveDayIndex(index) }}
                    className={`mr-10 mt-5 font-light text-center 
                                ${
                                activeDayIndex === index
                                    ? 'underline font-semibold'
                                    : 'hover:cursor-pointer'
                                }`}
                    key={index}
                    >
                    <p>{option}</p>
                    </div>
                ))}

            </div>
  )
}
