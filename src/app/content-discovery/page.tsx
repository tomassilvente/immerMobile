"use client"
import { useState } from "react";
import DisplaySelection from "../../components/DisplaySelection";
import { MobileLayout } from "../../components/MobileLayout";
import Search from "../../components/Search";
import VerticalCards from "../../components/VerticalCards";
import EventOptions from "./components/eventOptions";
import StreamCards from "./components/StreamCards";
import VideoCards from "./components/VideoCards";
import PodcastCards from "./components/PodcastCard";
import ReelsCards from "./components/ReelsCard";
import PayPerView from "./components/PayPerView";
import Streams from "./components/Streams";
import Podcasts from "./components/Podcasts";
import Reels from "./components/Reels";
import All from "./components/All";

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

let podcastCards = [
    {
        title: 'Brooks Davis',
        creator: 'Brooks Davis',
        image: '../assets/Vert3.png',
        description: 'Lorem ipsum dolor sit amet consectetur. Mauris in integer consequat id sed a sit interdum tortor. At proin bibendum urna diam praesent donec. Diam eget in quisque quis a ...',
        release: 'Yesterday',
        duration: 52
    },
    {
        title: 'Brooks Davis',
        creator: 'Brooks Davis',
        image: '../assets/Vert3.png',
        description: 'Lorem ipsum dolor sit amet consectetur. Mauris in integer consequat id sed a sit interdum tortor. At proin bibendum urna diam praesent donec. Diam eget in quisque quis a ...',
        release: 'Yesterday',
        duration: 40
    },{
        title: 'Brooks Davis',
        creator: 'Brooks Davis',
        image: '../assets/Vert3.png',
        description: 'Lorem ipsum dolor sit amet consectetur. Mauris in integer consequat id sed a sit interdum tortor. At proin bibendum urna diam praesent donec. Diam eget in quisque quis a ...',
        release: 'Yesterday',
        duration: 20
    },{
        title: 'Brooks Davis',
        creator: 'Brooks Davis',
        image: '../assets/Vert3.png',
        description: 'Lorem ipsum dolor sit amet consectetur. Mauris in integer consequat id sed a sit interdum tortor. At proin bibendum urna diam praesent donec. Diam eget in quisque quis a ...',
        release: 'Yesterday',
        duration: 100
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

export default function ContentDiscovery(){

    const [activeDayIndex, setActiveDayIndex] = useState<number | null>(0);
    return(
        
       <MobileLayout>
            <Search hold='Search for artists, venues, and events'/>
            <DisplaySelection options={options} activeDayIndex={activeDayIndex} setActiveDayIndex={setActiveDayIndex}/>
            {
                activeDayIndex == 0 
                    ? <All cards={cards} videoCards={videoCards} eventCards={eventCards}/>
                    :
                    activeDayIndex == 6 || activeDayIndex == 1
                    ?   <PayPerView cards={cards} eventCards={eventCards}/>
                    : 
                    activeDayIndex == 0 || activeDayIndex == 2
                        ?   <Streams videoCards={videoCards} eventCards={eventCards}/>
                    :
                    activeDayIndex == 4
                    ? <Podcasts podcastCards={podcastCards} videoCards={videoCards}/>
                    : activeDayIndex == 5
                    ? <Reels cards={cards} videoCards={videoCards}/>
                    : ''
            }
            
           
       </MobileLayout>
    )
}