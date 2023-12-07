import React from 'react'
import Link from 'next/link'
import SvgWarningIconBig from '../../../../public/assets/Icons/WarningIconBig'

export default function Feed ({
  buttonText,
  title,
  title2,
  isFeedOpen,
  setFeedClose,
  link
}: any): JSX.Element {
  return (
    <div
      className={'bg-[#000000d8] bottom-0 h-[100vh] left-0 fixed right-0 top-0 w-[100%] z-10'}
      style={{
        alignItems: isFeedOpen ? 'center' : '',
        display: isFeedOpen ? 'flex' : 'none'
      }}
    >
      <div className="bg-white grid content-center place-items-center m-14 p-10 mx-20 rounded-[40px]">
        <SvgWarningIconBig />
        <p className="text-3xl mt-16 font-semibold">{title}</p>
        <p className="font-light mt-16">{title2}</p>
        <button
          onClick={setFeedClose}
          className="w-[100%] text-center text-2xl bg-primary text-white mt-24 py-5 rounded-3xl"
        >
          {buttonText}
        </button>
        {link
          ? (
          <Link
            className="text-primary font-semibold mt-12 mb-5"
            href="/signin"
          >
            Sign In
          </Link>
            )
          : (
              ''
            )}
      </div>
    </div>
  )
}
