import React from 'react'
import Link from 'next/link'
import SvgImmerIconOrange from '../../../../../../public/assets/Icons/ImmerIconOrange'
import SvgChechedIcon from '../../../../../../public/assets/Icons/CheckedIcon'

export default function Success (): JSX.Element {
  return (
    <div className="font-Inter relative max-w-[480px]  m-auto p-5">
      <div className="m-5 text-center grid content-center place-items-center">
        <SvgImmerIconOrange width={50} height={50} className="mx-[45%]" />
        <p className="text-4xl mt-8 font-semibold">Password reset</p>
        <p className="text-lg font-light text-[#767676] mt-10">
          Your password has been successfully reset.
        </p>
        <SvgChechedIcon className="mt-24 mr-1" />
        <Link
          href="/signin"
          type="submit"
          className="w-[90%] text-center text-2xl bg-primary text-white mt-28  py-5 rounded-full"
        >
          Sign In
        </Link>
      </div>
    </div>
  )
}
