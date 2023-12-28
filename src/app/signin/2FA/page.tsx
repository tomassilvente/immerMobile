/* eslint-disable react/no-unescaped-entities */
import SignButton from "../../../components/SignUp/SignButton";
import Link from "next/link";
   
export default function Submitted(): JSX.Element{
    return(
        <div className="font-Inter relative max-w-[480px] m-auto">
        <div className="m-5 text-center bg-white text-black sm:invisible overflow-scroll ">
            <p className="text-4xl mt-8 font-semibold">Verification</p>
            <p className="text-lg font-light text-[#767676] mt-10">We have sent a code to your email.</p>
            <p className="text-lg font-light text-[#767676] ">Please type the code to complete the 2FA verification.</p>
            <p className="text-2xl ml-2 text-start mt-24 font-semibold">Code</p>
            <form className="mt-8">
                <div className="flex">
                    <input required type="text" maxLength={1} className="border border-black w-[60px] h-[60px] ml-2 rounded-lg p-5 text-2xl"/>
                    <input required type="text" maxLength={1} className="border border-black w-[60px] h-[60px] ml-3 rounded-lg p-5 text-2xl"/>
                    <input required type="text" maxLength={1} className="border border-black w-[60px] h-[60px] ml-3 rounded-lg p-5 text-2xl"/>
                    <input required type="text" maxLength={1} className="border border-black w-[60px] h-[60px] ml-3 rounded-lg p-5 text-2xl"/>
                    <input required type="text" maxLength={1} className="border border-black w-[60px] h-[60px] ml-3 rounded-lg p-5 text-2xl"/>
                    <input required type="text" maxLength={1} className="border border-black w-[60px] h-[60px] ml-3 rounded-lg p-5 text-2xl"/>
                </div>
                <SignButton able={true} title="Sign In" onClick={undefined}/>
            </form>
            <p className="text-lg font-light text-[#767676] mt-12"> Didn't recieve email.</p>
            <Link className="text-primary font-semibold" href='/'>Resend email.</Link>
            </div>
        </div>
  )
}
