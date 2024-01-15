'use client'

import React, { useEffect, useState } from 'react'
import { MobileLayout } from '../../../components/MobileLayout'
import Link from 'next/link'
import { updateUser } from '../../../server-actions/users/updateUser'
import ProfileImage from '../../../components/AttendeeProfile/ProfileImage'
import InputField from '../../../components/AttendeeProfile/InputField'
import BackButton from '../../../components/_common/buttons/BackButton'
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify'
import SpinnerLoader from '../../../components/Chat-Threads/SpinnerLoader'
import useForm from '../../../server-actions/attendee-profile/hooks/useForm'
import { formatDate } from '../../../server-actions/attendee-profile/functions/formatDate'
import useFetchUser from '../../../server-actions/auth/useFetchUser'
import { Cookies, useCookies } from 'react-cookie'

const EditProfile: React.FC = () => {
  const router = useRouter()

  const [cookies] = useCookies(['usertoken']); 
  const [loading, setLoading] = useState(false)
  const userToken = cookies.usertoken || 'defaultUserToken';
  
  const { data: userData, loading: userLoading, error } = useFetchUser(userToken)
  const initialData = (userData != null) ? userData : {}
  const { formState, handleInputChange } = useForm(initialData)

  useEffect(() => {
    if (userData) {
      handleInputChange(new CustomEvent('userDataChange', { detail: { value: userData } }))
    }
  }, [userData])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    setLoading(true)
    updateUser(formState)
      .then(response => {
        if (response?.ok) {
          toast.success('successful! Redirecting..')
          setTimeout(() => {
            router.push('/attendee-profile')
          }, 2000)
        } else {
          toast.error('failed, please try again...')
        }
      })
      .catch(error => {
        toast.error('Ups! We are having an error, please try again...')
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <MobileLayout>
      <div className="relative flex px-[14px] gap-5 items-center py-5">
        <Link href="/attendee-profile">
          <BackButton />
        </Link>
        <h1 className="font-bold text-lg">Edit Profile</h1>
      </div>
      <ProfileImage
        headerImgSrc="/assets/header-img.png"
        avatarImgSrc={formState.image}
      />

      <form onSubmit={handleSubmit} id="form" className="flex flex-col gap-3 my-4 px-[14px]">
        <InputField onChange={handleInputChange} value={formState.fullName} type="text" placeholder="Name" />
        <InputField onChange={handleInputChange} value={formState.username} type="text" placeholder="Username" />
        <InputField onChange={handleInputChange} value={formState.phoneNumber} type="text" placeholder="Phone number" />
        <InputField onChange={handleInputChange} value={formatDate(formState.dateOfBirth?.toString())} type="text" placeholder="Date of birth" />
        <InputField onChange={handleInputChange} value={formState.country} type="text" placeholder="Country" />
        <InputField onChange={handleInputChange} value={formState.state} type="text" placeholder="State" />
        <InputField onChange={handleInputChange} value={formState.city} type="text" placeholder="City" />
        <InputField onChange={(e) => { handleInputChange(new CustomEvent('interestsChange', { detail: { value: e.target.value } })) }}
          value={formState.interests?.toString()}
          type="text" placeholder="Interests" />

        <button disabled={loading} className="bg-[#FF6C00] text-white px-5 py-2 rounded"> Update </button>
      
      </form>

      {loading && <SpinnerLoader />}
      <ToastContainer autoClose={2000} position="top-center" />
    </MobileLayout>
  )
}

export default EditProfile
