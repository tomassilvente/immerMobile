import React from 'react'
import Link from 'next/link'
import SvgBackButton from '../../../../../public/assets/Icons/BackButton'
import DemoData from '../../../../../public/data/DemoData.json'
import TicketCard from './TicketCard'

export default function PaymentHeader (): JSX.Element {
  return (
    <div
      className="h-[350px] p-5 place-items-end content-start"
      style={{
        backgroundImage: 'url(\'../../../../assets/Concert.png\')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '475px'
      }}
    >
      <Link href={'/ticket-purchase'}>
        <SvgBackButton className=" mr-10 " width={45} height={45} />
      </Link>
      <TicketCard
        marginTop={47}
        eventName={DemoData.eventName}
        eventDay={DemoData.eventDay}
        eventTime={DemoData.eventTime}
        eventSeat={DemoData.eventSeat}
        eventRow={DemoData.eventRow}
      />
    </div>
  )
}
