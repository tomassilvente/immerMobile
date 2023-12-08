import React from 'react'
import NewEventsCards from './NewEventsCards'
import DemoData from '../../../../public/data/DemoData.json'

export default function NewEvents (): JSX.Element {
  const renderNewEventsCards = (): JSX.Element => {
    return (
      <>
        {Array.from({ length: 4 }).map((_, index) => (
          <NewEventsCards
            key={index}
            eventImg={DemoData.companionImg}
            eventOrganizer={DemoData.eventOrganizer}
            eventDay={DemoData.eventDay}
            eventLocation={DemoData.eventLocation}
            eventTime={'10.00pm'}
            eventPrice={DemoData.eventPrice}
          />
        ))}
      </>
    )
  }

  return (
    <div className="mt-16">
      <p className="text-2xl font-semibold mt-5 ml-5">New Events</p>
      <div className="flex overflow-y-scroll p-5">{renderNewEventsCards()}</div>
    </div>
  )
}
