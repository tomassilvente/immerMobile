import VerticalCards from "../../components/_common/components/VerticalCards";
import ReelsCards from "./ReelsCard";
import EventOptions from "./eventOptions";

export default function Reels({cards, videoCards}:any){
    return (  
        <>
            <div className="flex my-4 overflow-x-scroll">
            {cards.map((card :any) =>(
                    <VerticalCards image={card.image} title={card.title} price={card.price} />
                ))}
            </div>
            <EventOptions />
            <div className="grid grid-cols-3 m-4">
                    {videoCards.map((card :any) =>(
                        <ReelsCards  image={card.image} views={card.views} />
                    ))}
            </div>
        </>
    )
}