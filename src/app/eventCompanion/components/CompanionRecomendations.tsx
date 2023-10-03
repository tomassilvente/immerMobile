import CompanionCards from "./CompanionCards"

export default function CompanionRecomendaions({events}:any){
    return(
        <div className=" mx-14 py-7 columns-3 ">
            {events.map((event)=>(
                <div className="mt-5">
                    <CompanionCards social={event.name} img={event.img} link={event.link} w={140} h={140}/>
                </div>
            ))}
        </div>
    
)}