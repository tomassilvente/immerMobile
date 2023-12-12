'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { MobileLayout } from '../../components/MobileLayout'
import Image from 'next/image'
import Events from '../../components/AttendeeProfile/Events'
import Interests from '../../components/AttendeeProfile/Interests'
import Subscriptions from '../../components/AttendeeProfile/Subscriptions'
import BackButton from '../../components/_common/buttons/BackButton'
import MoreButton from '../../components/_common/buttons/MoreButton'

const Page = (): JSX.Element => {
  const [selectedTab, setSelectedTab] = useState<number>(0)
  const auth = true
  // const [auth, setAuth] = useState<boolean>(true)

  const TABS = ['Events', 'Interests', 'Subscriptions']

  const renderTabContent = (): React.ReactNode => {
    switch (selectedTab) {
      case 0:
        return <Events />
      case 1:
        return <Interests />
      case 2:
        return <Subscriptions />
    }
  }

  return (
    <MobileLayout>
        <div className="relative flex px-[14px] gap-5 items-center py-5">
          <Link href="" className="action-button">
            <BackButton />
          </Link>
          <h1 className="font-bold text-lg">Profile</h1>
          <button className="action-button border-[0.5px] border-[#555555] p-[2px] rounded-full ml-auto">
            <MoreButton />
            <div className="dropdown hidden z-[99] absolute text-[#000] top-[0] right-5">
              <div className="mt-14 flex flex-col items-start gap-3 border-[1px] rounded shadow-2xl bg-white py-4 px-8">
                <Link href="/attendee-profile/edit">Edit Profile</Link>
                <Link href="">Password and Security</Link>
              </div>
            </div>
          </button>
        </div>
        <div>
          <div className="pb-0 px-[14px] relative flex flex-col items-center">
            <Image
              className="w-full h-full"
              src="./assets/header-img.png"
              width={0}
              height={0}
              alt="header"
            />
            <Image
              className="absolute -bottom-10 border-white border-[5px] rounded-full h-20 w-20"
              src="./assets/user-avatar.png"
              alt="avatar"
              width={0}
              height={0}
            />
          </div>
          <div className="flex flex-col gap-3 mt-10 my-3">
            <h1 className="text-lg font-semibold text-center">Harold Small</h1>
            <div className="flex px-5 items-center justify-around">
              <p className="flex flex-col items-center font-semibold gap-[2px]">
                12{' '}
                <span className="text-[#555555] font-normal text-sm">
                  Events
                </span>
              </p>
              <p className="flex flex-col items-center font-semibold gap-[2px]">
                868{' '}
                <span className="text-[#555555] font-normal text-sm">
                  Followers
                </span>
              </p>
              <p className="flex flex-col items-center font-semibold gap-[2px]">
                348{' '}
                <span className="text-[#555555] font-normal text-sm">
                  Following
                </span>
              </p>
            </div>
          </div>
        </div>
        {auth && (
          <div className="flex justify-center gap-5 py-3">
            <button className="px-4 py-2 text-white text-xs font-extrabold rounded bg-[#FF6C00]">
              Follow
            </button>
            <button className=" px-4 py-2 text-[#666] font-extrabold text-xs rounded border-[1px] border-[#ff6c00] bg-white">
              Message
            </button>
          </div>
        )}
        <div className="mt-5">
          <div className="py-3 border-y-[1px] border-[#7C7C7C] flex items-center justify-around">
            {TABS.map((tab, index) => (
              <button
                onClick={() => { setSelectedTab(index) }}
                key={index}
                className={`font-semibold py-[2px] border-b-[3px] ${selectedTab === index
                    ? 'text-[#FF6C00] border-[#FF6C00]'
                    : 'text-[#7C7C7C] border-white'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="px-[14px]">{renderTabContent()}</div>
        </div>
    </MobileLayout>
  )
}

export default Page
