'use client'
// ! In this file the const does not have an id, it is very important to use them.
import React, { useState } from 'react'
import { MobileLayout } from '../../../../components/MobileLayout'
import SvgBackVector from '../../../../../public/assets/Icons/BackVector'
import SvgMoreButton from '../../../../../public/assets/Icons/MoreButton'
import HorizontalMusicCard from '../../../../components/ContentDiscovery/HorizontalMusicCard'
import SvgShuffleIcon from '../../../../../public/assets/Icons/ShuffleIcon'
import SvgPlayButtonOrange from '../../../../../public/assets/Icons/PlayButtonOrange'
import SvgPauseOrange from '../../../../../public/assets/Icons/PauseOrange'
import SvgShuffleOrange from '../../../../../public/assets/Icons/ShuffleOrange'
import { podcastCardsTop } from '../../../../server-actions/content/dummyContent'

export default function top100 (): JSX.Element {
  const [state, setState] = useState({
    play: false,
    shuffle: false
  })

  const toggleState = (key: 'play' | 'shuffle') => {
    setState(prevState => ({ ...prevState, [key]: !prevState[key] }))
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
                    state.shuffle
                      ? <SvgShuffleOrange onClick={() => toggleState('shuffle')} width={40} height={50} className="col-start-10 "/>
                      : <SvgShuffleIcon onClick={() => toggleState('shuffle')} width={40} height={50} className="col-start-10 "/>
                }

                {
                    state.play
                      ? <SvgPauseOrange onClick={() => toggleState('play')} width={39} height={39} className="col-start-12 mr-[20px]"/>
                      : <SvgPlayButtonOrange onClick={() => toggleState('play')} width={40} height={40} className="col-start-12 mr-[20px]"/>

                }
                <div className="col-start-1 col-end-5 mr-[24px] font-light text-sm text-white ">
                    <p >55 songs - 150 min</p>
                </div>
            </div>
            <div className="mt-4 overflow-y-scroll">
                        {podcastCardsTop.map(card => (
                            <HorizontalMusicCard key={card.title} link={'/'} play={false} creator={card.creator} release={card.release} image={card.image} title={card.title} description={card.description} />
                        ))}
            </div>
        </MobileLayout>
  )
}
