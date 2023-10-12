import Link from "next/link";
import Image from "next/image";

type CardProps ={
    eventDay: string,
    eventTime: string,
    eventLocation: string,
    eventImg: string,
    eventOrganizer: string,
    eventPrice: number
}

export default function NewEventsCards({eventDay, eventOrganizer, eventTime, eventImg, eventPrice}:CardProps){
return(
    <div className="rounded-xl border border-gray-200 mb-10 w-[200px] h-[260px] flex-none mr-6">
            <Link href='/'>
                <Image className="mb-3 rounded-t-xl h-[140px]" src={eventImg} alt={'...'}  width={200} height={94}/>
                <div className="ml-4 grid grid-cols-9">
                    <p className="text-xl col-start-1 col-end-9">{eventOrganizer}</p>
                    <p className="my-2 font-light text-[#767676] col-start-1 col-end-9">{eventDay}</p>
                    <p className="font-light text-[#767676] col-start-1 col-end-8">{eventTime}</p>
                    <p className="text-primary">${eventPrice}</p>
                </div>
            </Link>
    </div>
)
}