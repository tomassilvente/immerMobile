import SvgCalendar from "../../../../../public/assets/Icons/Calendar";
import SvgClockBlack from "../../../../../public/assets/Icons/ClockBlack";
import SvgSeat from "../../../../../public/assets/Icons/Seat";
import SvgTicket from "../../../../../public/assets/Icons/Ticket";

export default function TicketCard({
  eventName,
  eventDay,
  eventRow,
  eventTime,
  eventSeat,
  marginTop,
}: any) {
  return (
    <div
      className="border rounded-3xl w-[85%] p-6 ml-[6%] bg-white"
      style={{
        marginTop: `${marginTop}%`,
      }}
    >
      <p className="text-xl">{eventName}</p>
      <hr className="mt-4"/>
      <div className="grid grid-cols-2 mt-2 text-sm font-light">
        <div className="flex mt-2">
          <SvgCalendar height={19} width={20} />
          <p className="ml-3 mt-[1px]">{eventDay}</p>
        </div>
        <div className="flex mt-2 ml-4">
          <SvgTicket height={19} width={20} />
          <p className="ml-4 mt-[1px]" >{eventRow}</p>
        </div>
        <div className="flex mt-2">
          <SvgClockBlack height={19} width={20} />
          <p className="ml-3 ">{eventTime}</p>
        </div>
        <div className="flex mt-2 ml-4">
          <SvgSeat height={19} width={20} />
          <p className="ml-4 mt-[1px]">{eventSeat}</p>
        </div>
      </div>
    </div>
  );
}
