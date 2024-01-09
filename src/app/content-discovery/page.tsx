'use client'
import React, { useState } from 'react'
import DisplaySelection from '../../components/_common/components/DisplaySelection'
import { MobileLayout } from '../../components/MobileLayout'
import Search from '../../components/_common/components/Search'
import PayPerView from '../../components/ContentDiscovery/PayPerView'
import Streams from '../../components/ContentDiscovery/Streams'
import Podcasts from '../../components/ContentDiscovery/Podcasts'
import Reels from '../../components/ContentDiscovery/Reels'
import All from '../../components/ContentDiscovery/All'
import Music from '../../components/ContentDiscovery/Music'
import Videos from '../../components/ContentDiscovery/Videos'

const options = [
  { option: 'All' },
  { option: 'Live Streams' },
  { option: 'Video' },
  { option: 'Music' },
  { option: 'Podcast' },
  { option: 'Takes/Reels' },
  { option: 'Pay per View' }
]

const cards = [
  {
    title: 'Brooks Davis Live',
    price: 19.99,
    image: '../assets/Vert11.png'
  },
  {
    title: 'Brooks Davis Live',
    price: 9.99,
    image: '../assets/Vert4.png'
  }, {
    title: 'Brooks Davis Live',
    price: 24.99,
    image: '../assets/Vert3.png'
  }, {
    title: 'Brooks Davis Live',
    price: 14.99,
    image: '../assets/Vert4.png'
  }
]

const videoCards = [
  {
    title: 'Brooks Davis Live',
    views: '223K',
    image: '../assets/video1.jpeg',
    days: 5
  },
  {
    title: 'Brooks Davis Live',
    views: '80K',
    image: '../assets/video2.jpeg',
    days: 2
  }, {
    title: 'Brooks Davis Live',
    views: '100K',
    image: '../assets/video1.jpeg',
    days: 1
  }, {
    title: 'Brooks Davis Live',
    views: '341',
    image: '../assets/video2.jpeg',
    days: 6
  }
]

const podcastCards = [
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
  }, {
    title: 'Brooks Davis',
    creator: 'Brooks Davis',
    image: '../assets/Vert3.png',
    description: 'Lorem ipsum dolor sit amet consectetur. Mauris in integer consequat id sed a sit interdum tortor. At proin bibendum urna diam praesent donec. Diam eget in quisque quis a ...',
    release: 'Yesterday',
    duration: 20
  }, {
    title: 'Brooks Davis',
    creator: 'Brooks Davis',
    image: '../assets/Vert3.png',
    description: 'Lorem ipsum dolor sit amet consectetur. Mauris in integer consequat id sed a sit interdum tortor. At proin bibendum urna diam praesent donec. Diam eget in quisque quis a ...',
    release: 'Yesterday',
    duration: 100
  }
]

const eventCards = [
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

const MixCards = [
  {
    title: 'Top 100',
    songs: 55,
    image: '../assets/video1.jpeg',
    duration: 150,
    link: 'content-discovery/mix/top100'
  },
  {
    title: 'Pop Hits',
    songs: 15,
    image: '../assets/video2.jpeg',
    duration: 50,
    link: 'content-discovery/mix/pop'
  }, {
    title: 'Hip Hop',
    songs: 140,
    image: '../assets/video1.jpeg',
    duration: 450,
    link: 'content-discovery/mix/hiphop'
  }, {
    title: 'Rock & Roll',
    songs: 42,
    image: '../assets/video2.jpeg',
    duration: 130,
    link: 'content-discovery/mix/rock'
  }
]

export default function ContentDiscovery (): JSX.Element {
  const [activeDayIndex, setActiveDayIndex] = useState<number | null>(0)
  return (

       <MobileLayout>
            <Search hold='Search for artists, venues, and events'/>
            <DisplaySelection options={options} activeDayIndex={activeDayIndex} setActiveDayIndex={setActiveDayIndex}/>
            {
                activeDayIndex === 0
                  ? <All cards={cards} videoCards={videoCards} eventCards={eventCards}/>
                  : activeDayIndex === 2
                    ? <Videos videoCards={videoCards} eventCards={eventCards}/>
                    : activeDayIndex === 6
                      ? <PayPerView cards={cards} eventCards={eventCards}/>
                      : activeDayIndex === 1
                        ? <Streams videoCards={videoCards} eventCards={eventCards}/>
                        : activeDayIndex === 4
                          ? <Podcasts podcastCards={podcastCards} videoCards={videoCards}/>
                          : activeDayIndex === 5
                            ? <Reels cards={cards} videoCards={videoCards}/>
                            : <Music videoCards={MixCards} podcastCards={podcastCards}/>
            }
       </MobileLayout>
  )
}
