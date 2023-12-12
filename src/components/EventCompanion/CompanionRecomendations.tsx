import React from 'react'
import CompanionCards from './CompanionCards'

export default function CompanionRecomendaions ({ events }: any): JSX.Element {
  return (
    <div className="pt-7 columns-3 ">
      {events.map((event: { name: string, img: string, link: string }) => (
        <div className="mt-5" key={event.name}>
          <CompanionCards
            social={event.name}
            img={event.img}
            link={event.link}
            w={140}
            h={140}
          />
        </div>
      ))}
    </div>
  )
}