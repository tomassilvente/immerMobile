'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { MobileLayout } from '../../components/MobileLayout'
import UpcomingTickets from '../../components/TicketCancellation/UpcomingTickets'
import AttendedTickets from '../../components/TicketCancellation/AttendedTickets'
import CancelledTickets from '../../components/TicketCancellation/CancelledTickets'
import BackButton from '../../components/_common/buttons/BackButton'
import SearchButton from '../../components/_common/buttons/SearchButton'

const tabs = ['Upcoming', 'Attended', 'Cancelled']

const Page = (): JSX.Element => {
  const [selectedTab, setSelectedTab] = useState<number>(0)

  return (
    <MobileLayout>
        <section>
        <div className="relative flex px-[14px] gap-5 items-center py-5">
            <Link href='' className="action-button">
                <BackButton />
            </Link>
            <h1 className="font-bold text-lg">Tickets</h1>
            <span className='ml-auto border border-[#555] p-[3px] rounded-lg'>
                <SearchButton />
            </span>
        </div>
        <div className='mt-5'>
            <div className='border-b-[1px] border-[#ddd] flex items-center justify-around'>
                {tabs.map((tab, index) => (
                    <button
                        onClick={() => { setSelectedTab(index) }}
                        key={index}
                        className={`font-medium py-3 border-b-[3px] ${selectedTab === index ? 'text-[#FF6C00] border-[#FF6C00]' : 'text-[#7C7C7C] border-white'}`}>
                            {tab}
                    </button>
                ))}
            </div>
            <div className='px-[14px] py-5'>
                {selectedTab === 0 && <UpcomingTickets />}
                {selectedTab === 1 && <AttendedTickets />}
                {selectedTab === 2 && <CancelledTickets />}
            </div>
        </div>
        </section>
    </MobileLayout>
  )
}

export default Page
