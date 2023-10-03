import Image from "next/image"

export default function CompanionDetails({eventDay, eventTime, eventName, eventDescription, eventOrganizer}:any){
    return(
    <div>
        <div className=" m-7 grid grid-cols-12 ">
            <div className=" col-start-1 col-end-6 flex">
                <Image alt={'...'} src={'../assets/calendar-orange.svg'} width={25} height={25}/>
                <p className="ml-2  font-light">{eventDay}</p>
            </div>
            <div className="col-start-8 col-end-12 flex"> 
                <Image alt={'...'} src={'../assets/clock.svg'} width={25} height={25}/>
                <p className="ml-2 font-light">{eventTime}</p>
            </div>
        </div>
        <div className="px-7 pb-7 shadow-xl">
            <h1 className="text-xl font-semibold">{eventName} |<span className="font-normal text-base"> by {eventOrganizer}</span></h1>
            <p className="mt-4 font-light"> {eventDescription} </p>
        </div>
    </div>
)}