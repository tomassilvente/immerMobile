import Image from "next/image";
import Link from "next/link";

export const BottomNav = ({
	className = "",
}: {
	className?: string;
}) => {
    return (
        <nav className={`${className} sticky w-full bottom-0 bg-[#fff]`}>
                <ul className="w-full flex items-center justify-between">
                    <li>
                        <Image width={80} height={80} src="/assets/home.svg" alt="home" />
                    </li>
                    <li>
                        <Image width={80} height={80}  src="/assets/explore.svg" alt="explore" />
                    </li>
                    <li>
                        <Link href='ticket-details'>
                            <Image width={80} height={80}  src="/assets/ticket-icon.svg" alt="ticket"/>
                        </Link>
                    </li>
                    <li>
                        <Link href='/attendee-profile'>
                            <Image width={80} height={80}  src="/assets/profile.svg" alt="profile"/>
                        </Link>
                    </li>
                    <li>
                        <Image width={80} height={80}  src="/assets/hamburger.svg" alt="menu"/>
                    </li>
                </ul>
            </nav>
    )
}