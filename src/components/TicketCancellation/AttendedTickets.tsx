import React from 'react'
import TicketCard from './TicketCard'
import { tickets } from './dummyTickets'

const AttendedTickets = (): JSX.Element => {
  return (
    <div className='flex flex-col gap-2'>
        {tickets.map((ticket) => (
            <TicketCard
            key={ticket.id}
            id={ticket.id}
            event={ticket.event}
            date={ticket.date}
            time={ticket.time}
            price={ticket.price}
            img={ticket.img}
            tab='attended' />
        ))}
    </div>
  )
}

export default AttendedTickets
