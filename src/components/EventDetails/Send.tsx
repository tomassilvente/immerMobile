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
                className="rounded-full max-h-[45px]"
                src={props.profilePic}
                alt="Profile Pic"
                width={45}
                height={40}
                priority
            />
            <p className="text-black text-base ml-4">{props.name}</p>
        </div>
        <button className='bg-[#FF6C00] rounded-[4px] py-[8px] px-[16px] text-xs'>Send</button>
    </div>
  )
}
