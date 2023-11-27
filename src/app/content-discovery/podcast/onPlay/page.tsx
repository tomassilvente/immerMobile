"use client"
import { MobileLayout } from "../../../../components/MobileLayout"
import SvgShuffleIcon from "../../../../../public/assets/Icons/ShuffleIcon"
import SvgPlayButtonOrange from "../../../../../public/assets/Icons/PlayButtonOrange"
import { useState } from "react"
import SvgPauseOrange from "../../../../../public/assets/Icons/PauseOrange"
import SvgShuffleOrange from "../../../../../public/assets/Icons/ShuffleOrange"
import Image from "next/image"
import SvgMusicLine from "../../../../../public/assets/Icons/MusicLine"
import SvgBackSong from "../../../../../public/assets/Icons/BackSong"
import SvgNextSong from "../../../../../public/assets/Icons/NextSong"
import SvgRePlayWhite from "../../../../../public/assets/Icons/RePlayWhite"
import SvgRePlayOrange from "../../../../../public/assets/Icons/RePlayOrange"
import SvgShareCirclesWhite from "../../../../../public/assets/Icons/ShareCirclesWhite"
import SvgList from "../../../../../public/assets/Icons/List"
import SvgBack30 from "../../../../../public/assets/Icons/Back30"
import SvgFoward30 from "../../../../../public/assets/Icons/Foward30"
import SvgSleep from "../../../../../public/assets/Icons/Sleep"
import SvgSleepOrange from "../../../../../public/assets/Icons/SleepOrange"

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
                    background: 'linear-gradient(180deg, #081A29 0%, #29445F 39%, #2B2B2B 100%)',
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}>
                <Image className="mt-[100px] ml-[40px] h-[400px] rounded-lg" src='/assets/Vert3.png' alt="../..." width={400} height={400} />
                <p className="text-2xl text-center font-light text-white mt-[20px]">Brooks Davis Live</p>
                <p className="text-lg text-center font-light text-white mt-[10px]">Brooks Davis Live</p>
                <SvgMusicLine width={400} className="ml-[30px] mt-[15px]"/>
                <div className="grid grid-cols-12 text-white text-sm font-light">
                    <p className="col-start-2 ml-[12px]">30:25</p>
                    <p className="col-start-10 ml-[30px]">50:58</p>
                </div>
                <div className="flex mt-[50px]">
                    {
                        shuffle
                        ? <p onClick={setShuffleState} className="ml-[50px] w-[30px] mt-[12px] text-[24px] text-primary"> 1.5x </p>
                        : <p onClick={setShuffleState} className="ml-[50px] w-[30px] mt-[12px] text-[24px] text-white"> 1x </p>
                    }
                    <p className="absolute ml-[130px] text-white font-light mt-[19px]">30</p>
                    <SvgBack30 width={50} height={60} className="ml-[35px] mt-[2px]"/>
                    {
                        play
                        ? <SvgPauseOrange onClick={setPlayState} width={70} height={65} className="ml-[25px]"/>
                        : <SvgPlayButtonOrange onClick={setPlayState} width={70} height={65} className="ml-[25px]"/>
                    }
                    <p className="absolute ml-[302px] text-white font-light mt-[21px]">30</p>
                    <SvgFoward30 width={50} height={60} className="ml-[25px] mt-1"/>
                    {
                        replay
                        ? <SvgSleepOrange onClick={setReplayState} width={22} height={64} className="ml-[50px]"/>
                        : <SvgSleep onClick={setReplayState} width={22} height={64} className="ml-[50px]"/>
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