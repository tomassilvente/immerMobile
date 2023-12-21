import React from 'react'
import { MobileLayout } from '../../components/MobileLayout'
import Link from 'next/link'
import BackButton from '../../components/_common/buttons/BackButton'
import FAQs from '../../components/Support/FAQs'
import search from './assets/magnify.svg'
import mail from './assets/mail.svg'
import chat from './assets/chat.svg'
import call from './assets/call.svg'
import comment from './assets/comment.svg'
import { Inter } from 'next/font/google'
const inter = Inter({ weight: '400', subsets: ['latin'] })
const faqs = [
  {
    title: 'What should I do if the event has been canceled?',
    desc: 'Lorem ipsum dolor sit amet consectetur. Consectetur habitant sit pellentesque accumsan et aliquam vitae arcu. Nulla eget vitae faucibus donec suspendisse.'
  },
  {
    title: 'What should I do if the event has been canceled?',
    desc: 'Lorem ipsum dolor sit amet consectetur. Consectetur habitant sit pellentesque accumsan et aliquam vitae arcu. Nulla eget vitae faucibus donec suspendisse.'
  },
  {
    title: 'What should I do if the event has been canceled?',
    desc: 'Lorem ipsum dolor sit amet consectetur. Consectetur habitant sit pellentesque accumsan et aliquam vitae arcu. Nulla eget vitae faucibus donec suspendisse.'
  },
  {
    title: 'What should I do if the event has been canceled?',
    desc: 'Lorem ipsum dolor sit amet consectetur. Consectetur habitant sit pellentesque accumsan et aliquam vitae arcu. Nulla eget vitae faucibus donec suspendisse.'
  },
  {
    title: 'What should I do if the event has been canceled?',
    desc: 'Lorem ipsum dolor sit amet consectetur. Consectetur habitant sit pellentesque accumsan et aliquam vitae arcu. Nulla eget vitae faucibus donec suspendisse.'
  },
  {
    title: 'What should I do if the event has been canceled?',
    desc: 'Lorem ipsum dolor sit amet consectetur. Consectetur habitant sit pellentesque accumsan et aliquam vitae arcu. Nulla eget vitae faucibus donec suspendisse.'
  }
]
const Page = (): JSX.Element => {
  return (
        <MobileLayout className={inter.className}>
            <div className="relative flex px-[14px] gap-5 items-center py-5">
                <Link href="" className="action-button">
                    <BackButton />
                </Link>
                <h1 className="font-bold text-xl">Support</h1>
            </div>
            <div className="mx-auto w-[90%]">
                <div className="w-full h-10 input-field my-12 rounded-full px-4 py-2.5 flex items-center">
                    <img src={search.src} alt="Magnify" className="items-center h-6 w-6"/>
                    <input type="text" className="h-8 input-field border-0 w-full" placeholder="How can we help you?"/>
                </div>
            </div>
            <div className="px-11 flex gap-4 justify-center">
                <div className="border border-primary bg-[#FFD6B8] px-3 py-5 rounded-lg flex flex-col items-center gap-2.5 cursor-pointer">
                    <img src = {mail.src} className="h-6"/>
                    <p className="px-4 font-medium text-base">
                        Send Email
                    </p>
                </div>
                <div className="border border-primary bg-[#FFD6B8] px-3 py-5 rounded-lg flex flex-col items-center gap-2.5 cursor-pointer">
                    <img src = {chat.src} className="h-6"/>
                    <p className="px-4 font-medium text-base">
                        Live Chat
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-4 m-2 p-4">
                <div className="font-semibold text-lg flex items-center justify-between p-2.5">
                    Most popular FAQs
                    <p className="text-orange-500 text-sm cursor-pointer">
                        View all
                    </p>
                </div>
                <FAQs dataset={faqs}/>
            </div>
            <div className="p-4 m-2">
                <div className="px-2">
                    <h3 className="font-bold">
                        Need More help?
                    </h3>
                    <p className="font-normal text-sm text-gray-500 ">
                        We`ll be at your disposal throughout the event for whatever you need.
                    </p>
                </div>
                <div className="p-4 flex flex-col gap-2.5">
                    <div className="flex border border-primary/25 rounded-lg bg-[#FFF0E5]/75 px-6 py-4 gap-4 items-center">
                        <div className="">
                            <img src={call.src}/>
                        </div>
                        <div className="flex-1 px-4 flex flex-col gap-4">
                            <p className="font-semibold text-lg">
                                Call Us
                            </p>
                            <p className="text-base">
                                If you need something that can`t wait, we will happy to help you!
                            </p>
                            <p className="font-medium text-sm text-primary cursor-pointer">
                                Call here
                            </p>
                        </div>
                    </div>
                    <div className="flex border border-primary/25 rounded-lg bg-[#FFF0E5]/75 px-6 py-4 gap-4 items-center">
                        <div className="">
                            <img src={comment.src}/>
                        </div>
                        <div className="flex-1 px-4 flex flex-col gap-4">
                            <p className="font-semibold text-lg">
                                Comment
                            </p>
                            <p className="text-base">
                                How could we improve Immer? Tell us in our comment form!
                            </p>
                            <p className="font-medium text-sm text-primary cursor-pointer">
                                Send Comments
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </MobileLayout>
  )
}

export default Page
