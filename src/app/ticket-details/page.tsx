import React from 'react'
import Image from 'next/image'
// Components
import Details from './components/Details'
import BottomTicket from './components/BottomTicket'
// Icons
import SvgBackButtonBlack from '../../../public/assets/Icons/BackButtonBlack'
import SvgShareButtonBlack from '../../../public/assets/Icons/shareButtonBlack'
import { MobileLayout } from '../../components/MobileLayout'

export default function ticketDetails (): JSX.Element {
  return (
        <MobileLayout>
        <div className="bg-[#FFD6B8] pb-5">
            <div className="grid grid-cols-6">
                <SvgBackButtonBlack className="col-start-1 col-end-1 ml-3 mt-5 " width={30} height={30}/>
                <p className="text-2xl my-5 font-semibold ml-3 col-start-3 col-end-6">Your Ticket</p>
                <SvgShareButtonBlack className="col-start-6 col-end-6 ml-8 mt-5" width={30} height={30}/>
            </div>
            <div className="pb-8 bg-white m-10 rounded-3xl mb-10">
                <div className="pt-10 px-14">
                    <Image src='../../../../assets/qr.png' width={500} height={500} alt={'...'}/>
                </div>
                <Details/>
                <BottomTicket />
            </div>
        </div>
        </MobileLayout>
  )
}
