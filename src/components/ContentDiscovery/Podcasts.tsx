import Link from "next/link";
import PodcastCards from "./PodcastCard";
import VideoCards from "./VideoCards";
import EventOptions from "./eventOptions";

export default function Podcasts({videoCards, podcastCards}:any){
    return (  
        <>
            <div className="flex my-4 overflow-x-scroll">
            {videoCards.map((card :any) =>(
                <VideoCards image={card.image} title={card.title} views={card.views} days={card.days} />
            ))}
            </div>
            <EventOptions />
            <Link href='content-discovery/podcast'>
                <div className="flex mt-4 overflow-x-scroll">
                        {podcastCards.map((card :any) =>(
                            <PodcastCards duration={card.duration} creator={card.creator} release={card.release} image={card.image} title={card.title} description={card.description} />
                        ))}
                </div>
            </Link>
        </>
    )
}