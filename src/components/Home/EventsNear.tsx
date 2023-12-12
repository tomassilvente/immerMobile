import React from 'react'
import LargeCard from '../_common/components/LargeCard'
import DemoData from '../../../public/data/DemoData.json'

export default function EventsNear (): JSX.Element {
  return (
    <div className="mt-">
      <p className="text-2xl font-semibold mt-5 ml-5">Events Near You</p>
      <div className="p-5 mb-12">
        {[1, 2, 3].map((index) => (
          <LargeCard
            key={index}
            eventImg={DemoData.eventImg}
            eventOrganizer={DemoData.eventOrganizer}
            eventDay={DemoData.eventDay}
            eventTime={DemoData.eventTime}
            eventPrice={DemoData.eventPrice}
            liked={false}
          />
        ))}
      </div>
    </div>
  )
}
