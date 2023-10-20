"use client"

import { useState } from "react"
import SvgCheckBoxUnaccepted from "../../../../public/assets/Icons/CheckBoxUnaccepted"
import SvgCheckBoxAccepted from "../../../../public/assets/Icons/CheckoxAccepted"
import SignButton from "../components/SignButton"

export default function create(){ 

    //First Password Validations
    const [wrong, setWrong] = useState(false)
    const [correct, setCorrect] = useState(false)
    const [password, setPassword] = useState('')
    
    const setIsCorrect = (password : string) =>{
        if(password.length > 7  ){
            setCorrect(true)
            setWrong(false)
            setPassword(password)
        }
        else {
            setWrong(true)
            setCorrect(false)
        }
    }
    
    //Password match Validation
    const [differents, setDifferents] = useState(false)
    const [equals, setEquals] = useState(false)
    
    const passwordMatch = (confirmation:string) =>{
        if(password == confirmation){
            setEquals(true)
            setDifferents(false)
        }
        else {
            setEquals(false)
            setDifferents(true)
        }
    }
    
    //Name Validation
    const [nameCompleted, setNameCompleted] = useState(false)
    const [nameIncompleted, setNameInompleted] = useState(false)

    const isNameCompleted = (name: string) =>{
        if(name.length > 1){
            setNameCompleted(true)
            setNameInompleted(false)
        }
        else {
            setNameCompleted(false)
            setNameInompleted(true)
        }
    }

    //Last Name Validation
    const [lastCompleted, setLastCompleted] = useState(false)
    const [lastIncompleted, setLastIncompleted] = useState(false)

    const isLastCompleted = (last: string) =>{
        if(last.length > 2){
            setLastCompleted(true)
            setLastIncompleted(false)
        }
        else {
            setLastCompleted(false)
            setLastIncompleted(true)
        }
    }

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

    const [accepted, setAccepted] = useState(false)
    let able = false
    if(equals && correct && accepted && nameCompleted && lastCompleted && emailCompleted)
        able = true
    else able=false
    
    
    return (
        <div className="m-5 text-center bg-white text-black sm:invisible overflow-scroll">
            <p className="text-2xl mt-8 font-semibold">Create your account</p>
            <p className="text-lg font-light text-[#767676] mt-3">Create your personal account now to access all the  exclusive benefits  we have to offer.</p>
            <form className="text-start mt-10" id='form'>
                <p className="text-xl mt-5">First Name</p>
                <input 
                    onChange={(e)=> isNameCompleted(e.target.value)}
                    className="border rounded-md w-[100%] mt-3 py-4 pl-3 focus:border-black" placeholder="Enter Your First Name" id="name" name="name" type="text"/>
                {
                    nameCompleted
                        ? ''
                        :(
                            nameIncompleted
                            ? <span className="text-sm font-light text-[#ff3c3c] mt-3">Valid name Required</span>
                            : ''
                            )
                    }
                <p className="text-xl mt-5">Last Name</p>
                <input 
                     onChange={(e)=> isLastCompleted(e.target.value)}
                    className="border rounded-md w-[100%] mt-3 py-4 pl-3 focus:border-black" placeholder="Enter Your Last Name" id="last" name="last" type="text"/>
                {
                    lastCompleted
                        ? ''
                        :(
                            lastIncompleted
                            ? <span className="text-sm font-light text-[#ff3c3c] mt-3">Valid Last name Required</span>
                            : ''
                            )
                    }
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
                            correct
                            ? 'green'
                            : (wrong 
                                ? 'red'
                                : ''
                            )
                    }}
                    className="border rounded-md w-[100%] mt-3 py-4 pl-3 focus:border-black after:border-[5px]" placeholder="Enter Your Password" id="password" name="password" type="password"/>
                {
                correct
                    ?<span className="text-sm font-light text-[#439829] mt-3">Valid Password</span>
                    :(wrong
                        ? <span className="text-sm font-light text-[#ff3c3c] mt-3">Invalid Password</span>
                        : '')
                }   
                <p className="text-xl mt-5">Confirm Password</p>
                <input 
                    onChange={ e => passwordMatch(e.target.value)}
                    
                    style={{
                        borderColor:
                            equals
                            ? 'green'
                            : (differents 
                                ? 'red'
                                : ''
                            )
                    }}
                    className="border rounded-md w-[100%] mt-3 py-4 pl-3 focus:border-black" placeholder="Enter Your Password" id="confirmPassword" name="confirmPassword" type="password"/>
                {
                differents
                    ?<><span className="text-sm font-light text-[#ff3c3c] mt-3">Passwords must match</span><br/></>
                    :<br/>
                } 
                <div className="flex mt-8">
                    {
                        accepted
                        ? <SvgCheckBoxAccepted onClick={e=> e.target.addEventListener('click', setAccepted(false) )} id='acceptedBox' height={25} width={25} className="ml-1"/>
                        : <SvgCheckBoxUnaccepted onClick={e=> e.target.addEventListener('click', setAccepted(true) )} id='unAcceptedBox' height={25} width={25} className="ml-1"/>
                    }
                    <label className="ml-2 mt-[1px] text-sm font-light text-[#767676]">I agree to Immer Terms of Service and Privacy Policy by creating my account.</label>
                </div>
                <SignButton able={able} title="Sign Up" />
            </form>
        </div>
)}