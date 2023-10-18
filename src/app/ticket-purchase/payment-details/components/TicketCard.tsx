import SvgCalendar from "../../../../../public/assets/Icons/Calendar";
import SvgClockBlack from "../../../../../public/assets/Icons/ClockBlack";
import SvgSeat from "../../../../../public/assets/Icons/Seat";
import SvgTicket from "../../../../../public/assets/Icons/Ticket";


export default function TicketCard({eventName, eventDay, eventRow, eventTime, eventSeat, marginTop}:any){
return(
    <div className="border rounded-3xl w-[75%]  p-6 ml-[12%] bg-white"
        style={{
            marginTop: `${marginTop}%`
        }} 
        >
                        <p className="text-xl">{eventName}</p>
                        <div className="grid grid-cols-2 mt-5 font-light">
                            <div className="flex mt-2"> 
                                <SvgCalendar height={25} width={20} />
                                <p className="ml-3">{eventDay}</p>
                            </div>
                            <div className="flex mt-2"> 
                                <SvgTicket height={25} width={20} />
                                <p className="ml-4">{eventRow}</p>
                            </div>
                            <div className="flex mt-2"> 
                                <SvgClockBlack height={25} width={20}/>
                                <p className="ml-3">{eventTime}</p>
                            </div>
                            <div className="flex mt-2">
                                <SvgSeat height={25} width={20} />
                                <p className="ml-4">{eventSeat}</p>
                            </div>
                        </div>
                    </div>
)    
}