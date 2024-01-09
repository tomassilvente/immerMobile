import React from 'react'
import StreamCards from './StreamCards'
import VideoCards from './VideoCards'
import EventOptions from './eventOptions'

export default function Streams ({ videoCards, eventCards }: any): JSX.Element {
  return (
    <>
        <div className="flex my-4 overflow-x-scroll">
        {videoCards.map((card: any) => (
            <VideoCards key={card.id} image={card.image} title={card.title} views={card.views} days={card.days} />
        ))}
        </div>
        <EventOptions />
        <div className="flex mt-4 overflow-x-scroll">
                {eventCards.map((card: any) => (
                    <StreamCards key={card.id} userImage="../assets/subs1.png" type={card.location} image={card.image} title={card.title} price={card.price} />
                ))}
        </div>
    </>
  )
}
