import Image from "next/image"
import Link from "next/link"

type CardProps ={
    eventDay: string,
    eventTime: string,
    eventLocation: string,
    eventImg: string,
    eventOrganizer: string,
    eventPrice: number
}

export default function EventsNearCards({eventDay, eventOrganizer, eventTime, eventImg, eventPrice}:CardProps){
    return(
        <div className="p-5 mt-5 grid grid-cols-12 bg-[#ffbb7720] border border-[#ff80004b] rounded-lg">
            <Image className="col-start-1 col-end-4 h-[130px] rounded-xl " src={eventImg} alt={'...'} width={130} height={100}/>
            <div className="col-start-5 col-end-10">
                <p className="text-lg col-start-1 col-end-9">{eventOrganizer} Live</p>
                <div className="flex my-2">
                    <Image src='../../../assets/calendar-orange.svg' alt={'...'} width={15} height={15} />
                    <p className="font-light text-[#767676] ml-2">{eventDay}</p>
                </div>
                <div className="flex my-2">
                    <Image src='../../../assets/clock.svg' alt={'...'} width={15} height={15} />
                    <p className="font-light text-[#767676] ml-2">{eventTime}</p>
                </div>
                <p className="mt-4 text-primary font-semibold">Price: ${eventPrice}</p>
            </div>
            <Image className="col-start-12 ml-5" src='../../../assets/moreButton.svg' alt={'...'} width={30} height={30} />
        </div>
)}