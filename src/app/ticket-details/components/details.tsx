// Data
import React from 'react'
import DemoData from '../../../../public/data/DemoData.json'
import SvgCalendar from '../../../../public/assets/Icons/Calendar'
import SvgClockBlack from '../../../../public/assets/Icons/ClockBlack'
import SvgTicket from '../../../../public/assets/Icons/Ticket'
import SvgSeat from '../../../../public/assets/Icons/Seat'

export default function Details (): JSX.Element {
  return (
        <div className="m-10">
            <p className="text-2xl my-2">{DemoData.eventName}</p>
            <span className="font-light text-[#767676]">{DemoData.eventLocation}</span>
            <div className="grid grid-cols-2 mt-5 font-light">
                <div className="flex mt-2">
                    <SvgCalendar height={25} width={20} />
                    <p className="ml-3">{DemoData.eventDay}</p>
                </div>
                <div className="flex mt-2">
                    <SvgTicket height={25} width={20} />
                    <p className="ml-4">{DemoData.eventRow}</p>
                </div>
                <div className="flex mt-2">
                    <SvgClockBlack height={25} width={20}/>
                    <p className="ml-3">{DemoData.eventTime}</p>
                </div>
                <div className="flex mt-2">
                    <SvgSeat height={25} width={20} />
                    <p className="ml-4">{DemoData.eventSeat}</p>
                </div>
            </div>
            <p className="text-lg font-light text-[#767676] mt-5">Organizer</p>
            <p className="text-xl font-light">{DemoData.eventName}</p>
            <div className="grid grid-cols-2 mt-5 font-light">
                <div>
                    <p className="text-lg font-light text-[#767676] mt-5">Full Name</p>
                    <p className="text-xl font-light">First, Last</p>
                </div>
                <div>
                    <p className="text-lg font-light text-[#767676] mt-5">Email</p>
                    <p className="text-xl font-light">last.first@gmail.com</p>
                </div>
            </div>
        </div>
  )
}
