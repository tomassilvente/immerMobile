import TicketCard from "../../components/TicketCard";
import SvgSuccessIcon from "../../../../../../public/assets/Icons/SuccessIcon";

import DemoData from "../../../../../../public/data/DemoData.json"
import Link from "next/link";

export default function confirmation(){
    return(
        <div className="bg-white text-center m-10 text-black sm:invisible overflow-scroll">
            <p className="text-2xl ">Payment Confirmed</p>
            <p className=" font-light mt-2">Booking ID #2126GHC</p>
            <SvgSuccessIcon className="ml-[33%] mt-[125px] mb-20"/>
            <p className="text-2xl">Thank you for your purchase!</p>
            <TicketCard marginTop={50} eventName={DemoData.eventName} eventDay={DemoData.eventDay} eventTime={DemoData.eventTime} eventSeat={DemoData.eventSeat} eventRow={DemoData.eventRow}/>
            <Link href='/ticket-details'><p className="mt-5 text-lg text-primary">View Ticket</p></Link>
            <Link href='/'>
                <button
                            type='submit'
                            className="w-[100%] grid text-center text-2xl bg-primary text-white mt-12 mb-10 py-5 rounded-full" 
                            >
                            Place Order
                </button>
            </Link>
        </div>
    )
}