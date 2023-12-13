import React from 'react'
import Image from 'next/image'
import SvgBackButtonBlack from '../../../../public/assets/Icons/BackButtonBlack'
import SvgLikeButtonBlack from '../../../../public/assets/Icons/LikeButtonBlack'
import SvgShareButtonBlack from '../../../../public/assets/Icons/shareButtonBlack'
import Link from 'next/link'

export default function ConfirmationHeader ({
  eventName,
  location,
  section,
  details
}: any): JSX.Element {
  return (
    <>
      <div className="grid grid-cols-12">
        <SvgBackButtonBlack className="col-start-1  " width={45} height={45} />
        <p className="text-center text-2xl col-start-3 col-end-10 ml-6 mt-2">
          {eventName}
        </p>
        <SvgLikeButtonBlack
          className="col-start-10 ml-6 mt-1 "
          width={75}
          height={75}
        />
        <SvgShareButtonBlack
          className="col-start-11 ml-8"
          width={50}
          height={50}
        />
      </div>
      <div className="grid grid-cols-2">
        <Image
          className="mt-12"
          src="../../../assets/stadium-b&w.png"
          width={250}
          height={250}
          alt="..."
        />
        <div className="mt-20 ml-3">
          <p className="text-lg font-semibold">{location} </p>
          <p className="my-[1px]">{section}</p>
          <p>{details}</p>
        </div>
      </div>
      <Link href="/ticket-purchase">
        <button
          type="submit"
          className="w-[30%] ml-[65%] mb-12 text-center text-lg bg-primary text-white mt-12 py-2 rounded-xl"
        >
          Change Seat
        </button>
      </Link>
    </>
  )
}
