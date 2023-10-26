import LargeCard from "../../components/LargeCard";
import EventHeader from "../../components/EventHeader";
import DemoData from "../../../public/data/DemoData.json";
import Link from "next/link";
import SvgFilterIcon from "../../../public/assets/Icons/FilterIcon";

import NextDays from "./components/NextDays";
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
    <div className="h-screen bg-white text-black sm:invisible overflow-scroll">
      <EventHeader eventImg={DemoData.eventImg} />
      <div className="m-5">
        <p className="text-xl font-semibold mb-3">Event Details</p>
        <div className="grid grid-cols-6">
          <Link href="/">
            <a className="text-primary col-start-1 col-end-4">See Calendar</a>
          </Link>
          <button className="border-primary shadow-sm col-start-6 flex border rounded-md">
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
      </div>
    </div>
  );
};

export default Discovery;
