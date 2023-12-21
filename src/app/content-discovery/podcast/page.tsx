"use client"
import { useState } from "react";
import { MobileLayout } from "../../../components/MobileLayout";
import PodcastHeader from "./components/PodcastHeader";
import Episodes from "./components/Episodes";
import About from "./components/About";
import Link from "next/link";
import Share from "../../../components/EventDetails/Share";

export default function Podcast(): JSX.Element{

    const [ShareOpen, setShareOpen] = useState(false)

    function openShare(){
      setShareOpen(!ShareOpen)
    }

    let options = ['Episodes', 'About'] 
    const [activeDayIndex, setActiveDayIndex] = useState<number | null>(0);

    let podcasts = [
        {
            title: 'Brooks Davis Live',
            image: '../assets/podcast.png',
            releaseDay: 'Oct 3',
            duration: 45,
            about: 'Lorem ipsum dolor sit amet consectetur. Neque dui sit venenatis pulvinar lacus diam. Tellus condimentum neque sapien velit pretium endrerit...'
        },
        {
            title: 'Brooks Davis Live',
            image: '../assets/podcast.png',
            releaseDay: 'Oct 3',
            duration: 45,
            about: 'Lorem ipsum dolor sit amet consectetur. Neque dui sit venenatis pulvinar lacus diam. Tellus condimentum neque sapien velit pretium endrerit...'
        },
        {
            title: 'Brooks Davis Live',
            image: '../assets/podcast.png',
            releaseDay: 'Oct 3',
            duration: 45,
            about: 'Lorem ipsum dolor sit amet consectetur. Neque dui sit venenatis pulvinar lacus diam. Tellus condimentum neque sapien velit pretium endrerit...'
        },
    ]

    return(
        <MobileLayout>
            <Link href={'/content-discovery/podcast/onPlay'}>
                <PodcastHeader eventTitle='Brooks Davis' category='Comedy' listeners='11.2K' eventImg={'../assets/Vert3.png'}/>
            </Link>
            <div className="m-3">
                <div className="flex overflow-x-scroll">
                    {options.map((option, index) => (
                        <div
                        onClick={() => setActiveDayIndex(index)}
                        className={` flex-none mr-3 font-light p-1 px-4 text-center 
                                    ${
                                    activeDayIndex === index
                                        ? "font-semibold text-black"
                                        : "hover:cursor-pointer text-[#717171]"
                                    }`}
                        key={index}

                        >
                        <p className="" >{option}</p>
                        {activeDayIndex === index
                            ?<hr className="w-[35px] border-primary border-[2px] mt-2" /> 
                            :''
                        }   
                </div>
                    ))}
                </div>
                {
                    activeDayIndex == 0
                    ? 
                        podcasts.map(podcast =>(
                            <Episodes openShare={openShare} title={podcast.title} image={podcast.image} about={podcast.about} releaseDay={podcast.releaseDay} duration={podcast.duration} />
                            ))
                    : (
                        <About category="comedy" stars={4.5} about="Lorem ipsum dolor sit amet consectetur. Euismod non arcu malesuada pharetra nulla eu ut aliquam. Dui purus risus arcu at ac tristique purus. Adipiscing pretium vel pellentesque lectus semper aliquam quis velit. Risus suspendisse gravida felis eget enim ultricies ullamcorper massa. Ultrices nulla id eget vel diam senectus tempus tristique. Viverra at nisl magna mauris neque leo donec."/>
                    )
                }
            </div>
            {ShareOpen && (
                <div
                    className="bg-[#000000d8]"
                    >
                <Share openShare={openShare}/>
                </div>
            )}
        </MobileLayout>
    )
}