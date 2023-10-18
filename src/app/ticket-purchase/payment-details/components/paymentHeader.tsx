import Link from "next/link";
import SvgBackButton from "../../../../../public/assets/Icons/BackButton";
import SvgCalendar from "../../../../../public/assets/Icons/Calendar";
import SvgClockBlack from "../../../../../public/assets/Icons/ClockBlack";
import SvgSeat from "../../../../../public/assets/Icons/Seat";
import SvgTicket from "../../../../../public/assets/Icons/Ticket";

import DemoData from "../../../../../public/data/DemoData.json"
import TicketCard from "./TicketCard";

export default function PaymentHeader(){
    return(
        <div className="h-[40%] p-5 place-items-end content-start"
                style={{
                    backgroundImage: `url('../../../../assets/Concert.png')`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}>
                    <Link href={'/ticket-purchase'}><SvgBackButton className=" mr-10 " width={45} height={45}/></Link>
                    <TicketCard  marginTop={250} eventName={DemoData.eventName} eventDay={DemoData.eventDay} eventTime={DemoData.eventTime} eventSeat={DemoData.eventSeat} eventRow={DemoData.eventRow}/>
            </div>
    )
}