"use client"
import { useState } from "react"
import SvgWarningIconBig from "../../../../public/assets/Icons/WarningIconBig";
import Link from "next/link";
import SvgAlertIcon from "../../../../public/assets/Icons/AlertIcon";
import SignButton from "app/signup/components/SignButton";
import Feed from "../components/Feed";
import SimpleButton from "../components/SimpleButton";

export default function passwordForgot(){ 

    const [isFeedOpen, setIsFeedOpen] = useState(false);
    const [wrong, setWrong] = useState(false)

	const setFeedOpen = () => {
		setIsFeedOpen(true);
        setWrong(true)
	};

	const setFeedClose = () => {
		setIsFeedOpen(false);
	};



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
return(
    <div className="m-14 text-center bg-white text-black sm:invisible overflow-scroll ">
        <p className="text-2xl mt-8 font-semibold">Forgot your password?</p>
        <p className="text-lg font-light text-[#767676] mt-10">If you need help resetting your password, enter your email and we will help by sending you a link to reset it.</p>
        {
            wrong
                ?   <div className="flex text-start text-white bg-[#ff3030] mt-8 rounded-md" >
                        <SvgAlertIcon className="mx-2" width={50} height={50}/>
                        <p>Sorry, we couldn’t find an account with that username. You can try again or sign up if you don’t have an account.</p>
                    </div>
                :''
        }
        <form className="text-start mt-16">
        <p className="text-xl mt-5">Email</p>
                <input
                    style={{
                        borderColor:
                            emailCompleted
                            ? 'green'
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
                <SignButton title="Reset my password" able={emailCompleted} onClick={setFeedOpen}/>
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
                        <p className="text-3xl mt-8 font-semibold">No account was found</p>
                        <p className="font-light mt-16">Check your email and try again or sign up if you don't have an account.</p>
                        <SimpleButton text={'Ty again'} onClick={setFeedClose} />
                    </div>
			    </div>
        <Feed buttonText={'Try again'} title={'No account was found'} title2={"check your email and try again or sign up if you don't have an account."} isFeedOpen={isFeedOpen} setFeedClose={setFeedClose} link={true}/>
    </div>
)}