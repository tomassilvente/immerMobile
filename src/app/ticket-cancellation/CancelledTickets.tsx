import React from 'react';
import TicketCard from './components/ticketCard';
import { tickets } from './components/dummyTickets';

const CancelledTickets = () => {
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
                tab='cancelled' 
            />
        ))}
    </div>
  )
}

export default CancelledTickets