import Link from "next/link";
import SvgImmerIconOrange from "../../../../../public/assets/Icons/ImmerIconOrange";


export default function submitted(){
    return(
        <div className="m-14 text-center bg-white text-black sm:invisible overflow-scroll grid content-center place-items-center">
            <SvgImmerIconOrange width={50} height={50} className="mx-[45%]"/>
            <p className="text-4xl mt-8 font-semibold">Verify your account</p>
            <p className="text-lg font-light text-[#767676] mt-10">You must verify your account before accessing the Immer platform. We sent you a verification email to set up your account.</p>
            <p className="text-lg font-light text-[#767676] mt-52">Didn't reveice email.</p>
            <Link className="text-primary font-semibold" href='/'>Resend email.</Link>
        </div>
    )
}