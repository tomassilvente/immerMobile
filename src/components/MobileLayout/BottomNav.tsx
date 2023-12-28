import Image from "next/image";
import Link from "next/link";
import ProfileIconSVG from "../../../public/assets/Icons/ProfileIcon";

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
<<<<<<< HEAD
                        <Image width={80} height={80} src="/assets/explore.svg" alt="explore" />
=======
                        <Link href={'/content-discovery'}>
                            <Image width={80} height={80} src="/assets/explore.svg" alt="explore" />
                        </Link>
>>>>>>> pay-per-view
                    </li>
                    <li>
                        <Link href='ticket-details'>
                            <Image width={80} height={80} src="/assets/ticket-icon.svg" alt="ticket"/>
                        </Link>
                    </li>
                    <li>
                        <Link href='/attendee-profile'>
<<<<<<< HEAD
                            <ProfileIconSVG />
=======
                        <Image width={80} height={80}  src="/assets/profile.svg" alt="profile"/>
>>>>>>> pay-per-view
                        </Link>
                    </li>
                    <li>
                        <Image width={80} height={80} src="/assets/hamburger.svg" alt="menu"/>
                    </li>
                </ul>
            </nav>
  )
}
