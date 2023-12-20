import Pricing from "./Pricing"
//Icons
import SvgCalendarOrange from "../../../../public/assets/Icons/CalendarOrange"
import SvgClock from "../../../../public/assets/Icons/Clock"
import SvgCalendar from "../../../../public/assets/Icons/Calendar"
import SvgClockBlack from "../../../../public/assets/Icons/ClockBlack"

type detailProps ={
    eventName: string,
    eventPrice: number,
    eventAvailability:number,
    eventDay: string,
    eventTime: string
}

export default function eventDetails({eventName, eventDay, eventPrice, eventTime, eventAvailability}:detailProps){
    return(
    <div className="grid grid-cols-4 my-12 mx-5 ">
        <div className="col-start-1 col-end-3 ">
            <h1 className="text-2xl ">{eventName} </h1>
            <div className=" my-5 flex">
                <SvgCalendar width={22} height={23}/>
                <p className="ml-3  font-light">{eventDay}</p>
            </div>
            <div className=" flex"> 
                <SvgClockBlack width={22} height={23}/>
                <p className="ml-3  font-light">{eventTime}</p>
             </div>
        </div>
        <div className="col-start-4 col-end-4 ">
            <Pricing name={eventName} price={eventPrice} availability={eventAvailability}/>
        </div>
    </div>
)}