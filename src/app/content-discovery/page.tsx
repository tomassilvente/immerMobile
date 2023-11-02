"use client"
import { useState } from "react";
import DisplaySelection from "../../components/DisplaySelection";
import { MobileLayout } from "../../components/MobileLayout";
import Search from "../../components/Search";
import VerticalCards from "../../components/VerticalCards";
import EventCards from "./components/EventCards";
import EventOptions from "./components/eventOptions";
import StreamCards from "./components/StreamCards";
import VideoCards from "./components/VideoCards";

let options = [
    {option:'All'},
    {option:'Live Streams'},
    {option:'Video'},
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

let videoCards = [
    {
        title: 'Brooks Davis Live',
        views: '223K',
        image: '../assets/video1.jpeg',
        days: 5,
    },
    {
        title: 'Brooks Davis Live',
        views: '80K',
        image: '../assets/video2.jpeg',
        days: 2,
    },{
        title: 'Brooks Davis Live',
        views: '100K',
        image: '../assets/video1.jpeg',
        days: 1,
    },{
        title: 'Brooks Davis Live',
        views: '341',
        image: '../assets/video2.jpeg',
        days: 6,
    },
]

let eventCards = [
    {
        stars: 5,
        type: 'Live, Laugh, LOL',
        image: '../assets/Card1.jpeg',
        title: 'Brooks Davis',
        price: 24.99,
        location: 'Venue | Dallas 2023 | Oceanic Festival'
    }, 
    {
        stars: 4,
        type: 'Live, Laugh, LOL',
        image: '../assets/Card2.jpeg',
        title: 'Brooks Davis',
        price: 19.99,
        location: 'Venue | Dallas 2023 | Oceanic Festival'
    }, 
    {
        stars: 3,
        type: 'Live, Laugh, LOL',
        image: '../assets/Card3.jpeg',
        title: 'Brooks Davis',
        price: 24.99,
        location: 'Venue | Dallas 2023 | Oceanic Festival'
    }, 
    {
        stars: 2,
        type: 'Live, Laugh, LOL',
        image: '../assets/Card4.jpeg',
        title: 'Brooks Davis',
        price: 24.99,
        location: 'Venue | Dallas 2023 | Oceanic Festival'
    }
]

export default function PayPerView(){

    const [activeDayIndex, setActiveDayIndex] = useState<number | null>(null);
    return(
        
       <MobileLayout>
            <Search hold='Search for artists, venues, and events'/>
            <DisplaySelection options={options} activeDayIndex={activeDayIndex} setActiveDayIndex={setActiveDayIndex}/>
            {
                activeDayIndex == 0 ||   activeDayIndex == 6 || activeDayIndex == 1
                    ?
                        (  <>
                            {console.log(activeDayIndex)}
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
                        </>)
                    : 
                    activeDayIndex == 0 || activeDayIndex == 2
                        ?(  <>
                        <div className="flex my-4 overflow-x-scroll">
                        {videoCards.map(card =>(
                            <VideoCards image={card.image} title={card.title} views={card.views} days={card.days} />
                        ))}
                        </div>
                        <EventOptions />
                        <div className="flex mt-4 overflow-x-scroll">
                                {eventCards.map(card =>(
                                    <StreamCards userImage="../assets/subs1.png" type={card.location} image={card.image} title={card.title} price={card.price} />
                                ))}
                        </div>
                    </>)
                    :<div className="flex my-4 overflow-x-scroll">
                    {cards.map(card =>(
                        <VerticalCards image={card.image} title={card.title} price={card.price} />
                    ))}
                    </div>
            }
            
           
       </MobileLayout>
    )
}