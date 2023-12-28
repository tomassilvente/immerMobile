"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
//Components
import Details from '../../components/TicketDetails/Details'
import BottomTicket from '../../components/TicketDetails/BottomTicket'
import Share from "../../components/EventDetails/Share"
//Icons
import SvgBackButtonBlack from "../../../public/assets/Icons/BackButtonBlack"
import SvgShareButtonBlack from "../../../public/assets/Icons/shareButtonBlack"
import { MobileLayout } from "../../components/MobileLayout"

export default function ticketDetails(): JSX.Element{
    const [ShareOpen, setShareOpen] = useState(false)

    function openShare(){
      setShareOpen(!ShareOpen)
    }
    return(
        <MobileLayout>
        <div className="bg-[#FFD6B8] pb-5">
            <div className="grid grid-cols-6">
                <Link href='/home'><SvgBackButtonBlack className="col-start-1 col-end-1 ml-3 mt-5 " width={30} height={30}/></Link>
                <p className="text-2xl my-5 font-semibold ml-3 col-start-3 col-end-6">Your Ticket</p>
                <SvgShareButtonBlack onClick={openShare} className="col-start-6 col-end-6 ml-8 mt-5" width={30} height={30}/>
            </div>
            <div className="pb-8 bg-white m-10 rounded-3xl mb-10">
                <div className="pt-10 px-14">
                    <Image src='../../../../assets/qr.png' width={500} height={500} alt={'...'}/>
                </div>
                <Details/>
                <BottomTicket />
            </div>
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
