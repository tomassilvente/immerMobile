"use client";

import React, {useState} from 'react';
import Link from 'next/link';
import { MobileLayout } from '../../components/MobileLayout';
import Image from 'next/image';
import Events from './events/events';
import Interests from './Interests';
import Subscriptions from './Subscriptions';

const Page = () => {
    const [selectedTab, setSelectedTab] = useState<number>(0);
    const [auth, setAuth] = useState<boolean>(true)

    const tabs = ['Events', 'Interests', 'Subscriptions']

  return (
    <MobileLayout>
        <div>
            <div className="relative flex px-[14px] gap-5 items-center py-5">
                <Link href='' className="action-button">
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                    <path d="M13 15.947L9 11.947L13 7.94702" stroke="#555555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <rect x="0.5" y="1.44702" width="21" height="21" rx="9.5" stroke="#555555"/>
                    </svg>
                    </span> 
                </Link>
                <h1 className="font-bold text-lg">Profile</h1>
                <button className="action-button border-[0.5px] border-[#555555] p-[2px] rounded-full ml-auto">
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                        <path d="M12 9.94702C12 9.5492 12.158 9.16767 12.4393 8.88636C12.7206 8.60506 13.1022 8.44702 13.5 8.44702C13.8978 8.44702 14.2794 8.60506 14.5607 8.88636C14.842 9.16767 15 9.5492 15 9.94702C15 10.3448 14.842 10.7264 14.5607 11.0077C14.2794 11.289 13.8978 11.447 13.5 11.447C13.1022 11.447 12.7206 11.289 12.4393 11.0077C12.158 10.7264 12 10.3448 12 9.94702ZM7.5 9.94702C7.5 9.5492 7.65803 9.16767 7.93934 8.88636C8.22064 8.60506 8.60217 8.44702 9 8.44702C9.39782 8.44702 9.77935 8.60506 10.0607 8.88636C10.342 9.16767 10.5 9.5492 10.5 9.94702C10.5 10.3448 10.342 10.7264 10.0607 11.0077C9.77935 11.289 9.39782 11.447 9 11.447C8.60217 11.447 8.22064 11.289 7.93934 11.0077C7.65803 10.7264 7.5 10.3448 7.5 9.94702ZM3 9.94702C3 9.5492 3.15804 9.16767 3.43934 8.88636C3.72064 8.60506 4.10218 8.44702 4.5 8.44702C4.89782 8.44702 5.27936 8.60506 5.56066 8.88636C5.84196 9.16767 6 9.5492 6 9.94702C6 10.3448 5.84196 10.7264 5.56066 11.0077C5.27936 11.289 4.89782 11.447 4.5 11.447C4.10218 11.447 3.72064 11.289 3.43934 11.0077C3.15804 10.7264 3 10.3448 3 9.94702Z" fill="#555555"/>
                    </svg>
                    </span>
                    <div className="dropdown hidden z-[99] absolute text-[#000] top-[0] right-5">
                        <div className="mt-14 flex flex-col items-start gap-3 border-[1px] rounded shadow-2xl bg-white py-4 px-8">
                            <Link href='/attendee-profile/edit'>Edit Profile</Link>
                            <Link href=''>Password and Security</Link>
                        </div>
                    </div>
                </button>
            </div>
            <div>
                <div className='pb-0 px-[14px] relative flex flex-col items-center'>
                    <Image className='w-full h-full' src='./assets/header-img.png' width={0} height={0} alt='header' />
                    <Image className='absolute -bottom-10 border-white border-[5px] rounded-full h-20 w-20' src='./assets/user-avatar.png' alt='avatar' width={0} height={0} />
                </div>
                <div className='flex flex-col gap-3 mt-10 my-3'>
                    <h1 className='text-lg font-semibold text-center'>Harold Small</h1>
                    <div className='flex px-5 items-center justify-around'>
                        <p className='flex flex-col items-center font-semibold gap-[2px]'>12 <span className='text-[#555555] font-normal text-sm'>Events</span></p>
                        <p className='flex flex-col items-center font-semibold gap-[2px]'>868 <span className='text-[#555555] font-normal text-sm'>Followers</span></p>
                        <p className='flex flex-col items-center font-semibold gap-[2px]'>348 <span className='text-[#555555] font-normal text-sm'>Following</span></p>
                    </div>
                </div>
            </div>
            {auth && <div className='flex justify-center gap-5 py-3'>
                <button className='px-4 py-2 text-white text-xs font-extrabold rounded bg-[#FF6C00]'>Follow</button>
                <button className=' px-4 py-2 text-[#666] font-extrabold text-xs rounded border-[1px] border-[#ff6c00] bg-white'>Message</button>
            </div>}
            <div className='mt-5'>
                <div className='py-3 border-y-[1px] border-[#7C7C7C] flex items-center justify-around'>
                    {tabs.map((tab, index) => (
                        <button 
                            onClick={() => setSelectedTab(index)} 
                            key={index} 
                            className={`font-semibold py-[2px] border-b-[3px] ${selectedTab === index ?'text-[#FF6C00] border-[#FF6C00]': 'text-[#7C7C7C] border-white'}`}>
                                {tab}
                        </button>
                    ))}  
                </div>
                <div className='px-[14px]'>
                {selectedTab === 0 && <Events />}
                {selectedTab === 1 && <Interests />}
                {selectedTab === 2 && <Subscriptions />}
                </div>
               
            </div>
        </div>
    </MobileLayout>
  )
}

export default Page;