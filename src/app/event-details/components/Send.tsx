'use client'
import Image from 'next/image'
import React from 'react'

interface sendDetails {
  profilePic: string
  name: string
}

export default function send (props: sendDetails): JSX.Element {
  return (
    <div className='flex justify-between mb-5 w-[21rem] mx-auto'>
        <div className='flex items-center justify-between '>
            <Image
                className="rounded-[20px] pr-4"
                src={props.profilePic}
                alt="Profile Pic"
                width={46}
                height={46}
                priority
            />
            <p className="text-black text-base">{props.name}</p>
        </div>
        <button className='bg-[#FF6C00] rounded-[4px] py-[8px] px-[16px] text-xs'>Send</button>
    </div>
  )
}
