'use client'
import React from 'react'
import Image from 'next/image'
import SvgCalendarOrange from '../../../../public/assets/Icons/CalendarOrange'
import SvgClock from '../../../../public/assets/Icons/Clock'
import SvgMoreButton from '../../../../public/assets/Icons/MoreButton'
import SvgLikeHeart from '../../../../public/assets/Icons/LikeHeart'
import { type CardProps } from '../../../types/common.interfaces'
import Link from 'next/link'

export default function EventsNearCards ({ eventDay, eventOrganizer, eventTime, eventImg, eventPrice, liked = false }: CardProps): JSX.Element {
  // const [liked, setLiked] = useState(true)

  // function likeButton(){
  //     setLiked(!liked)
  // }

  return (
    <Link href='/event-details'>
    <div className="px-5 py-3 mt-5 grid grid-cols-12 bg-[#ffbb7720] border border-[#ff80004b] rounded-lg">
        <Image className="col-start-1 col-end-4 h-[115px]  rounded-xl " src={eventImg} alt={'...'} width={130} height={100}/>
        <div className="col-start-5 col-end-11">
            <p className="text-lg col-start-1 col-end-10">{eventOrganizer} Live</p>
            <div className="flex my-1">
                <SvgCalendarOrange className="mt-1" width={15} height={15}/>
                <p className="font-light text-[#767676] ml-2">{eventDay}</p>
            </div>
            <div className="flex">
                <SvgClock className="mt-1" width={15} height={15}/>
                <p className="font-light text-[#767676] ml-2">{eventTime}</p>
            </div>
            <p className="mt-2 text-primary font-semibold">Price: ${eventPrice}</p>
        </div>
        <SvgLikeHeart className="col-start-11 mt-[90px] ml-[48px]"
        width={25} height={25}
        // onClick={likeButton}
        style={{
          display:
                liked
                  ? 'flex'
                  : 'none'
        }}
        />
        <SvgMoreButton className="col-start-12 ml-2" width={25} height={25}/>
    </div>
</Link>
  )
}
