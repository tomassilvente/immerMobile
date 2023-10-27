import LargeCard from "../../components/LargeCard";
import EventHeader from "../../components/EventHeader";
import DemoData from "../../../public/data/DemoData.json";
import Link from "next/link";
import SvgFilterIcon from "../../../public/assets/Icons/FilterIcon";

import NextDays from "./components/NextDays";
import { MobileLayout } from "../../components/MobileLayout";
let Days = [
  {
    day: "Sat",
    number: "22 Oct",
  },
  {
    day: "Sun",
    number: "23 Oct",
  },
  {
    day: "Mon",
    number: "24 Oct",
  },
  {
    day: "Tue",
    number: "25 Oct",
  },
  {
    day: "Wed",
    number: "26 Oct",
  },
  {
    day: "Thu",
    number: "27 Oct",
  },
  {
    day: "Fri",
    number: "28 Oct",
  },
];

interface CardDataProps {
  title: string;
  image: string;
  date: string;
  time: string;
  price: number;
}

const Discovery: React.FC = () => {
  return (
    <MobileLayout >
    {/* <div className="h-screen bg-white text-black sm:invisible overflow-scroll"> */}
      <EventHeader eventImg={DemoData.eventImg} />
        <p className="text-xl font-semibold my-3">Event Details</p>
        <div className="flex">
          <Link href="/">
            <p className="text-primary ">See Calendar</p>
          </Link>
          <button className="border-primary shadow-sm ml-[62%] flex border rounded-md">
            <p className="ml-3 mt-1 text-xs font-semibold">Filters</p>
            <SvgFilterIcon className="ml-3 mt-[3px]" height={20} width={20} />
          </button>
        </div>
        <NextDays Days={Days} />
        <div>
          {DemoData.cardData.map((data: CardDataProps) => (
            <LargeCard
              key={data.title}
              eventImg={data.image}
              eventOrganizer={data.title}
              eventDay={data.date}
              eventTime={data.time}
              eventPrice={data.price}
              liked={false}
            />
          ))}
        </div>
      
    {/* </div> */}
    </MobileLayout>
  );
};

export default Discovery;
