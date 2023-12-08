import React from 'react'
import Link from 'next/link'
import BackButton from '../../../common/buttons/BackButton'
import Chats from './components/Chats'
import { Inter } from 'next/font/google'

const inter = Inter({ weight: '400', subsets: ['latin'] })
const dataset = [
  {
    msg: 'Hi, John How may I assist you today?',
    byUser: false,
    time: '11:44'
  },
  {
    msg: 'General Inquiries',
    byUser: true,
    time: '11:44'
  },
  {
    msg: 'I see, can you provide me some details about your inquiries to help better assist you?',
    byUser: false,
    time: '11:44'
  }

]

const Chat = (): JSX.Element => {
  return (
        <div className={`max-w-[480px] mx-auto bg-[#FFF6EE] min-h-screen relative ${inter.className}`}>
            <div className="flex px-[14px] gap-5 items-center py-5">
                <Link href="" className="action-button">
                    <BackButton />
                </Link>
                <h1 className="font-bold text-xl">Live Chat</h1>
            </div>
            <div className="my-4 px-4  min-h-screen">
                <Chats dataset={dataset}/>
            </div>
            <div className="sticky bottom-0 w-full p-6">
                <div className="flex gap-2.5 py-2.5 flex-wrap items-center justify-center px-10">
                    <div className="border-2 border-primary px-3 py-2 rounded-lg bg-primary/30 cursor-pointer">
                        My Account
                    </div>
                    <div className="border-2 border-primary px-3 py-2 rounded-lg bg-primary/30 cursor-pointer">
                        Event Info
                    </div>
                    <div className="border-2 border-primary px-3 py-2 rounded-lg bg-primary/30 cursor-pointer">
                        Contact Info
                    </div>
                    <div className="border-2 border-primary px-3 py-2 rounded-lg bg-primary/30 cursor-pointer">
                        Q&A
                    </div>
                    <div className="border-2 border-primary px-3 py-2 rounded-lg bg-primary/30 cursor-pointer">
                        Others
                    </div>
                </div>
                <div className="p-2 ">
                    <div className="p-2 rounded-full bg-white flex gap-2 border border-gray-500">
                        <input className="flex-1 h-8 px-2 outline-none" type="text" placeholder="Type your question" />
                        <div className="h-8 w-8 rounded-full flex items-center justify-center cursor-pointer">
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_9579_2452)">
                            <path d="M9.99935 18.464C14.6017 18.464 18.3327 14.7331 18.3327 10.1307C18.3327 5.52832 14.6017 1.79736 9.99935 1.79736C5.39698 1.79736 1.66602 5.52832 1.66602 10.1307C1.66602 14.7331 5.39698 18.464 9.99935 18.464Z" stroke="#D9D9D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M6.66602 11.7974C6.66602 11.7974 7.91602 13.464 9.99935 13.464C12.0827 13.464 13.3327 11.7974 13.3327 11.7974" stroke="#D9D9D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7.5 7.63086H7.50833" stroke="#D9D9D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12.5 7.63086H12.5083" stroke="#D9D9D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_9579_2452">
                            <rect width="20" height="20" fill="white" transform="translate(0 0.130859)"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </div>
                        <div className="h-8 w-8 rounded-full bg-primary cursor-pointer">
                        <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_9579_2459)">
                            <path d="M25.9267 14.8918L9.9399 22.3904L12.9637 14.7603L10.0953 7.07053L25.9267 14.8918Z" fill="white"/>
                            <path d="M18.1793 14.8138L12.9631 14.7608" stroke="#FFD6B8" strokeLinecap="round" strokeLinejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_9579_2459">
                            <rect width="20" height="20" fill="white" transform="translate(14.2852 0.630859) rotate(45.5812)"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Chat
