import Image from "next/image";
import SvgPerson from "../../../public/assets/Icons/PersonIcon";
import SvgClock from "../../../public/assets/Icons/Clock";
import SvgLocationOrange from "../../../public/assets/Icons/LocationOrange";
import SvgEditButton from "../../../public/assets/Icons/EditButton";

type EventCardProps={
    name: string,
    pic: string | null, 
    ticketsSold: number | null,
    totalTickets: number,
    people: number | null,
    date: string | null,
    place: string | null,
    time: string | null,
    price: number | null,
    publishment: string
}

export default function EventCard ({name, pic, ticketsSold, totalTickets, people, date, place, time, price, publishment}:EventCardProps): JSX.Element {
    return (
        <div className="bg-white flex rounded-xl p-5 m-5 h-[150px]">
            <input className="mt-10 ml-2 w-[3%]" type="checkbox" />
            <p className="w-[4%] mr-[3%] text-center font-semibold text-primary mt-7">{date}</p>
            <Image className="rounded-lg h-[100px] w-[8%] mt-2" src='https://wololosound.com/wp-content/uploads/Tomorrowland-2023-mainstage-1.jpeg' alt='tomorrowland' height={100} width={100}/>
            <div className="w-[25%] ml-5">
               <div className="flex mt-2">
                    <p className="font-semibold">{name}</p>
                    {
                        people
                        ? <div className="flex mt-1 ml-2">
                            <SvgPerson className="mt-1"/>
                            <p className="text-sm ml-1">{people}</p>
                        </div>
                        : ''
                    }
                </div>
                <div className="flex my-3">
                    <SvgClock height={20} width={20} className="mt-[2px]"/>
                    <p className="ml-3 font-light text-gray-500">{time}</p>
                </div> 
                <div className="flex ">
                    <SvgLocationOrange height={20} width={20} className="mt-[2px]"/>
                    <p className="ml-3 font-light text-gray-500">{place}</p>
                </div> 
            </div>
            <div className="w-[17%] mt-8">
                <p className="font-light ml-[5%]">{ticketsSold} / {totalTickets}</p>
                <div className="h-[4px] mt-2 w-[75%] bg-slate-200 rounded-full "></div>
            </div>
            <div className="w-[13%] ml-[4%]">
                <p className="ml-[5%] text-gray-400 mt-10">${price}</p>
            </div>
            <div className="w-[17%]">
                <p className={`font-semibold mt-10 ${publishment === 'Unpublished' ? 'text-red-600' :publishment == 'Published' ? 'text-green-800' : 'text-orange-500'}`}>{publishment}</p>
            </div>
            <div className="w-[2%] mt-10">
                <SvgEditButton />
            </div>
        </div>
)}