"use client"
import Link from "next/link";
import { MobileLayout } from "../../../components/MobileLayout";
import Image from "next/image";
import DemoData from '../../../../public/data/DemoData.json'
import SvgLikeButton from "../../../../public/assets/Icons/LikeButton";
import SvgCommentButton from "../../../../public/assets/Icons/CommentButton";
import { useState } from "react";
import SvgRedHeart from "../../../../public/assets/Icons/RedHeart";

export default function reels(){

    const [LikeButton, setLikeButton] = useState(false)

    function setLiked(){
        setLikeButton(!LikeButton)
    }

    return(
        <MobileLayout>
             <div className="absolute flex mt-[715px] text-white">
                    <Link
                    className="rounded-full mx-5 mt-[135px]"
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
                    <div className=" mt-[150px]">
                        <p>{DemoData.eventOrganizer}</p>
                    </div>
                    <button  className="text-sm w-[70px] text-center mt-[145px] h-[35px] bg-primary text-white rounded-md ml-[28px]"> Follow  </button>
                    <div className="ml-[140px]">
                    <div onClick={setLiked}>
                        {
                            LikeButton
                            ?<>
                            <SvgRedHeart width={40} height={40} />
                            <p className="ml-[4px]">577</p>
                            </>
                            :<>
                            <SvgLikeButton width={40} height={40} />
                            <p className="ml-[4px]"> 576</p>
                            </>
                        }
                    </div>
                        <SvgCommentButton width={35} height={40} />
                        <p className="ml-[4px]">576</p>
                        <SvgLikeButton width={35} height={40} />
                    </div>
                </div>
        <div
          className="bg-[#000000d8]  items-center"
        >
          <video width="480"  className="w-[480px] h-[950px]" controls>
            <source
              src="/assets/TB.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
       
        </MobileLayout>
    )
}