"use client";

import React, {useRef, useState} from "react";
import { MobileLayout } from "../../../components/MobileLayout";
import Link from "next/link";
import { updateUser } from "../../../api/users/updateUser";
import ProfileImage from "./components/ProfileImage";
import InputField from "./components/InputField";
import BackButton from "../../../common/buttons/BackButton";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import SpinnerLoader from "../../../components/SpinnerLoader";

type InputData = {
  _id?:         string;
  username?:    string;
  fullName?:    string;
  email:       string;
  role:        string;
  image?:       string;
  is_online:   string;
  phoneNumber?: string;
  dateOfBirth: Date;
  country?:     string;
  state?:       string;
  city?:        string;
  interests:   string[];
  createdAt:   Date;
  updatedAt:   Date;
}

const EditProfile: React.FC = () => {
  const [data, setData] = useState<InputData>(JSON.parse(localStorage.getItem('immerUserData') || ""))
  const ref = useRef<HTMLFormElement>(null)
  const [loading, setLoading] = useState(false);
  const router = useRouter();
 const [inputData, setInputData] = useState({
  fullName: data?.fullName,
  username: data?.username,
  phoneNumber: data?.phoneNumber,
  dateOfBirth: data?.dateOfBirth,
  country: data?.country,
  state: data?.state,
  city: data?.city,
  interests: data?.interests
 })

 if(!data){
  router.push("/attendee-profile")
}

const formatDate = (date: string) => {
  const shortDate = date.split("T")[0];
  return shortDate;
}

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true);
  const response = await updateUser(inputData);
  if(response?.ok){
    toast.success('successful! Redirecting..')
    setTimeout(() => {
      router.push('/attendee-profile') 
    }, 2000);
    setLoading(false)
  } else {
    toast.error('failed. try again..')
    setLoading(false)
  }
}

  return (
  <MobileLayout>
    <div>
      <div className="relative flex px-[14px] gap-5 items-center py-5">
        <Link href="">
          <BackButton />
        </Link>
        <h1 className="font-bold text-lg">Edit Profile</h1>
      </div>
      <ProfileImage
        headerImgSrc="/assets/header-img.png"
        avatarImgSrc={data.image}
      />

      <div className="px-[14px]">
        <form onSubmit={handleSubmit} ref={ref} id="form" className="flex flex-col gap-3 my-4">
          <InputField onChange={(e) => {setInputData({...inputData, fullName: e.target.value})}} value={inputData.fullName} type="text" placeholder="Name" />
          <InputField onChange={(e) => {setInputData({...inputData, username: e.target.value})}} value={inputData.username} type="text" placeholder="Username" />
          <InputField onChange={(e) => {setInputData({...inputData, phoneNumber: e.target.value})}}  value={inputData.phoneNumber} type="text" placeholder="Phone number" />
          <InputField onChange={(e) => {setInputData({...inputData, dateOfBirth: e.target.value})}} value={formatDate(inputData.dateOfBirth.toString())} type="text" placeholder="Date of birth" />
          <InputField onChange={(e) => {setInputData({...inputData, country: e.target.value})}} value={inputData.country} type="text" placeholder="Country" />
          <InputField onChange={(e) => {setInputData({...inputData, state: e.target.value})}} value={inputData.state} type="text" placeholder="State" />
          <InputField onChange={(e) => {setInputData({...inputData, city: e.target.value})}} value={inputData.city} type="text" placeholder="City" />
          <InputField onChange={(e) => {setInputData({...inputData, interests: e.target.value.split(",")})}} value={inputData.interests.toString()} type="text" placeholder="Interests" />
          <button disabled={loading} className="bg-[#FF6C00] text-white px-5 py-2 rounded">Update</button>
        </form>
      </div>
    </div>
    {loading && <SpinnerLoader />}
    <ToastContainer autoClose={2000} position="top-center" />
  </MobileLayout>
  )
};

export default EditProfile;
