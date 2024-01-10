import Image from "next/image";
import Link from "next/link";

import Logo from "../../../../public/assets/immer logo_orange.png";
import Event from "../../../../public/assets/ticket-icon.svg";
import Home from "../../../../public/assets/home.svg";
import Explore from "../../../../public/assets/explore.svg";
import Order from "../../../../public/assets/orders.svg";
import More from "../../../../public/assets/hamburger.svg";
import Profile from "../../../../public/assets/profile.svg";
import Message from "../../../../public/assets/message.svg";

export const SideNavbarAttendee = ({
  className = "",
}: {
  className?: string;
}): JSX.Element => {
  return (
    <nav
      className={`${className} shadow-[0px_-5px_5px_0px_rgba(0,0,0,0.05)] flex-col bg-[#fff] h-full fixed left-0`}
    >
      <Link
        href="/"
        className="flex flex-row space-x-3 items-center justify-center md:justify-start md:px-6 border-b border-zinc-200 h-12 w-full"
      >
        <span className="font-bold text-xl hidden md:flex">
          <Image
            className="p-4"
            src={Logo}
            width={150}
            height={80}
            alt="Immer Logo"
          />
        </span>
      </Link>
      <ul className="flex flex-col items-start justify-start h-full">
        <li>
          <Link href={"/"}>
            <div className="flex items-center mr-4">
              <Image width={80} height={80} src={Home} alt="home" />
              <h2 className="font-semibold">Home</h2>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/Event-details">
            <div className="flex items-center mr-4">
              <Image width={80} height={80} src={Event} alt="ticket" />
              <h2 className="font-semibold">Event</h2>
            </div>
          </Link>
        </li>
        <li>
          <Link href={"/content-discovery"}>
            <div className="flex items-center mr-4">
              <Image width={80} height={80} src={Explore} alt="explore" />
              <h2 className="font-semibold">Explore</h2>
            </div>
          </Link>
        </li>
        <li>
          <Link href={"/Messages"}>
            <div className="flex items-center mr-4">
              <Image width={80} height={80} src={Message} alt="messages" />
              <h2 className="font-semibold">Messages</h2>
            </div>
          </Link>
        </li>
        <li className="flex flex-col items-center">
          <Link href={"/Orders"}>
            <div className="flex items-center mr-4">
              <Image width={80} height={80} src={Order} alt="orders" />
              <h2 className="font-semibold">Orders</h2>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/attendee-profile">
            <div className="flex items-center mr-4">
              <Image width={80} height={80} src={Profile} alt="profile" />
              <h2 className="font-semibold">Profile</h2>
            </div>
          </Link>
        </li>
        <li className="mt-auto">
          <div className="flex items-center ">
            <Image width={80} height={80} src={More} alt="menu" />
            <h2 className="font-semibold">More</h2>
          </div>
        </li>
      </ul>
    </nav>
  );
};
