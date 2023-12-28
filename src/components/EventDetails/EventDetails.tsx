import React from 'react'
import Pricing from './Pricing'
<<<<<<< HEAD
import SvgCalendarOrange from '../../../public/assets/Icons/CalendarOrange'
import SvgClock from '../../../public/assets/Icons/Clock'
import { type detailProps } from '../../types/event.details'

export default function eventDetails ({ eventName, eventDay, eventPrice, eventTime, eventAvailability }: detailProps): JSX.Element {
  return (
    <div className="grid grid-cols-4 my-12 mx-5">
        <div className="col-start-1 col-end-3 ">
            <h1 className="text-2xl ">{eventName} </h1>
            <div className=" my-5 flex">
                <SvgCalendarOrange width={24} height={26}/>
                <p className="ml-3 text-lg font-light">{eventDay}</p>
            </div>
            <div className=" flex">
                <SvgClock width={24} height={28}/>
                <p className="ml-3 text-lg font-light">{eventTime}</p>
             </div>
        </div>
        <div className="col-start-4 col-end-4 ">
            <Pricing name={eventName} price={eventPrice} availability={eventAvailability}/>
        </div>
    </div>
=======
import { type detailProps } from '../../types/event.details'
import SvgCalendar from '../../../public/assets/Icons/Calendar'
import SvgClockBlack from '../../../public/assets/Icons/ClockBlack'

export default function eventDetails ({ eventName, eventDay, eventPrice, eventTime, eventAvailability }: detailProps): JSX.Element {
  return (
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
>>>>>>> pay-per-view
  )
}
