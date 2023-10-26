"use client";
import React, {useState} from 'react';
import Link from 'next/link';
import { MobileLayout } from '../../components/MobileLayout';
import UpcomingTickets from './UpcomingTickets';
import AttendedTickets from './AttendedTickets';
import CancelledTickets from './CancelledTickets';

const tabs = ['Upcoming', 'Attended', 'Cancelled'];

const Page = () => {
    const [selectedTab, setSelectedTab] = useState<number>(0);

  return (
    <MobileLayout>
        <section>
        <div className="relative flex px-[14px] gap-5 items-center py-5">
            <Link href='' className="action-button">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                        <path d="M13 15.947L9 11.947L13 7.94702" stroke="#555555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <rect x="0.5" y="1.44702" width="21" height="21" rx="9.5" stroke="#555555"/>
                    </svg>
                </span> 
            </Link>
            <h1 className="font-bold text-lg">Tickets</h1>
            <span className='ml-auto border border-[#555] p-[3px] rounded-lg'>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
            <path d="M6.91667 11.0833C9.494 11.0833 11.5833 8.994 11.5833 6.41667C11.5833 3.83934 9.494 1.75 6.91667 1.75C4.33934 1.75 2.25 3.83934 2.25 6.41667C2.25 8.994 4.33934 11.0833 6.91667 11.0833Z" stroke="#555555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.7504 12.25L10.2129 9.71249" stroke="#555555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </span>
        </div>
        <div className='mt-5'>
            <div className='border-b-[1px] border-[#ddd] flex items-center justify-around'>
                {tabs.map((tab, index) => (
                    <button 
                        onClick={() => setSelectedTab(index)} 
                        key={index} 
                        className={`font-medium py-3 border-b-[3px] ${selectedTab === index ?'text-[#FF6C00] border-[#FF6C00]': 'text-[#7C7C7C] border-white'}`}>
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