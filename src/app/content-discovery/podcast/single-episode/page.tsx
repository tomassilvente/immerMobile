"use client"
import { useState } from "react";
import { MobileLayout } from "../../../../components/MobileLayout";
import SingleHeader from "../components/SingleHeader";
import Share from "../../../../components/EventDetails/Share";

export default function SingleEpisode(): JSX.Element{
    const [ShareOpen, setShareOpen] = useState(false)

    function openShare(){
      setShareOpen(!ShareOpen)
    }
    return(
        <MobileLayout>
            <SingleHeader openShare={openShare} eventTitle='Brooks Davis' releaseDay='Oct 3' duration={45} eventImg={'../../assets/Vert3.png'}/>
            <p className="font-light m-5 text-gray-600">Lorem ipsum dolor sit amet consectetur. Euismod non arcu malesuada pharetra nulla eu ut aliquam. Dui purus risus arcu at ac tristique purus. Adipiscing pretium vel pellentesque lectus semper aliquam quis velit. Risus suspendisse gravida felis eget enim ultricies ullamcorper massa. Ultrices nulla id eget vel diam senectus tempus tristique. Viverra at nisl magna mauris neque leo donec.</p>
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