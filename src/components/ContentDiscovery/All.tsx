import React from 'react'
import VerticalCards from '../../components/_common/components/VerticalCards'
import MusicCard from './MusicCard'
import ReelsCards from './ReelsCard'
import EventOptions from './eventOptions'

export default function All ({ cards, videoCards }: any): JSX.Element {
  return (
        <>
            <div className="flex my-4 overflow-x-scroll">
            {cards.map((card: any) => (
                    <VerticalCards key={card.id} image={card.image} title={card.title} price={card.price} />
            ))}
            </div>
            <EventOptions />
            <div className="grid grid-cols-3 grid-rows-2 m-3 space-y-1">
                <div className="grid grid-rows-2 space-y-1">
                    <MusicCard link={'/content-discovery/content'} title={cards[0].title} image={cards[0].image} views={cards[0].views} />
                    <MusicCard link={'/content-discovery/content'} title={cards[3].title} image={cards[3].image} views={cards[3].views} />
                </div>
                <div className="mt-">
                    <ReelsCards image={videoCards[0].image} views={videoCards[0].views} />
                </div>
                <div className="grid grid-rows-2 space-y-1">
                    <MusicCard link={'/content-discovery/content'} title={cards[2].title} image={cards[2].image} views={cards[2].views} />
                    <MusicCard link={'/content-discovery/content'} title={videoCards[3].title} image={videoCards[3].image} views={videoCards[3].views} />
                </div>
                <div className="mt-1">
                    <ReelsCards image={videoCards[1].image} views={videoCards[1].views} />
                </div>
                <div className="grid grid-rows-2 space-y-1 mt-1">
                    <MusicCard link={'/content-discovery/content'} title={cards[2].title} image={cards[2].image} views={cards[2].views} />
                    <MusicCard link={'/content-discovery/content'} title={videoCards[2].title} image={videoCards[2].image} views={videoCards[2].views} />
                </div>
                <div className="grid grid-rows-2 space-y-1 mt-1">
                    <MusicCard link={'/content-discovery/content'} title={cards[1].title} image={cards[1].image} views={cards[1].views} />
                    <MusicCard link={'/content-discovery/content'} title={cards[0].title} image={cards[0].image} views={cards[3].views} />
                </div>
            </div>
        </>
  )
}
