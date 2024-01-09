import React from 'react'
import Link from 'next/link'
import SvgImmerIconOrange from '../../../../../public/assets/Icons/ImmerIconOrange'
import { MobileLayout } from '../../../../components/MobileLayout'
import SvgInboxCheck from '../../../../../public/assets/Icons/InboxCheck'

export default function download (): JSX.Element {
  return (
        <MobileLayout>
            <div className="text-center m-5 content-center place-items-center">
                <SvgImmerIconOrange width={50} height={50} className="mx-[45%]" />
                <p className="text-4xl mt-8 font-semibold">Download Completed</p>
                <p className="text-lg font-light text-[#767676] mt-10">
                The content has been successfully downloaded
                </p>
                <SvgInboxCheck className="mt-20 ml-[20%]" />
                <Link href="/content-discovery/content">
                    <button
                    className="w-[100%] grid text-center text-2xl bg-primary text-white  mb-10 py-5 rounded-full mt-32"
                    >
                    Watch
                    </button>
                </Link>
                <Link className="text-primary font-semibold mt-52" href="/content-discovery">
                    Back to Content Discovery.
                </Link>
            </div>
        </MobileLayout>
  )
}
