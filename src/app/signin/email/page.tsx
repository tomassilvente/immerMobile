"use client"
import { useState } from "react"
import SvgCheckBoxAccepted from "../../../../public/assets/Icons/CheckoxAccepted"
import SvgCheckBoxUnaccepted from "../../../../public/assets/Icons/CheckBoxUnaccepted"
import Link from "next/link"
import {loginUser} from '../../../api/auth/loginUser'
import SvgAlertIcon from "../../../../public/assets/Icons/AlertIcon"
import Feed from "../components/Feed"
import SignButton from "app/signup/components/SignButton"
import { useRouter } from "next/navigation"

export default function signInWithEmail(){ 

    interface FormData {
        email: string;
        password: string;
    }
   
    interface FormErrors {
        [key: string]: string;
    }
   
    const router = useRouter();
 
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
 
    const [errors, setErrors] = useState({});
 
    const validateField = (name: any, value: string | string[]) => {
        let error = "";
        switch (name) {
            case "email":
                error = !value.includes("@") || value.length < 3 ? "Valid email required" : "";
                break;
            case "password":
                error = value.length < 8 ? "Invalid password" : "";
                break;
            default:
                break;
        }
        setErrors(prev => ({ ...prev, [name]: error }));
    };
 
    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        validateField(name, value);
    };
 
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const response = await loginUser(formData);
        console.log(response)
 
        if (response.message === "Logged in successfully") {
            router.push("/home");
        }
        else setFeedOpen()
    };

    const [accepted, setAccepted] = useState(false)
    const [isFeedOpen, setIsFeedOpen] = useState(false)
    const [wrong, setWrong] = useState(false)

	const setFeedOpen = () => {
		setIsFeedOpen(true);
	};

	const setFeedClose = () => {
		setIsFeedOpen(false);
        setWrong(true)
	};

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
            <form className="text-start mt-10" onSubmit={handleSubmit}>
                <p className="text-xl mt-5">Email</p>
                <input name="email"  value={formData.email} onChange={handleChange} className="border rounded-md w-[100%] mt-3 py-4 pl-3 focus:border-black" placeholder="Enter Your Email" type="email" 
                    />
                <p className="text-xl mt-5">Password</p>
                <div>
                    <input
                        name="password" value={formData.password} onChange={handleChange} className="border rounded-md w-[100%] mt-3 py-4 pl-3 focus:border-black" placeholder="Enter Your Password" type="password" />
                    {errors.password && <span className="text-sm font-light text-[#ff3c3c] mt-3">{errors.password}</span>}
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
                <SignButton onClick={handleSubmit} able={!Object.values(errors).some(Boolean)} title="Sign Up"/>
            </form>
            <Feed title={'Account blocked'} title2={"check your email and try again or sign up if you don't have an account."} isFeedOpen={isFeedOpen} setFeedClose={setFeedClose} buttonText={'close'} link={false}/>
    </div>
        
    )}