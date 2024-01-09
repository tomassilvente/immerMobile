import React from 'react'
import MusicCard from './MusicCard'
import EventOptions from './eventOptions'
import HorizontalMusicCard from './HorizontalMusicCard'

export default function Music ({ videoCards, podcastCards }: any): JSX.Element {
  return (
        <>
            <div className="flex my-4 overflow-x-scroll">
            {videoCards.map((card: any) => (
                <MusicCard key={card.id} link={card.link} image={card.image} title={card.title} views={card.views}/>
            ))}
            </div>
            <EventOptions />
                <div className="mt-4 overflow-y-scroll">
                        {podcastCards.map((card: any) => (
                            <HorizontalMusicCard key={card.id} link={'/content-discovery/songs'} play={false} creator={card.creator} release={card.release} image={card.image} title={card.title} description={card.description} />
                        ))}
                </div>
        </>
  )
}
