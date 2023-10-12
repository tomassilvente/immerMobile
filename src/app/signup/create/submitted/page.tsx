import Link from "next/link";
import SvgImmerIconOrange from "../../../../../public/assets/Icons/ImmerIconOrange";
import SvgInboxCheck from "../../../../../public/assets/Icons/InboxCheck";

export default function submitted(){
    return(
        <div className="m-14 text-center bg-white text-black sm:invisible overflow-scroll grid content-center place-items-center">
            <SvgImmerIconOrange width={50} height={50} className="mx-[45%]"/>
            <p className="text-4xl mt-8 font-semibold">Almost Done!</p>
            <p className="text-lg font-light text-[#767676] mt-3">We have sent a verification email to set up your account.</p>
            <SvgInboxCheck className="mt-20 mr-1"/>
            <p className="text-lg font-light text-[#767676] mt-40">Didn't reveice email.</p>
            <Link className="text-primary font-semibold" href='/'>Resend email.</Link>
        </div>
    )
}