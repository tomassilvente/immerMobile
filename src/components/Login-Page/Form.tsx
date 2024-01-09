'use client'
import React, { useEffect, useState } from 'react'
import Avatar from './Avatar'
import { handleSubmit } from '../../server-actions/live-chat/fetchers'
import { useRouter } from 'next/navigation'
import { io } from 'socket.io-client'
import { useCookies } from 'react-cookie'

function Form (): JSX.Element {
  const [avatarId, setAvatarId] = useState((Math.random() * 20).toFixed())
  const router = useRouter()
  const socket = io('https://server-chat-immer-dev-tksm.3.us-1.fl0.io/')
  const [cookie] = useCookies(['user'])

  useEffect(() => {
    if (cookie.user !== null && cookie.user !== undefined) {
      router.push('/chat')
    }
  }, [cookie.user])

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      const handleSubmitAsync = async (): Promise<void> => {
        await handleSubmit(e, router, avatarId, socket)
      }
      handleSubmitAsync().catch(error => {
        console.error('An error occurred in Login-Page/Form:', error)
      })
    }} className='flex flex-col gap-5'>

      {/* AVATAR */}
      <Avatar avatarId={avatarId} setAvatarId={setAvatarId} />
      <div className='flex flex-col xl:flex-row gap-5'>
        <div className='form-control w-full'>
          <label className='label'><span className='label-text text-lg'>What is your name?</span></label>
          <input type="text" placeholder='Username' className='input input-bordered w-full' required />
        </div>
        <div className='form-control w-full'>
          <label className='label'><span className='label-text text-lg'>Put your email.</span></label>
          <input type="email" placeholder='Email' className='input input-bordered w-full' required />
        </div>
      </div>
      <button className='btn'>Login</button>

    </form>
  )
}

export default Form
