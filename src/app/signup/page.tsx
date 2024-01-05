/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Link from 'next/link'
// Icons
import SvgAppleLogo from '../../../public/assets/Icons/AppleLogo'
import SvgImmerIconOrange from '../../../public/assets/Icons/ImmerIconOrange'
import SvgOrLine from '../../../public/assets/Icons/OrLine'
import SvgGoogleLogo from '../../../public/assets/Icons/GoogleLogo'
import SvgFacebookLogo from '../../../public/assets/Icons/FacebookLogo'
import SvgMailLogo from '../../../public/assets/Icons/MailLogo'

export default function SignUp (): JSX.Element {
  return (
    <div className="font-Inter relative max-w-[480px] m-auto p-5">
    <div className="m-5 text-center">
      <SvgImmerIconOrange width={50} height={50} className="mx-[45%]" />
      <p className="text-4xl mt-8 font-semibold">Welcome to Immer!</p>
      <p className="text-lg font-light text-[#767676] mt-3">
        Don't miss the opportunity to be part of the entertainment revolution.
      </p>
      <Link
        className="grid grid-cols-6 content-center place-items-center text-lg mt-16 mx-8 border py-4 border-black rounded-full"
        href="/"
      >
        <div className="flex col-start-2 col-end-6">
          <SvgAppleLogo height={35} width={35} className="mt-1" />
          <p className="mt-[5px]">Sign Up with Apple</p>
        </div>
      </Link>
      <Link
        className="grid grid-cols-6 content-center place-items-center text-lg mt-4 mx-8 border py-4 border-black rounded-full"
        href="/"
      >
        <div className="flex col-start-2 col-end-6">
          <SvgGoogleLogo height={35} width={35} className="mt-1" />
          <p className="mt-[4px]">Sign Up with Google</p>
        </div>
      </Link>
      <Link
        className="grid grid-cols-6 content-center place-items-center text-lg mt-4 mx-8 border py-4 border-black rounded-full"
        href="/"
      >
        <div className="flex col-start-2 col-end-6">
          <SvgFacebookLogo height={35} width={35} className="mt-1" />
          <p className="mt-[4px]">Sign Up with Facebook</p>
        </div>
      </Link>
      <Link
        className="grid grid-cols-6 content-center place-items-center text-lg mt-4 mx-8 border py-3 border-black rounded-full"
        href="/signup/create"
      >
        <div className="flex col-start-2 col-end-6">
          <SvgMailLogo height={35} width={35} className="mt-2" />
          <p className="mt-[4px]">Sign Up with Email</p>
        </div>
      </Link>
      <SvgOrLine className="mt-10" />
      <Link
        style={{ position: 'sticky' }}
        href="/signin/email"
        className="grid text-center text-2xl bg-primary text-white mt-12 mx-8 py-5 mb-16 rounded-full"
      >
        Sign In with my Account
      </Link>
      <p className="text-sm font-light text-[#767676] mt-10">
        By continuing, you agree to Immer Terms of Service and Privacy Policy.
      </p>
    </div>
    </div>
  )
}
