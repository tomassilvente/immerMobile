"use client"

import { useState } from "react"
import { useRouter } from "next/navigation";
import SvgCheckBoxUnaccepted from "../../../../public/assets/Icons/CheckBoxUnaccepted"
import SvgCheckBoxAccepted from "../../../../public/assets/Icons/CheckoxAccepted"
import SignButton from "../components/SignButton"
import { registerUser } from "../../../api/auth/registerUser";

export default function create(){ 
    
    interface FormData {
        fullName: string;
        username: string;
        email: string;
        password: string;
        passwordConfirm: string;
    }
   
    interface FormErrors {
        [key: string]: string;
    }
   
    const router = useRouter();
 
    const [formData, setFormData] = useState({
        fullName: "",
        username: "",
        email: "",
        password: "",
        passwordConfirm: "",
    });
 
    const [errors, setErrors] = useState({});
 
    const validateField = (name: any, value: string | string[]) => {
        let error = "";
        switch (name) {
            case "fullName":
                error = value.length < 2 ? "Valid name required" : "";
                break;
            case "username":
                error = value.length < 3 ? "Valid username required" : "";
                break;
            case "email":
                error = !value.includes("@") || value.length < 3 ? "Valid email required" : "";
                break;
            case "password":
                error = value.length < 8 ? "Invalid password" : "";
                break;
            case "passwordConfirm":
                error = value !== formData.password ? "Passwords must match" : "";
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
        const response = await registerUser(formData);
 
        if (response.statusCode === 500) {
            router.push("/signin/email");
        }
    };

    const [accepted, setAccepted] = useState(false)
    
    return (
        <div className="m-5 text-center bg-white text-black sm:invisible overflow-scroll">
            <p className="text-2xl mt-8 font-semibold">Create your account</p>
            <p className="text-lg font-light text-[#767676] mt-3">Create your personal account now to access all the  exclusive benefits  we have to offer.</p>
            <form className="text-start mt-10" onSubmit={handleSubmit}>
                <p className="text-xl mt-5">Full Name</p>
                <input 
                    style={{
                        borderColor:
                            errors.fullName
                            ? 'red'
                            : ''       
                    }}
                    name="fullName" value={formData.fullname} onChange={handleChange} className="border rounded-md w-[100%] mt-3 py-4 pl-3 focus:border-black" placeholder="Enter Your Full Name" type="text" />
                {errors.fullname && <span className="text-sm font-light text-[#ff3c3c] mt-3">{errors.fullname}</span>}
                <p className="text-xl mt-5">Username</p>
                <input 
                    style={{
                        borderColor:
                            errors.username
                            ? 'red'
                            : ''       
                    }}
                    name="username" value={formData.username} onChange={handleChange} className="border rounded-md w-[100%] mt-3 py-4 pl-3 focus:border-black" placeholder="Enter Your username" type="text" />
                {errors.username && <span className="text-sm font-light text-[#ff3c3c] mt-3">{errors.username}</span>}
                <p className="text-xl mt-5">Email</p>
                <input name="email"  value={formData.email} onChange={handleChange} className="border rounded-md w-[100%] mt-3 py-4 pl-3 focus:border-black" placeholder="Enter Your Email" type="email" 
                    style={{
                        borderColor:
                            errors.email
                            ? 'red'
                            : ''       
                    }}
                    />
                {errors.email && <span className="text-sm font-light text-[#ff3c3c] mt-3">{errors.email}</span>}
                <p className="text-xl mt-5">Password</p>
                <input
                    style={{
                        borderColor:
                            errors.password
                            ? 'red'
                            : ''
                    }}
                    name="password" value={formData.password} onChange={handleChange} className="border rounded-md w-[100%] mt-3 py-4 pl-3 focus:border-black" placeholder="Enter Your Password" type="password" />
                    {errors.password && <span className="text-sm font-light text-[#ff3c3c] mt-3">{errors.password}</span>}
                <p className="text-xl mt-5">Confirm Password</p>
                <input 
                   style={{
                    borderColor:
                        errors.passwordConfirm
                        ? 'red'
                        : ''       
                }}
                    name="passwordConfirm" value={formData.passwordConfirm} onChange={handleChange} className="border rounded-md w-[100%] mt-3 py-4 pl-3 focus:border-black" placeholder="Confirm Your Password" type="password" />
                  {errors.passwordConfirm && <span className="text-sm font-light text-[#ff3c3c] mt-3">{errors.confirmPassword}</span>}
                  <div className="flex mt-8" onClick={() => setAccepted(!accepted)}>
                    {accepted ? <SvgCheckBoxAccepted height={25} width={25} className="ml-1" /> : <SvgCheckBoxUnaccepted height={25} width={25} className="ml-1" />}
                    <label className="ml-2 mt-[1px] text-sm font-light text-[#767676]">I agree to Immer Terms of Service and Privacy Policy by creating my account.</label>
                </div>
                <SignButton onClick={handleSubmit} able={!Object.values(errors).some(Boolean) && accepted} title="Sign In" />
            </form>
        </div>
)}