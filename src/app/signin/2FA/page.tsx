import Link from "next/link";



let able = true
   

export default function submitted(){
    return(
        <div className="m-14 text-center bg-white text-black sm:invisible overflow-scroll ">
            <p className="text-4xl mt-8 font-semibold">Verification</p>
            <p className="text-lg font-light text-[#767676] mt-10">We have sent a code to your email.</p>
            <p className="text-lg font-light text-[#767676] ">Please type the code to complete the 2FA verification.</p>
            <p className="text-2xl ml-2 text-start mt-24 font-semibold">Code</p>
            <form className="mt-8">
                <div className="flex">
                    <input required type="text" maxLength='1' className="border border-black w-[60px] h-[60px] ml-2 rounded-lg p-5 text-2xl"/>
                    <input required type="text" maxLength='1' className="border border-black w-[60px] h-[60px] ml-5 rounded-lg p-5 text-2xl"/>
                    <input required type="text" maxLength='1' className="border border-black w-[60px] h-[60px] ml-5 rounded-lg p-5 text-2xl"/>
                    <input required type="text" maxLength='1' className="border border-black w-[60px] h-[60px] ml-5 rounded-lg p-5 text-2xl"/>
                    <input required type="text" maxLength='1' className="border border-black w-[60px] h-[60px] ml-5 rounded-lg p-5 text-2xl"/>
                    <input required type="text" maxLength='1' className="border border-black w-[60px] h-[60px] ml-5 rounded-lg p-5 text-2xl"/>
                </div>
                {
                    able
                    ? <button
                        type="submit"
                        className="w-[100%] text-center text-2xl bg-primary text-white mt-32  py-5 rounded-full" 
                    >
                        Change password
                    </button>  
                    :
                    <div
                        className="w-[100%] text-center text-2xl bg-[#b8b8b8] text-white mt-32  py-5 rounded-full" 
                    >
                        Change password
                    </div> 
                }
            </form>
            <p className="text-lg font-light text-[#767676] mt-12">Didn't reveice email.</p>
            <Link className="text-primary font-semibold" href='/'>Resend email.</Link>
            
        </div>
    )
}