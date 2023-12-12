import React from 'react'
import TicketCard from './TicketCard'
import { tickets } from './dummyTickets'

const UpcomingTickets = (): JSX.Element => {
  return (
    <div className='flex flex-col gap-2'>
        {tickets.map((ticket) => (
            <TicketCard
                id={ticket.id}
                key={ticket.id}
                event={ticket.event}
                date={ticket.date}
                time={ticket.time}
                price={ticket.price}
                img={ticket.img}
                tab='upcoming'
            />
        ))}
    </div>
  )
}

export default UpcomingTickets
