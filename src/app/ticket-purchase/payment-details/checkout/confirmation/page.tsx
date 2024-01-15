import React from "react";
import TicketCard from "../../../../../components/TicketPurchase/PaymentDetails/TicketCard";
import SvgSuccessIcon from "../../../../../../public/assets/Icons/SuccessIcon";
import DemoData from "../../../../../../public/data/DemoData.json";
import Link from "next/link";
import { MobileLayout } from "../../../../../components/MobileLayout";

export default function Confirmation(): JSX.Element {
  return (
    <MobileLayout>
      <div className="text-center pt-5">
        <p className="text-2xl ">Payment Confirmed </p>
        <p className=" font-light mt-2">Booking ID #2126GHC</p>
        <SvgSuccessIcon className="ml-[29%] mt-[125px] mb-20" />
        <p className="text-2xl">Thank you for your purchase!</p>
        <TicketCard
          marginTop={4}
          eventName={DemoData.eventName}
          eventDay={DemoData.eventDay}
          eventTime={DemoData.eventTime}
          eventSeat={DemoData.eventSeat}
          eventRow={DemoData.eventRow}
        />

        <Link href="/ticket-details">
          <p className="mt-5 text-lg text-primary">View Ticket</p>
        </Link>
        <Link href="/">
          <button
            type="submit"
            className="w-[100%] grid text-center text-2xl bg-primary text-white mt-12 mb-10 py-5 rounded-full"
          >
            Place Order
          </button>
        </Link>
      </div>
    </MobileLayout>
  );
}
