import StreamCards from "./StreamCards";
import VideoCards from "./VideoCards";
import VideosCards from "./VideosCards";
import EventOptions from "./eventOptions";

export default function Videos({videoCards, eventCards}:any){
    return (  
    <>
        <div className="flex my-4 overflow-x-scroll">
        {videoCards.map((card :any) =>(
            <VideoCards image={card.image} title={card.title} views={card.views} days={card.days} />
        ))}
        </div>
        <EventOptions />
        <div className="flex mt-4 overflow-x-scroll">
                {eventCards.map((card :any) =>(
                    <VideosCards userImage="../assets/subs1.png" views="223K" days={5} image={card.image} title={card.title} price={card.price} />
                ))}
        </div>
    </>
    )
}