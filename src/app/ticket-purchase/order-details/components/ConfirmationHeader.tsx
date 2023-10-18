import Image from "next/image";
import SvgBackButtonBlack from "../../../../../public/assets/Icons/BackButtonBlack";

import SvgLikeButtonBlack from "../../../../../public/assets/Icons/LikeButtonBlack";
import SvgShareButtonBlack from "../../../../../public/assets/Icons/shareButtonBlack";
import Link from "next/link";


export default function ConfirmationHeader({eventName, location, section, details}:any){
    return (
        <>
        <div className="grid grid-cols-12">
                <SvgBackButtonBlack className="col-start-1  "  width={45} height={45}/>
                <p className="text-center font-semibold text-2xl col-start-4 col-end-9 ml-6 mt-2" >{eventName}</p>
                <SvgLikeButtonBlack className="col-start-11 mr-10 mt-1 " width={75} height={75} />
                <SvgShareButtonBlack className="col-start-12 mr-5 " width={50} height={50} />
            </div>
            <div className="grid grid-cols-2">
                <Image className="mt-20" src='../../../assets/stadium-b&w.png' width={250} height={250} alt='...'/>
                <div className="mt-28 ">
                    <p className="text-lg font-semibold">{location} </p>
                    <p className="my-2">{section}</p>
                    <p>{details}</p>
                </div>
            </div>
            <Link href='/ticket-purchase'>
            <button
                type="submit"
                className="w-[25%] ml-[75%] mb-12 text-center text-lg bg-primary text-white mt-12 py-2 rounded-xl" 
            >
                Change Seat
            </button>  
            </Link>
        </>
    )
}