import MusicCard from "./MusicCard";
import EventOptions from "./eventOptions";
import HorizontalMusicCard from "./HorizontalMusicCard";

export default function Music({videoCards, podcastCards}:any){
    return (  
        <>
            <div className="flex my-4 overflow-x-scroll">
            {videoCards.map(card =>(
                <MusicCard link={card.link} image={card.image} title={card.title} views={card.views}/>
            ))}
            </div>
            <EventOptions />
                <div className="mt-4 overflow-y-scroll">
                        {podcastCards.map(card =>(
                            <HorizontalMusicCard play={false} creator={card.creator} release={card.release} image={card.image} title={card.title} description={card.description} />
                        ))}
                </div>
        </>
    )
} 