import Image from 'next/image'
import React from 'react'
import EventCard from './eventCard'
import AttendedEventCard from './AttendedEventCard'


const Events = () => {
  return (
    <div>
        <div className='text-[#333] my-2 flex justify-between'>
            <h1 className='text-lg'>Upcoming Events</h1>
            <p className='underline text-sm'>see all</p>
        </div>
        <div className='max-w-[95vw] overflow-x-auto'>
            <div className='w-[fit-content] overflow-hidden my-2 flex gap-2'>
                <EventCard img='./assets/image-event.png' />
                <EventCard img='./assets/image-event2.png' />
                <EventCard img='./assets/image-event3.png' />
                <EventCard img='./assets/image-event3.png' />
            </div>
        </div>
        <div className='text-[#333] my-2 flex justify-between'>
            <h1 className='text-lg'>Attended Events</h1>
            <p className='underline text-sm'>see all</p>
        </div>
        <div className='flex flex-col gap-2'>
            <AttendedEventCard />
            <AttendedEventCard />
        </div>
    </div>
  )
}

export default Events