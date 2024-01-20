/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable react/no-unescaped-entities */
'use client'
import React, { useState } from 'react'
import SignButton from '../../../components/SignUp/SignButton'
import Feed from '../../../components/SignIn/Feed'
import ErrorMessage from '../../../components/SignIn/ErrorMessage'
import ModalMessage from '../../../components/SignIn/ModalMessage'
import { resetPassword } from '../../../server-actions/auth/resetPassword'
import { useRouter } from 'next/navigation'

export default function PasswordForgot (): JSX.Element {

  const router = useRouter()

  const [isFeedOpen, setIsFeedOpen] = useState(false)
  const [wrong, setWrong] = useState(false)
  const [email, setEmail] =  useState<string>('')

  const setFeedOpen = (): void => {
    setIsFeedOpen(true)
    setWrong(true)
  }

  const setFeedClose = (): void => {
    setIsFeedOpen(false)
  }

  const [emailCompleted, setEmailCompleted] = useState(false)
  const [emailIncompleted, setEmailIncompleted] = useState(false)

  const isEmailCompleted = (email: string): void => {
    setEmail(email)
    if (email.length > 2 && email.includes('@' && '.')) {
      setEmailCompleted(true)
      setEmailIncompleted(false)
    } else {
      setEmailCompleted(false)
      setEmailIncompleted(true)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    const response: { message?:string, token:string } = await resetPassword(email)
  
    if (response.token !== undefined && response.token !== null) {
      localStorage.setItem('token', response.token)
      router.push('/signin/password-forgot/email-sent')
    }
  
    else{
      setFeedOpen()
    }
  }

  return (
    <div className="font-Inter relative max-w-[480px]  m-auto p-5">
    <div className="m-5 text-center ">
      <p className="text-2xl mt-8 font-semibold">Forgot your password?</p>
      <p className="text-lg font-light text-[#767676] mt-10">
        If you need help resetting your password, enter your email and we will
        help by sending you a link to reset it.
      </p>
      {wrong
        ? (
        <ErrorMessage
          show={wrong}
          message="Sorry, we couldn’t find an account with that username. You can try again or sign up if you don’t have an account."
        />
          )
        : (
            ''
          )}
      <form onSubmit={handleSubmit} className="text-start mt-16">
        <p className="text-xl mt-5">Email</p>
        <input
          style={{
            borderColor: emailCompleted
              ? 'green'
              : emailIncompleted
                ? 'red'
                : ''
          }}
          onChange={(e) => { isEmailCompleted(e.target.value) }}
          className="border rounded-md w-[100%] mt-3 py-4 pl-3 focus:border-black "
          placeholder="Enter Your Email"
          id="email"
          name="email"
          type="email"
        />
        {emailCompleted
          ? (
              ''
            )
          : emailIncompleted
            ? (
          <span className="text-sm font-light text-[#ff3c3c] mt-3">
            Valid email Required
          </span>
              )
            : (
                ''
              )}
        {/* <SignButton
          title="Reset my password"
          able={emailCompleted}
          onClick={setFeedOpen}
        /> */}
        <div className="pb-8">
      {emailCompleted
        ? (
        <button
          type="submit"
          className="w-[100%] text-center text-2xl bg-primary text-white mt-12  py-5 rounded-full"
        >
          Reset My Password
        </button>
          )
        : (
        <div className="w-[100%] text-center text-2xl bg-[#b8b8b8] text-white mt-12  py-5 rounded-full">
          Reset My Password
        </div>
          )}
    </div>
      </form>
      <ModalMessage isOpen={isFeedOpen} onClose={setFeedClose} />
      <Feed
        buttonText={'Try again'}
        title={'No account was found'}
        title2={
          "check your email and try again or sign up if you don't have an account."
        }
        isFeedOpen={isFeedOpen}
        setFeedClose={setFeedClose}
        link={true}
      />
    </div>
    </div>
  )
}
