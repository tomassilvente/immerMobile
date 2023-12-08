import React from 'react'
import Search from '../../components/Search'
import LargeCard from '../../components/LargeCard'
// Icons
import SvgBackVector from '../../../public/assets/Icons/BackVector'
// Data
import DemoData from '../../../public/data/DemoData.json'
import { MobileLayout } from '../../components/MobileLayout'

export default function myEvents (): JSX.Element {
  return (
    <MobileLayout>
    <div className=" mt-5">
      <div className="grid grid-cols-6">
        <SvgBackVector className="col-start-1 col-end-1 mt-7" />
        <p className="text-2xl my-5 ml-5 col-start-3 col-end-6">
          My events
        </p>
      </div>
      <Search hold={'Search for artists, venues and events'} />
      <p className="text-2xl my-5 col-start-3 col-end-6">
        Upcoming
      </p>
      <LargeCard
        eventImg={DemoData.eventImg}
        eventOrganizer={DemoData.eventOrganizer}
        eventDay={DemoData.eventDay}
        eventTime={DemoData.eventTime}
        eventPrice={DemoData.eventPrice}
        liked={true}
      />
      <hr className="my-5" />
      <p className="text-2xl my-5 col-start-3 col-end-6">
        Past Events
      </p>
      {DemoData.cardData.map((event) => (
        <LargeCard
          key={event.title}
          eventImg={event.image}
          eventOrganizer={event.title}
          eventDay={event.date}
          eventTime={event.time}
          eventPrice={event.price}
          liked={true}
        />
      ))}
    </div>
    </MobileLayout>
  )
}
