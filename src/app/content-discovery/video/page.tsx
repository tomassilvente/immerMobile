"use client"
import EventHeader from "../../../components/EventHeader";
import { MobileLayout } from "../../../components/MobileLayout";
import DemoData from '../../../../public/data/DemoData.json'
import SvgOpenEye from "../../../../public/assets/Icons/OpenEye";
import SvgLikeButton from "../../../../public/assets/Icons/LikeButton";
import SvgCommentButton from "../../../../public/assets/Icons/CommentButton";
import { useState } from "react";
import SvgRedHeart from "../../../../public/assets/Icons/RedHeart";
import SvgBookmark from "../../../../public/assets/Icons/Bookmark";
import Link from "next/link";
import Image from "next/image";
import Share from "../../../components/Share";
import Comments from "../../../components/Comments";
import SvgBookmarkOrange from "../../../../public/assets/Icons/BookmarkOrange";

export default function content(){

    const [BookMarked, setBookMarked] = useState(false)

    function setBookmark(){
      setBookMarked(!BookMarked)
    }

    const [LikeButton, setLikeButton] = useState(false)

    function setLiked(){
        setLikeButton(!LikeButton)
    }

    const [ShareOpen, setShareOpen] = useState(false)

    function openShare(){
      setShareOpen(!ShareOpen)
    }
  
    const [CommentOpen, setCommentOpen] = useState(false)

    function openComments(){
      setCommentOpen(!CommentOpen)
    }


    return(
        <div >
        <MobileLayout >
            <EventHeader shareOpen={ShareOpen} openShare={openShare} eventImg={'../../assets/piano.jpeg'}/>         
            <div className={`m-4 `}>
                <p className="text-xl font-semibold">{DemoData.eventCompanionName}</p>
                <p className="font-light text-xl">Venue | Dallas 2023 | Oceanic Festival</p>
                <hr className="w-[35px] border-primary border-[2px] mt-2" /> 
                <div className="flex mt-4 text-center font-light">
                    <div>
                        <SvgOpenEye width={40} height={40} />
                        <p>223K</p>
                    </div>
                    <div className="ml-10" onClick={setLiked}>
                        {
                            LikeButton
                            ?<>
                            <SvgRedHeart width={40} height={40} />
                            <p>577</p>
                            </>
                            :<>
                            <SvgLikeButton width={40} height={40} />
                            <p>576</p>
                            </>
                        }
                    </div>
                    <div className="ml-10" >
                        <SvgCommentButton onClick={openComments} width={40} height={40} />
                        <p>93</p>
                    </div>
                    <div onClick={setBookmark}  className="ml-[200px] mt-1" >
                        {
                            BookMarked
                            ? <SvgBookmarkOrange width={36} height={36} />
                            : <SvgBookmark width={36} height={36} />
                        }
                        
                    </div>
                </div>
                <div className="flex text-2xl mt-[30px]">
                    <p className="text-primary">★ ★ ★ ★ ★ <span className="ml-2 text-gray-400">(4.6)</span></p>
                </div>
                
                <div className="grid grid-cols-12 mt-[30px]">
                    <Link
                    className="rounded-full col-start-1 col-end-3 mt-1 mr-5"
                    href="/"
                    >
                    <Image
                        className="border-white border-[2px] rounded-full"
                        src={DemoData.profiles[0].pic}
                        width={50}
                        height={50}
                        alt={"..."}
                    />
                    </Link>
                    <div className=" col-start-3 col-end-10 mt-[5px]">
                        <p>{DemoData.eventOrganizer}</p>
                        <span className="text-regular font-light text-[#767676]">
                            14 videos
                        </span>
                    </div>
                    <button  className="text-sm col-start-10 col-end-12 w-[100%] text-center mt-[7px] h-[35px] bg-primary text-white rounded-md ml-[28px]"> Follow  </button>
                </div>
                <p className="font-light mt-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus tristique bibendum. Sed et ultricies velit. Vestibulum imperdiet turpis id massa pharetra suscipit.</p>
                <div className="flex font-light mt-3">
                    <p className="text-gray-600"> 58:30 | Valid for 3 months </p>
                </div>
                
            </div>
            {ShareOpen && (
                <div
                   
                    className="bg-[#000000d8]"
                    >
                <Share openShare={openShare}/>
                </div>
            )}
            {CommentOpen && (
                <div
                    className="bg-[#000000d8]"
                    >
                <Comments openComments={openComments}/>
                </div>
            )}
            </MobileLayout>
        </div>
    )
}