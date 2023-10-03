import Image from "next/image"
//Components
import Details from "./components/details"
import BottomTicket from "./components/bottomTicket"
//Icons
import SvgBackButtonBlack from "../../../public/assets/Icons/BackButtonBlack"
import SvgShareButtonBlack from "../../../public/assets/Icons/shareButtonBlack"


export default function ticketDetails(){
    return(
        <div className="h-screen bg-[#FFD6B8] text-black sm:invisible overflow-scroll ">
            <div className="grid grid-cols-6 m-10">
                <SvgBackButtonBlack className="col-start-1 col-end-1 mt-5 " width={30} height={30}/>
                <p className="text-2xl my-5 font-semibold ml-5 col-start-3 col-end-5">Your Ticket</p>
                <SvgShareButtonBlack className="col-start-6 col-end-6 ml-14 mt-5" width={30} height={30}/>
            </div>
            <div className="pb-8 bg-white m-10 rounded-3xl mb-10">
                <div className="pt-10 px-14">
                    <Image src='../../../../assets/qr.png' width={500} height={500} alt={'...'}/>
                </div>
                <Details/>
                <BottomTicket />
            </div>
        </div>
    )
}