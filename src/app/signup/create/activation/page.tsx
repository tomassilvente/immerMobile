import Link from "next/link";
import SvgImmerIconOrange from "../../../../../public/assets/Icons/ImmerIconOrange";
import SvgInboxCheck from "../../../../../public/assets/Icons/InboxCheck";

export default function submitted(){
    return(
        <div className="m-14 text-center bg-white text-black sm:invisible overflow-scroll grid content-center place-items-center">
            <SvgImmerIconOrange width={50} height={50} className="mx-[45%]"/>
            <p className="text-4xl mt-8 font-semibold">Welcome to Immer</p>
            <p className="text-lg font-light text-[#767676] mt-10">Your account is active.</p>
            <p className="text-lg font-light text-[#767676] "> Are you ready to Experience the Evolution of Entertainment?</p>
            <Link
                href='/' 
                className="w-[100%] mt-[400px] text-center text-2xl bg-primary text-white   py-5 rounded-full" 
            >
                Let's get started!
            </Link>
        </div>
    )
}