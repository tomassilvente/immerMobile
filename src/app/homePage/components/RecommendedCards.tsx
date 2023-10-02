import Link from "next/link";
import Image from "next/image";

type CardProps ={
    eventDay: string,
    eventTime: string,
    eventLocation: string,
    eventImg: string
}

export default function RecommendedCards({eventDay, eventTime, eventLocation, eventImg}:CardProps){
return(
    <div className="rounded-xl shadow-xl mb-10 w-[300px] flex-none mr-6">
            <Link className="" href='/'>
            <Image className="mb-3 rounded-t-xl " src={eventImg} alt={'...'}  width={300} height={94}/>
            <div className="flex ml-4">
                <Image src='../../assets/calendar-orange.svg' alt={'...'} width={20} height={20}/>
                <p className="my-1 ml-3 font-light">{eventDay}</p>
            </div>
            <div className="flex ml-4">
                <Image src='../../assets/clock.svg' alt={'...'} width={20} height={20}/>
                <p className="my-1 ml-3 font-light">{eventTime}</p>
            </div>
            <div className="flex ml-4">
                <Image src='../../assets/location-orange.svg' alt={'...'} width={20} height={20}/>
                <p className=" my-1 ml-3 font-light">{eventLocation}</p>
            </div>
            </Link>
    </div>
)
}