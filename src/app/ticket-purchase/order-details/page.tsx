import React from 'react'
import Link from 'next/link'
import DemoData from '../../../../public/data/DemoData.json'
import ConfirmationDetails from '../../../components/TicketPurchase/OrderDetails/ConfirmationDetails'
import ConfirmationHeader from '../../../components/TicketPurchase/OrderDetails/ConfirmationHeader'
import QuantityCard from '../../../components/TicketPurchase/OrderDetails/QuantityCard'
import { MobileLayout } from '../../../components/MobileLayout'

export default function orderDetails (): JSX.Element {
  return (
    <MobileLayout>
    {/* <div className=" m-5 bg-white text-black sm:invisible overflow-scroll"> */}
      <ConfirmationHeader
        eventName={DemoData.eventName}
        location="Floor - Front Standing"
        section="Section B"
        details="Row AB - Second of 8 rows"
      />
      <hr />
      <ConfirmationDetails
        date={DemoData.eventDay}
        time={DemoData.eventTime}
        location={DemoData.eventLocation}
      />
      <QuantityCard price={198} />
      <p className="text-2xl mt-5 ml-2">Terms and Conditions</p>
      <p className="text-regular font-light text-[#767676] ml-2 mt-4">
        Lorem ipsum dolor sit amet consectetur. Non varius lectus pharetra ut.
        Accumsan faucibus justo sed aliquam id molestie egestas nulla elementum.
        Suspendisse scelerisque nisl lectus urna nulla massa pulvinar sem
        risus...
      </p>
      <Link href="/">
        <p className="text-center text-primary mt-4">See more</p>
      </Link>
      <Link
        href="/ticket-purchase/payment-details"
        className="w-[100%] grid text-center text-2xl bg-primary text-white mt-12  py-5 rounded-full"
      >
        Confirm Selection
      </Link>
    {/* </div> */}
    </MobileLayout>
  )
}
