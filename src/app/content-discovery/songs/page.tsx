"use client"
import { MobileLayout } from "../../../components/MobileLayout"
import SvgShuffleIcon from "../../../../public/assets/Icons/ShuffleIcon"
import SvgPlayButtonOrange from "../../../../public/assets/Icons/PlayButtonOrange"
import { useState } from "react"
import SvgPauseOrange from "../../../../public/assets/Icons/PauseOrange"
import SvgShuffleOrange from "../../../../public/assets/Icons/ShuffleOrange"
import Image from "next/image"
import SvgMusicLine from "../../../../public/assets/Icons/MusicLine"
import SvgBackSong from "../../../../public/assets/Icons/BackSong"
import SvgNextSong from "../../../../public/assets/Icons/NextSong"
import SvgRePlayWhite from "../../../../public/assets/Icons/RePlayWhite"
import SvgRePlayOrange from "../../../../public/assets/Icons/RePlayOrange"
import SvgShareCircles from "../../../../public/assets/Icons/ShareCircles"
import SvgShareCirclesWhite from "../../../../public/assets/Icons/ShareCirclesWhite"
import SvgList from "../../../../public/assets/Icons/List"

export default function top100({}: any){

    const [play, setPlay] = useState(false)
    const [shuffle, setShuffle] = useState(false)
    const [replay, setReplay] = useState(false)

    function setPlayState(){
        setPlay(!play)
    }
    function setShuffleState(){
        setShuffle(!shuffle)
    }
    function setReplayState(){
        setReplay(!replay)
    }

    return(
        <MobileLayout>
            <div className="h-screen"
                style={{
                    background: "linear-gradient(180deg, #E6915B 0%, #6A432B 47%, #2B2B2B 100%)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}>
                <Image className="mt-[100px] ml-[40px] rounded-lg" src='/assets/podcast.png' alt="..." width={400} height={400} />
                <p className="text-2xl text-center font-light text-white mt-[20px]">Brooks Davis Live</p>
                <p className="text-lg text-center font-light text-white mt-[10px]">Brooks Davis Live</p>
                <SvgMusicLine width={400} className="ml-[30px] mt-[15px]"/>
                <div className="grid grid-cols-12 text-white text-sm font-light">
                    <p className="col-start-2 ml-[12px]">2:01</p>
                    <p className="col-start-11 ">3:45</p>
                </div>
                <div className="flex mt-[50px]">
                    {
                        shuffle
                        ? <SvgShuffleOrange onClick={setShuffleState} width={50} height={45} className="ml-[60px] "/>
                        : <SvgShuffleIcon onClick={setShuffleState} width={50} height={45} className="ml-[60px] "/>
                    }
                    <SvgBackSong width={40} height={60} className="ml-[30px] "/>
                    {
                        play
                        ? <SvgPauseOrange onClick={setPlayState} width={70} height={65} className="ml-[25px]"/>
                        : <SvgPlayButtonOrange onClick={setPlayState} width={70} height={65} className="ml-[25px]"/>
                    }
                    <SvgNextSong width={40} height={62} className="ml-[25px] "/>
                    {
                        replay
                        ? <SvgRePlayOrange onClick={setReplayState} width={40} height={62} className="ml-[33px]"/>
                        : <SvgRePlayWhite onClick={setReplayState} width={40} height={62} className="ml-[33px]"/>
                    }
               </div>
               <div className="grid grid-cols-12 mt-[50px]">
                    <SvgShareCirclesWhite width={30} height={30} className="col-start-9 ml-[10px]"/>
                    <SvgList width={27} height={25} className="col-start-10 ml-[30px]"/>
               </div>
            </div>
        </MobileLayout>
    )
}