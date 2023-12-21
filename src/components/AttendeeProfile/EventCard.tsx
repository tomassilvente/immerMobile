import Image from 'next/image'
import React from 'react'

interface Props {
  img: string
}

const EventCard = ({ img }: Props): JSX.Element => {
  return (
    <div className="rounded-[10px] w-[7.2em] overflow-hidden border-[#ccc] border-[0.5px]">
      <Image
        className="w-full h-[50%]"
        src={img}
        height={0}
        width={0}
        alt="event"
      />
      <div className="flex flex-col gap-1 py-2 px-2 w-full text-xs text-[#666666]">
        <p className="text-[#333333] font-semibold">Brooks Davis...</p>
        <p>15th Dec, 2023</p>
        <p className="flex justify-between">
          <span>10:00pm</span>
          <span className="text-[#FF7711]">$98</span>
        </p>
      </div>
    </div>
  )
}

export default EventCard
