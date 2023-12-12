import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// Icons
import SvgCalendarOrange from '../../../public/assets/Icons/CalendarOrange'
import SvgClock from '../../../public/assets/Icons/Clock'
import SvgLocationOrange from '../../../public/assets/Icons/LocationOrange'
import { type CardRecommendedProps } from '../../types/home.interfaces'

export default function RecommendedCards ({
  eventDay,
  eventTime,
  eventLocation,
  eventImg
}: CardRecommendedProps): JSX.Element {
  return (
    <div className="rounded-xl shadow-xl text-sm mb-10 w-[240px] flex-none mr-6">
      <Link className="" href="/event-details/1">
        <Image
          className="mb-3 rounded-t-xl "
          src={eventImg}
          alt={'...'}
          width={300}
          height={94}
        />
        <div className="flex ml-4">
          <SvgCalendarOrange width={20} height={30} />
          <p className="my-1 ml-3 font-light">{eventDay}</p>
        </div>
        <div className="flex ml-4">
          <SvgClock width={20} height={30} />
          <p className="my-1 ml-3 font-light">{eventTime}</p>
        </div>
        <div className="flex ml-4">
          <SvgLocationOrange width={20} height={34} />
          <p className=" mb-1 ml-4 font-light">{eventLocation}</p>
        </div>
      </Link>
    </div>
  )
}
