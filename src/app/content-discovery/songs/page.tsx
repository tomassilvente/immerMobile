'use client'
import { MobileLayout } from '../../../components/MobileLayout'
import SvgShuffleIcon from '../../../../public/assets/Icons/ShuffleIcon'
import SvgPlayButtonOrange from '../../../../public/assets/Icons/PlayButtonOrange'
import React, { useCallback, useState } from 'react'
import SvgPauseOrange from '../../../../public/assets/Icons/PauseOrange'
import SvgShuffleOrange from '../../../../public/assets/Icons/ShuffleOrange'
import Image from 'next/image'
import SvgMusicLine from '../../../../public/assets/Icons/MusicLine'
import SvgBackSong from '../../../../public/assets/Icons/BackSong'
import SvgNextSong from '../../../../public/assets/Icons/NextSong'
import SvgRePlayWhite from '../../../../public/assets/Icons/RePlayWhite'
import SvgRePlayOrange from '../../../../public/assets/Icons/RePlayOrange'
import SvgShareCirclesWhite from '../../../../public/assets/Icons/ShareCirclesWhite'
import SvgList from '../../../../public/assets/Icons/List'
import Share from '../../../components/EventDetails/Share'
import { IconProps } from '../../../types/content-discovery.interfaces'

export default function top100(): JSX.Element {
  const [state, setState] = useState({
    shareOpen: false,
    play: false,
    shuffle: false,
    replay: false
  })

  const toggleShareOpen = useCallback(() => {
    setState(prevState => ({ ...prevState, shareOpen: !prevState.shareOpen }))
  }, [])

  const togglePlay = useCallback(() => {
    setState(prevState => ({ ...prevState, play: !prevState.play }))
  }, [])

  const toggleShuffle = useCallback(() => {
    setState(prevState => ({ ...prevState, shuffle: !prevState.shuffle }))
  }, [])

  const toggleReplay = useCallback(() => {
    setState(prevState => ({ ...prevState, replay: !prevState.replay }))
  }, [])

  const Icon = ({ isToggled, IconOn, IconOff, onClick, width, height, className }: IconProps) => (
    isToggled ? <IconOn onClick={onClick} width={width} height={height} className={className} /> : <IconOff onClick={onClick} width={width} height={height} className={className} />
  );

  return (
    <MobileLayout>
      <section className="h-screen bg-gradient-to-b from-orange-500 via-brown-500 to-black bg-no-repeat bg-center bg-cover">
        <Image className="mt-40 ml-16 rounded-lg" src='/assets/podcast.png' alt="..." width={400} height={400} />
        <p className="text-2xl text-center font-light text-white mt-5">Brooks Davis Live</p>
        <p className="text-lg text-center font-light text-white mt-2">Brooks Davis Live</p>
        <SvgMusicLine width={400} className="ml-7 mt-3" />
        <div className="grid grid-cols-12 text-white text-sm font-light">
          <p className="col-start-2 ml-3">2:01</p>
          <p className="col-start-11">3:45</p>
        </div>
        <div className="flex mt-12">
          <Icon isToggled={state.shuffle} IconOn={SvgShuffleOrange} IconOff={SvgShuffleIcon} onClick={toggleShuffle} width={50} height={45} className="ml-14" />
          <SvgBackSong width={40} height={60} className="ml-7" />
          <Icon isToggled={state.play} IconOn={SvgPauseOrange} IconOff={SvgPlayButtonOrange} onClick={togglePlay} width={70} height={65} className="ml-6" />
          <SvgNextSong width={40} height={62} className="ml-6" />
          <Icon isToggled={state.replay} IconOn={SvgRePlayOrange} IconOff={SvgRePlayWhite} onClick={toggleReplay} width={40} height={62} className="ml-8" />
        </div>
        <div className="grid grid-cols-12 mt-12">
          <SvgShareCirclesWhite onClick={toggleShareOpen} width={30} height={30} className="col-start-9 ml-2" />
          <SvgList width={27} height={25} className="col-start-10 ml-7" />
        </div>
      </section>
      {state.shareOpen && (
        <div className="bg-[#000000d8]">
          <Share openShare={toggleShareOpen} />
        </div>
      )}
    </MobileLayout>
  )
}