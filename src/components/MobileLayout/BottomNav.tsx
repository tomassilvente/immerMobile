import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const BottomNav = ({
  className = ''
}: {
  className?: string
}): JSX.Element => {
  return (
        <nav className={`${className} shadow-[0px_-5px_5px_0px_rgba(0,0,0,0.05)] sticky w-full bottom-0 bg-[#fff]`}>
            <ul className="w-full flex items-center justify-between">
                <li>
                    <Link href={'/'}>
                        <Image width={80} height={80} src="/assets/home.svg" alt="home" />
                    </Link>
                </li>
                <li>
                    <Link href={'/content-discovery'}>
                        <Image width={80} height={80} src="/assets/explore.svg" alt="explore" />
                    </Link>
                </li>
                <li>
                    <Link href='ticket-details'>
                        <Image width={80} height={80} src="/assets/ticket-icon.svg" alt="ticket" />
                    </Link>
                </li>
                <li>
                    <Link href='/attendee-profile'>
                        <Image width={80} height={80} src="/assets/profile.svg" alt="profile" />
                    </Link>
                </li>
                <li>
                    <Image width={80} height={80} src="/assets/hamburger.svg" alt="menu" />
                </li>
            </ul>
        </nav>
  )
}
