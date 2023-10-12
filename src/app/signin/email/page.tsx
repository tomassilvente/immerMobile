"use client"
import { useState } from "react"
import SvgCheckBoxAccepted from "../../../../public/assets/Icons/CheckoxAccepted"
import SvgCheckBoxUnaccepted from "../../../../public/assets/Icons/CheckBoxUnaccepted"
import Link from "next/link"
import SvgAlertIcon from "../../../../public/assets/Icons/AlertIcon"
import SvgWarningIconBig from "../../../../public/assets/Icons/WarningIconBig"

export default function signInWithEmail(){ 

    //Email Validation
    const [emailCompleted, setEmailCompleted] = useState(false)
    const [emailIncompleted, setEmailIncompleted] = useState(false)

    const isEmailCompleted = (email: string) =>{
        if(email.length > 2 && email.includes('@' && '.')){
            setEmailCompleted(true)
            setEmailIncompleted(false)
        }
        else {
            setEmailCompleted(false)
            setEmailIncompleted(true)
        }
    }

     //First Password Validations
     const [wrong, setWrong] = useState(false)
     const [passwordCompleted, setPasswordCompleted] = useState(false)

     const setIsCorrect = (password : string) =>{
        if(password.length > 2) setPasswordCompleted(true)
        else setPasswordCompleted(false)
         if(password == 'aaaaaaaa'){
            setWrong(false)
         }
         else {
            setWrong(true)
         }
    }

    const [accepted, setAccepted] = useState(false)



    const [isFeedOpen, setIsFeedOpen] = useState(false)

	const setFeedOpen = () => {
		setIsFeedOpen(true);
        setWrong(true)
	};

	const setFeedClose = () => {
		setIsFeedOpen(false);
	};

    let able = false
    if(passwordCompleted && emailCompleted)
        able = true
    else able=false

    return (
        <div className="m-14 text-center bg-white text-black sm:invisible overflow-scroll ">
            <p className="text-4xl mt-8 font-semibold">Welcome back!</p>
            <p className="text-lg font-light text-[#767676] mt-10">Login to your account.</p>
            {
            wrong
                ?   <div className="flex text-start text-white bg-[#ff3030] mt-8 rounded-md" >
                        <SvgAlertIcon className="mx-2" width={50} height={50}/>
                        <p>Incorrect email or password. 
                            2 login attemps remaining before the account is blocked.</p>
                    </div>
                :''
        }
            <form className="text-start mt-10">
                <p className="text-xl mt-5">Email</p>
                <input
                    style={{
                        borderColor:
                            emailCompleted
                            ? ''
                            : (emailIncompleted 
                                ? 'red'
                                : ''
                            )
                    }}
                    onChange={(e)=> isEmailCompleted(e.target.value)}
                    className="border rounded-md w-[100%] mt-3 py-4 pl-3 focus:border-black " placeholder="Enter Your Email" id="email" name="email" type="email"/>
                {
                    emailCompleted
                        ? ''
                        :(
                            emailIncompleted
                            ? <span className="text-sm font-light text-[#ff3c3c] mt-3">Valid email Required</span>
                            : ''
                            )
                    }
                <p className="text-xl mt-5">Password</p>
                <input
                    onChange={(e)=> setIsCorrect(e.target.value)}
                    style={{
                        borderColor:
                            wrong
                            ? 'red'
                            :''
                            
                    }}
                    className="border rounded-md w-[100%] mt-3 py-4 pl-3 focus:border-black after:border-[5px]" placeholder="Enter Your Password" id="password" name="password" type="password"/>
                {
                wrong
                    ? <span className="text-sm font-light text-[#ff3c3c] mt-3">Invalid Password</span>
                    : ''
                }
                <br />
                <span className="font-light text-[#767676]">At least 8 characters, 1 uppercase letter, 1 number, 1 symbol</span>   
                
                <div className="flex mt-8">
                    {
                        accepted
                        ? <SvgCheckBoxAccepted onClick={e=> e.target.addEventListener('click', setAccepted(false) )} id='acceptedBox' height={25} width={25} className="ml-1"/>
                        : <SvgCheckBoxUnaccepted onClick={e=> e.target.addEventListener('click', setAccepted(true) )} id='unAcceptedBox' height={25} width={25} className="ml-1"/>
                    }
                    <label className="ml-2 mt-[1px] text-sm font-light text-[#767676]">Remember me</label>
                    <Link className="ml-[43%] text-sm font-semibold" href={'/signin/password-forgot'}>Forgot Password?</Link>
                </div>
                {
                    able
                    ? <button
                        onClick={setFeedOpen}
                        type="submit"
                        className="w-[100%] text-center text-2xl bg-primary text-white mt-12  py-5 rounded-full" 
                    >
                        Sign Up
                    </button>  
                    :
                    <div
                        className="w-[100%] text-center text-2xl bg-[#b8b8b8] text-white mt-12  py-5 rounded-full" 
                    >
                        Sign Up
                    </div> 
                }
            </form>
            <div
            className={`bg-[#000000d8] bottom-0 h-[100vh] left-0 fixed right-0 top-0 w-[100%] z-10`}
            style={{
                        alignItems:
                            isFeedOpen? "center"
                            :   '',
                        display:
                            isFeedOpen? "flex"
                            : 'none'
                    }}>
                    <div className="bg-white grid content-center place-items-center m-14 p-10 mx-20 rounded-[40px]">
                        <SvgWarningIconBig />
                        <p className="text-3xl mt-16 font-semibold">Account blocked</p>
                        <p className="font-light mt-16">This account has been blocked for XX minutes because of too many login attempts. 
                            Please, try again later or contact us.  
                        </p>
                        <button
                        onClick={setFeedClose}
                        className="w-[100%] text-center text-2xl bg-primary text-white mt-24 py-5 rounded-3xl" 
                        >
                            Close
                        </button> 
                    </div>
			    </div>
    </div>
        
    )}