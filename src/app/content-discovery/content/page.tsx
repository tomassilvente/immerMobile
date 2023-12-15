"use client"

import EventHeader from "../../../components/EventHeader";
import { MobileLayout } from "../../../components/MobileLayout";

import DemoData from '../../../../public/data/DemoData.json'
import SvgOpenEye from "../../../../public/assets/Icons/OpenEye";
import SvgLikeButton from "../../../../public/assets/Icons/LikeButton";
import SimpleButton from "app/signin/components/SimpleButton";
import SvgCommentButton from "../../../../public/assets/Icons/CommentButton";
import Link from "next/link";
import { useState } from "react";
import BillDetails from "app/ticket-purchase/payment-details/components/BillDetails";
import SvgDropDownIcon from "../../../../public/assets/Icons/DropDownIcon";
import SvgDropDownVector from "../../../../public/assets/Icons/DropDownVector";
import SvgRedHeart from "../../../../public/assets/Icons/RedHeart";
import Comments from "../../../components/Comments";

export default function content({payment=true}: any){

    const [isFeedOpen, setIsFeedOpen] = useState(false);

    const [LikeButton, setLikeButton] = useState(false)

    function setLiked(){
        setLikeButton(!LikeButton)
    }
  
    const setFeedOpen = () => {
      setIsFeedOpen(true);
    };
  
    const setFeedClose = () => {
      setIsFeedOpen(false);
    };
  
    const [CommentOpen, setCommentOpen] = useState(false)

    function openComments(){
      setCommentOpen(!CommentOpen)
    }


    return(
        <div 
            >
        <MobileLayout >
            {
                payment
                    ? 
                    isFeedOpen? ''
                    :<video width="480"  className="w-[480px]" controls>
                        <source
                        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
                        type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                    : <EventHeader eventImg={isFeedOpen ? '../../assets/black.jpg' : '../../assets/piano.jpeg'}/>
            }
            
            <div className="m-4">
                <div className="flex">
                    <p className="text-xl font-semibold">{DemoData.eventCompanionName}</p>
                    <p className="text-primary ml-20">★ ★ ★ ★ ★ <span className="ml-2 text-gray-400">(4.6)</span></p>
                </div>
                <p className="font-light ">{DemoData.eventOrganizer}</p>
                <p className="text-2xl font-semibold text-gray-600 mt-2">${DemoData.eventPrice}.99</p>
                <hr className="w-[35px] border-primary border-[2px] mt-2" /> 
                <p className="mt-10 text-2xl">About</p>
                <p className="font-light mt-2">{DemoData.eventDescription}</p>
                <div className="flex font-light mt-3">
                    <p className="text-gray-600"> 58:30 | Valid for 3 months </p>
                </div>
                <div className="flex mt-8 text-center font-light">
                    <div>
                        <SvgOpenEye width={40} height={40} />
                        <p>223K</p>
                    </div>
                    <div className="ml-10">
                    <div onClick={setLiked}>
                        {
                            LikeButton
                            ?<>
                            <SvgRedHeart width={40} height={40} />
                            <p className="">577</p>
                            </>
                            :<>
                            <SvgLikeButton width={40} height={40} />
                            <p className=""> 576</p>
                            </>
                        }
                    </div>
                    </div>
                    <div className="ml-10">
                        <SvgCommentButton onClick={openComments} width={40} height={40} />
                        <p>93</p>
                    </div>
                </div>
                <SimpleButton text='Buy and watch' onClick={setFeedOpen}/>
                
                {
                    isFeedOpen
                    ? (
                            <div className=" bg-white absolute h-[100vh] w-[448px] top-6 z-10 items-center">
                                <SvgDropDownIcon onClick={setFeedClose} className="ml-[45%] mt-2"/>
                                <div className=" m-5 flex">
                                    <p className="font-semibold text-xl mt-3 text-gray-600">Payment Details</p>
                                    <SvgDropDownVector onClick={setFeedClose} className="ml-[55%] mt-6"/>
                                </div>
                                <div className="m-5 p-3 border border-primary rounded-xl  bg-[#faf5f2]">
                                    <p className="text-xl font-semibold mt-2">{DemoData.eventOrganizer}</p>
                                    <p className="font-light text-lg mt-1"> {DemoData.eventCompanionName}</p>
                                    <div className="flex">
                                        <p className="text-2xl text-gray-600 mt-2">${DemoData.eventPrice}.99</p>
                                        <Link className="text-primary ml-[65%] text-xl mt-2" href='/'>Detail</Link>
                                    </div>
                                </div>
                                <div className="m-3 mt-[-80px]">
                                    <BillDetails />
                                    <div className="bg-[#FFF0E5] mt-16 p-10 rounded-t-xl">
                                        <div className="grid grid-cols-4 text-xl mb-4">
                                            <p className="font-light col-start-1 col-end-4 ">Price:</p>
                                            <p className="col-start-4 ml-10">
                                            ${DemoData.eventPrice}
                                            </p>
                                        </div>
                                        <hr />
                                        <div className="grid grid-cols-4 text-xl mt-4">
                                            <p className=" col-start-1 col-end-4">Total:</p>
                                            <p className="col-start-4 text-primary ml-10">
                                            ${DemoData.eventPrice}
                                            </p>
                                        </div>
                                        <Link
                                            href="/content-discovery/content/confirmation"
                                            className="w-[100%] grid text-center text-2xl bg-primary text-white mt-24 py-5 rounded-full"
                                        >
                                            Buy and watch
                                        </Link>
                                    </div>
                                </div>
                            </div>
                      )
                    : ''
                }
            </div>
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