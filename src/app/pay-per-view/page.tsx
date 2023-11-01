import DisplaySelection from "../../components/DisplaySelection";
import { MobileLayout } from "../../components/MobileLayout";
import Search from "../../components/Search";
import VerticalCards from "../../components/VerticalCards";
import EventCards from "./components/EventCards";
import EventOptions from "./components/eventOptions";

let options = [
    {option:'Music'},
    {option:'Podcast'},
    {option:'Takes/Reels'},
    {option:'Pay per View'},
]

let cards = [
    {
        title: 'Brooks Davis Live',
        price: 19.99,
        image: '../assets/Vert11.png'
    },
    {
        title: 'Brooks Davis Live',
        price: 9.99,
        image: '../assets/Vert4.png'
    },{
        title: 'Brooks Davis Live',
        price: 24.99,
        image: '../assets/Vert3.png'
    },{
        title: 'Brooks Davis Live',
        price: 14.99,
        image: '../assets/Vert4.png'
    },
]

let eventCards = [
    {
        stars: 5,
        type: 'Live, Laugh, LOL',
        image: '../assets/Card1.jpeg',
        title: 'Brooks Davis',
        price: 24.99
    }, 
    {
        stars: 4,
        type: 'Live, Laugh, LOL',
        image: '../assets/Card2.jpeg',
        title: 'Brooks Davis',
        price: 19.99}, 
    {
        stars: 3,
        type: 'Live, Laugh, LOL',
        image: '../assets/Card3.jpeg',
        title: 'Brooks Davis',
        price: 24.99
    }, 
    {
        stars: 2,
        type: 'Live, Laugh, LOL',
        image: '../assets/Card4.jpeg',
        title: 'Brooks Davis',
        price: 24.99
    }
]

export default function PayPerView(){
    return(
       <MobileLayout>
        
            <Search hold='Search for artists, venues, and events'/>
            <DisplaySelection options={options}/>
            <div className="flex my-4 overflow-x-scroll">
                {cards.map(card =>(
                    <VerticalCards image={card.image} title={card.title} price={card.price} />
                ))}
            </div>
           <EventOptions />
           <div className="grid grid-cols-2 mt-4">
                {eventCards.map(card =>(
                    <EventCards stars={card.stars} type={card.type} image={card.image} title={card.title} price={card.price} />
                ))}
            </div>
           
       </MobileLayout>
    )
}