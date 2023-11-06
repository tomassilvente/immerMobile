import Link from "next/link";

import { MobileLayout } from "../../../../components/MobileLayout";

import SvgSuccessIcon from "../../../../../public/assets/Icons/SuccessIcon";
import SvgCalendar from "../../../../../public/assets/Icons/Calendar";
import SvgClockBlack from "../../../../../public/assets/Icons/ClockBlack";

import DemoData from "../../../../../public/data/DemoData.json";

export default function confirmation() {
  return (
    <MobileLayout>
    <div className="text-center pt-5">
      <p className="text-2xl ">Payment Confirmed</p>
      <p className=" font-light mt-2">Booking ID #2126GHC</p>
      <SvgSuccessIcon className="ml-[29%] mt-[50px] mb-20" />
      <p className="text-2xl">Thank you for your purchase!</p>
      <p className="mt-4 font-light text-gray-500">Invoice sent to your email</p>
        <div className="border text-start rounded-3xl shadow-xl w-[85%] p-6 ml-[6%] bg-white mt-10"> 
        <p className="text-xl">{DemoData.eventName}</p>
        <p className="font-light text-lg my-2"> {DemoData.eventCompanionName}</p>
        <hr />
        <div className="flex mt-2">
          <SvgCalendar height={19} width={20} />
          <p className="ml-3 text-sm font-light mt-[1px]">Valid for 3 months</p>
        </div>
        <div className="flex mt-2">
          <SvgClockBlack height={19} width={20} />
          <p className="ml-3 text-sm font-light mt-[1px]">58:30</p>
        </div>
        </div>
        <Link href="/content-discovery/content">
        <button
          className="w-[100%] grid text-center text-2xl bg-primary text-white mt-12 mb-10 py-5 rounded-full"
        >
          Watch
        </button>
      </Link>
      <Link href="/content-discovery">
        <p className="mt-5 text-lg text-primary">Explore more events</p>
      </Link>
      
    </div>
    </MobileLayout>
  );
}
