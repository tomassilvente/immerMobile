import Link from "next/link";
import VerticalCards from "../../components/_common/components/VerticalCards";
import EventCards from "./EventCards";
import EventOptions from "./eventOptions";

export default function PayPerView({cards, eventCards}: any){
    return ( 
        <Link href='/content-discovery/content'>
            <div className="flex my-4 overflow-x-scroll">
            {cards.map(card =>(
                <VerticalCards image={card.image} title={card.title} price={card.price} />
            ))}
            </div>
            <EventOptions />
            <div className="grid grid-cols-2 mt-4">
                    {eventCards.map(card =>(
                        <EventCards  stars={card.stars} type={card.type} image={card.image} title={card.title} price={card.price} />
                    ))}
            </div>
        </Link> 
)
}