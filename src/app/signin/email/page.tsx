"use client"
import { useState } from "react"
import SvgCheckBoxAccepted from "../../../../public/assets/Icons/CheckoxAccepted"
import SvgCheckBoxUnaccepted from "../../../../public/assets/Icons/CheckBoxUnaccepted"
import Link from "next/link"
import SvgAlertIcon from "../../../../public/assets/Icons/AlertIcon"
import Feed from "../components/Feed"
import SignButton from "app/signup/components/SignButton"
import { redirect } from "next/navigation"

export default function signInWithEmail(){ 

    const formControl = async() =>{
        let formulario = document.getElementById('form')
        let data = {
            email:email,
            password: password,  
        }
        let response = await fetch('https://immer-backend-dev-kenx.2.us-1.fl0.io/api/auth/login',{
            method: 'POST',
            headers: {
                'Accept':'aplication/json',
                'Content-Type': 'aplication/json'
            },
            body: JSON.stringify(data)
        })
        response = response.json()
        if(response.status === 200) redirect('/home')
         else setFeedOpen()
    }



    //Email Validation
    const [emailCompleted, setEmailCompleted] = useState(false)
    const [emailIncompleted, setEmailIncompleted] = useState(false)
    const [email, setEmail] = useState('')

    const isEmailCompleted = (email: string) =>{
        if(email.length > 2 && email.includes('@' && '.')){
            setEmailCompleted(true)
            setEmail(email)
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
     const [password, setPassword] = useState('')

     const setIsCorrect = (password : string) =>{
        if(password.length > 7){ 
            setPassword(password)
            setPasswordCompleted(true)
        }
        else setPasswordCompleted(false)
    }

    const [accepted, setAccepted] = useState(false)
    const [isFeedOpen, setIsFeedOpen] = useState(false)

	const setFeedOpen = () => {
		setIsFeedOpen(true);
	};

	const setFeedClose = () => {
		setIsFeedOpen(false);
        setWrong(true)
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
                <div>
                    
                    <input
                        onChange={(e)=> setIsCorrect(e.target.value)}
                        style={{
                            borderColor:
                                wrong
                                ? 'red'
                                :''
                                
                        }}
                        className="border rounded-md w-[100%] mt-3 py-4 pl-3 focus:border-black after:border-[5px]" placeholder="Enter Your Password" id="password" name="password" type="password">
                   
                    </input>    
                    {
                    wrong
                        ? <span className="text-sm font-light text-[#ff3c3c] mt-3">Invalid Password</span>
                        : ''
                    }
                    <br />
                    <span className="font-light text-[#767676]">At least 8 characters, 1 uppercase letter, 1 number, 1 symbol</span>   
                    
                </div>
                <div className="flex mt-8">
                    {
                        accepted
                        ? <SvgCheckBoxAccepted onClick={e=> e.target.addEventListener('click', setAccepted(false) )} id='acceptedBox' height={25} width={25} className="ml-1"/>
                        : <SvgCheckBoxUnaccepted onClick={e=> e.target.addEventListener('click', setAccepted(true) )} id='unAcceptedBox' height={25} width={25} className="ml-1"/>
                    }
                    <label className="ml-2 mt-[1px] text-sm font-light text-[#767676]">Remember me</label>
                    <Link className="ml-[43%] text-sm font-semibold" href={'/signin/password-forgot'}>Forgot Password?</Link>
                </div>
                <SignButton title='Sign In' able={able} onClick={formControl}/>
            </form>
            <Feed title={'Account blocked'} title2={"check your email and try again or sign up if you don't have an account."} isFeedOpen={isFeedOpen} setFeedClose={setFeedClose} buttonText={'close'} link={false}/>
    </div>
        
    )}