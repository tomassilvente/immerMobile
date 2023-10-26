import SvgCalendarOrange from "../../../../../public/assets/Icons/CalendarOrange";
import SvgClock from "../../../../../public/assets/Icons/Clock";
import SvgLocationOrange from "../../../../../public/assets/Icons/LocationOrange";

export default function ConfirmationDetails({ date, time, location }: any) {
  return (
    <div>
      <p className="text-xl font-semibold mt-10">Event Details</p>
      <div className="font-light text-lg">
        <div className="flex my-5 ml-3">
          <SvgCalendarOrange className="mr-3" width={24} height={26} />
          {date}
        </div>
        <div className="flex my-5 ml-3">
          <SvgClock className="mr-3" width={24} height={26} />
          {time}
        </div>
        <div className="flex my-5 ml-3">
          <SvgLocationOrange className="mr-3" width={24} height={26} />
          {location}
        </div>
      </div>
    </div>
  );
}
