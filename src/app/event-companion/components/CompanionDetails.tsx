import React from 'react'
import SvgCalendarOrange from '../../../../public/assets/Icons/CalendarOrange'
import SvgClock from '../../../../public/assets/Icons/Clock'

export default function CompanionDetails ({
  eventDay,
  eventTime,
  eventName,
  eventDescription,
  eventOrganizer
}: any): JSX.Element {
  return (
    <div>
      <div className=" my-7 ml-2 grid grid-cols-12 ">
        <div className=" col-start-1 col-end-6 flex">
          <SvgCalendarOrange width={25} height={25} />
          <p className="ml-2  font-light">{eventDay}</p>
        </div>
        <div className="col-start-7 col-end-12 flex">
          <SvgClock className="ml-7" width={25} height={25} />
          <p className="ml-2 font-light">{eventTime}</p>
        </div>
      </div>
      <div className="px-7 pb-7 shadow-xl">
        <h1 className="text-xl font-semibold">
          {eventName} |
          <span className="font-normal text-base"> by {eventOrganizer}</span>
        </h1>
        <p className="mt-4 font-light"> {eventDescription} </p>
      </div>
    </div>
  )
}
