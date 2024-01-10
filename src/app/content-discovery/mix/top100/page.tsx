'use client'
// ! In this file the const does not have an id, it is veri important to use them.
import React, { useState } from 'react'
import { MobileLayout } from '../../../../components/MobileLayout'
import SvgBackVector from '../../../../../public/assets/Icons/BackVector'
import SvgMoreButton from '../../../../../public/assets/Icons/MoreButton'
import HorizontalMusicCard from '../../../../components/ContentDiscovery/HorizontalMusicCard'
import SvgShuffleIcon from '../../../../../public/assets/Icons/ShuffleIcon'
import SvgPlayButtonOrange from '../../../../../public/assets/Icons/PlayButtonOrange'
import SvgPauseOrange from '../../../../../public/assets/Icons/PauseOrange'
import SvgShuffleOrange from '../../../../../public/assets/Icons/ShuffleOrange'

const podcastCards = [
  {
    title: 'Brooks Davis',
    creator: 'Brooks Davis',
    image: '/assets/Vert2.png',
    description: 'Lorem ipsum dolor sit amet consectetur. Mauris in integer consequat id sed a sit interdum tortor. At proin bibendum urna diam praesent donec. Diam eget in quisque quis a ...',
    release: 'Yesterday',
    duration: 52
  },
  {
    title: 'Brooks Davis',
    creator: 'Brooks Davis',
    image: '/assets/Vert3.png',
    description: 'Lorem ipsum dolor sit amet consectetur. Mauris in integer consequat id sed a sit interdum tortor. At proin bibendum urna diam praesent donec. Diam eget in quisque quis a ...',
    release: 'Yesterday',
    duration: 40
  }, {
    title: 'Brooks Davis',
    creator: 'Brooks Davis',
    image: '/assets/podcast.png',
    description: 'Lorem ipsum dolor sit amet consectetur. Mauris in integer consequat id sed a sit interdum tortor. At proin bibendum urna diam praesent donec. Diam eget in quisque quis a ...',
    release: 'Yesterday',
    duration: 20
  }, {
    title: 'Brooks Davis',
    creator: 'Brooks Davis',
    image: '/assets/podcast.png',
    description: 'Lorem ipsum dolor sit amet consectetur. Mauris in integer consequat id sed a sit interdum tortor. At proin bibendum urna diam praesent donec. Diam eget in quisque quis a ...',
    release: 'Yesterday',
    duration: 100
  }, {
    title: 'Brooks Davis',
    creator: 'Brooks Davis',
    image: '/assets/podcast.png',
    description: 'Lorem ipsum dolor sit amet consectetur. Mauris in integer consequat id sed a sit interdum tortor. At proin bibendum urna diam praesent donec. Diam eget in quisque quis a ...',
    release: 'Yesterday',
    duration: 100
  }, {
    title: 'Brooks Davis',
    creator: 'Brooks Davis',
    image: '/assets/podcast.png',
    description: 'Lorem ipsum dolor sit amet consectetur. Mauris in integer consequat id sed a sit interdum tortor. At proin bibendum urna diam praesent donec. Diam eget in quisque quis a ...',
    release: 'Yesterday',
    duration: 100
  }, {
    title: 'Brooks Davis',
    creator: 'Brooks Davis',
    image: '/assets/podcast.png',
    description: 'Lorem ipsum dolor sit amet consectetur. Mauris in integer consequat id sed a sit interdum tortor. At proin bibendum urna diam praesent donec. Diam eget in quisque quis a ...',
    release: 'Yesterday',
    duration: 100
  }, {
    title: 'Brooks Davis',
    creator: 'Brooks Davis',
    image: '/assets/podcast.png',
    description: 'Lorem ipsum dolor sit amet consectetur. Mauris in integer consequat id sed a sit interdum tortor. At proin bibendum urna diam praesent donec. Diam eget in quisque quis a ...',
    release: 'Yesterday',
    duration: 100
  }, {
    title: 'Brooks Davis',
    creator: 'Brooks Davis',
    image: '/assets/podcast.png',
    description: 'Lorem ipsum dolor sit amet consectetur. Mauris in integer consequat id sed a sit interdum tortor. At proin bibendum urna diam praesent donec. Diam eget in quisque quis a ...',
    release: 'Yesterday',
    duration: 100
  }, {
    title: 'Brooks Davis',
    creator: 'Brooks Davis',
    image: '/assets/podcast.png',
    description: 'Lorem ipsum dolor sit amet consectetur. Mauris in integer consequat id sed a sit interdum tortor. At proin bibendum urna diam praesent donec. Diam eget in quisque quis a ...',
    release: 'Yesterday',
    duration: 100
  }
]

export default function top100 (): JSX.Element {
  const [play, setPlay] = useState(false)
  const [shuffle, setShuffle] = useState(false)

  function setPlayState (): void {
    setPlay(!play)
  }
  function setShuffleState (): void {
    setShuffle(!shuffle)
  }

  return (
        <MobileLayout>
            <div className="h-[350px] grid grid-cols-12 place-items-end content-start"
                style={{
                  backgroundImage: 'url(/assets/podcast.png)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover'
                }}>
                <SvgBackVector href="/content-discovery" width={20} height={30} className=""/>
                <SvgMoreButton width={30} height={35} className="col-start-12 mr-[15px] mt-[20px] "/>
                <p className="text-3xl col-start-1 col-end-4 text-white mt-[220px]">Top 100</p>
                {
                    shuffle
                      ? <SvgShuffleOrange onClick={setShuffleState} width={40} height={50} className="col-start-10 "/>
                      : <SvgShuffleIcon onClick={setShuffleState} width={40} height={50} className="col-start-10 "/>
                }

                {
                    play
                      ? <SvgPauseOrange onClick={setPlayState} width={39} height={39} className="col-start-12 mr-[20px]"/>
                      : <SvgPlayButtonOrange onClick={setPlayState} width={40} height={40} className="col-start-12 mr-[20px]"/>

                }
                <div className="col-start-1 col-end-5 mr-[24px] font-light text-sm text-white ">
                    <p >55 songs - 150 min</p>
                </div>
            </div>
            <div className="mt-4 overflow-y-scroll">
                        {podcastCards.map(card => (
                            <HorizontalMusicCard key={card.title} link={'/'} play={false} creator={card.creator} release={card.release} image={card.image} title={card.title} description={card.description} />
                        ))}
            </div>
        </MobileLayout>
  )
}
