import React from 'react'
import LargeCard from '../../components/_common/components/LargeCard'
import EventHeader from '../../components/_common/components/EventHeader'
import DemoData from '../../../public/data/DemoData.json'
import Link from 'next/link'
import SvgFilterIcon from '../../../public/assets/Icons/FilterIcon'
import { type CardDataProps, Days } from '../../types/discovery.interfaces'
import NextDays from '../../components/Discovery/NextDays'
import { MobileLayout } from '../../components/MobileLayout'

const Discovery: React.FC = () => {
  return (
    <MobileLayout>
      <EventHeader eventImg={DemoData.eventImg} />
      <p className="text-xl font-semibold my-3">Event Details</p>
      <div className="flex">
        <Link href="/">
          <p className="text-primary ">See Calendar</p>
        </Link>
        <button className="border-primary shadow-sm ml-[62%] flex border rounded-md">
          <p className="ml-3 mt-1 text-xs font-semibold">Filters</p>
          <SvgFilterIcon className="ml-3 mt-[3px]" height={20} width={20} />
        </button>
      </div>
      <NextDays Days={Days} />
      <div>
        {DemoData.cardData.map((data: CardDataProps) => (
          <LargeCard
            key={data.title}
            eventImg={data.image}
            eventOrganizer={data.title}
            eventDay={data.date}
            eventTime={data.time}
            eventPrice={data.price}
            liked={false}
          />
        ))}
      </div>
    </MobileLayout>
  )
}

export default Discovery
