import React from 'react'
import EventCard from './EventCard'
import AttendedEventCard from './AttendedEventCard'

const Events = (): JSX.Element => {
  return (
    <div>
      <div className="text-[#333] my-2 flex justify-between">
        <h1 className="text-lg">Upcoming Events</h1>
        <p className="underline text-sm">see all</p>
      </div>
      <div className="max-w-[95vw] overflow-x-auto">
        <div className="w-[fit-content] overflow-hidden my-2 flex gap-2">
          {[1, 2, 3].map((index) => (
            <EventCard key={index} img={`./assets/image-event${index}.png`} />
          ))}
        </div>
      </div>
      <div className="text-[#333] my-2 flex justify-between">
        <h1 className="text-lg">Attended Events</h1>
        <p className="underline text-sm">see all</p>
      </div>
      <div className="flex flex-col gap-2">
        {[1, 2].map((index) => (
          <AttendedEventCard key={index} />
        ))}
      </div>
    </div>
  )
}

export default Events
