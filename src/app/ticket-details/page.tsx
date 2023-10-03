import Image from "next/image"
import Link from "next/link"
//Components
import Details from "./components/details"
//Icons
import SvgBackButtonBlack from "../../../public/assets/Icons/BackButtonBlack"
import SvgShareButtonBlack from "../../../public/assets/Icons/shareButtonBlack"
import SvgElipseLeft from "../../../public/assets/Icons/ElipseLeft"
import SvgElipseRigth from "../../../public/assets/Icons/ElipseRigth"
import SvgTicketLine from "../../../public/assets/Icons/ticketLine"

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
                <div className="flex">
                    <SvgElipseLeft />
                    <SvgTicketLine className="mt-6" />
                    <SvgTicketLine className="mt-6" />
                    <SvgElipseRigth />
                </div>
                <Link
                    href='/' 
                    className="grid text-center text-2xl bg-primary text-white mx-8 py-5 rounded-full" 
                >
                    Download Ticket
                </Link>       
            </div>
        </div>
    )
}