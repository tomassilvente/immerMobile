/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'
import React, { useState } from 'react'
import SvgCheckBoxAccepted from '../../../../public/assets/Icons/CheckoxAccepted'
import SvgCheckBoxUnaccepted from '../../../../public/assets/Icons/CheckBoxUnaccepted'
import Link from 'next/link'
import { loginUser } from '../../../server-actions/auth/loginUser'
import SvgAlertIcon from '../../../../public/assets/Icons/AlertIcon'
import Feed from '../../../components/SignIn/Feed'
import SignButton from '../../../components/SignUp/SignButton'
import { useRouter } from 'next/navigation'
import { type FormData } from '../../../types/signin.interfaces'
import { type User } from '../../../server-actions/auth/loginUser'

export default function SignInWithEmail (): JSX.Element {
  const router = useRouter()

  const [message, setMessage] = useState<string>('')
  const [quant, setQuant] = useState<number>(1)
  const [left, setLeft] = useState<number>(3)

  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [accepted, setAccepted] = useState(false)
  const [isFeedOpen, setIsFeedOpen] = useState(false)
  const [wrong, setWrong] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const setFeedClose = (): void => {
    setIsFeedOpen(false)
  }

  const validateFormData = (): boolean => {
    let valid = true
    const errs: Record<string, string> = {}

    if (!formData.email.includes('@')) errs.email = 'Valid email required'
    if (formData.password.length < 8) errs.password = 'Invalid password'

    if (Object.keys(errs).length > 0) valid = false
    setErrors(errs)

    return valid
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    if (!validateFormData()) return

    // ! It is not correct to call a void function inside another one, I will try to fix it later
    // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
    const response: { message?: string, token: string, user: User } = await loginUser(formData)
    console.log(response)

    if (response.token !== undefined && response.token !== null) {
      localStorage.setItem('userId', response.user._id)
      localStorage.setItem('token', response.token)
      router.push('/')
    } else {
      setMessage(response.message !== undefined && response.message !== null && response.message !== '' ? response.message : 'Default message')
      setQuant(quant + 1)
      setLeft(left - 1)
      console.log(quant)
      setWrong(true)
    }
    if (quant === 3) {
      setIsFeedOpen(true)
    }
    // const res = await response.json()
  }

  const toggleAccepted = (): void => { setAccepted((prev) => !prev) }

  return (
    <div className="font-Inter relative max-w-[480px]  m-auto p-5">
      <div className="m-5 text-center">
        <p className="text-4xl mt-8 font-semibold">Welcome back!</p>
        <p className="text-lg font-light text-[#767676] mt-10">
          Login to your account.
        </p>
        {wrong
          ? (
            <div className="flex text-start text-white bg-[#ff3030] mt-8 rounded-md">
              <SvgAlertIcon className="mx-2" width={50} height={50} />
              <p>
                Incorrect email or password. {left} login attemps remaining before the
                account is blocked.
              </p>
            </div>
            )
          : (
              ''
            )}
        <form className="text-start mt-10" onSubmit={handleSubmit}>
          <p className="text-xl mt-5">Email</p>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded-md w-[100%] mt-3 py-2 pl-3 focus:border-black"
            placeholder="Enter Your Email"
            type="email"
          />
          <p className="text-xl mt-5">Password</p>
          <div>
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="border rounded-md w-[100%] mt-3 py-2 pl-3 focus:border-black"
              placeholder="Enter Your Password"
              type="password"
            />
            {errors.password !== '' && (
              <span className="text-sm font-light text-[#ff3c3c] mt-3">
                {errors.password}
              </span>
            )}
            <br />
            <span className="font-light text-[#767676]">
              At least 8 characters, 1 uppercase letter, 1 number, 1 symbol
            </span>
          </div>
          <div className="flex mt-10">
            {accepted
              ? (
                <SvgCheckBoxAccepted
                  onClick={toggleAccepted}
                  height={25}
                  width={25}
                  className="ml-1"
                />
                )
              : (
                <SvgCheckBoxUnaccepted
                  onClick={toggleAccepted}
                  height={25}
                  width={25}
                  className="ml-1"
                />
                )}
            <label className="ml-2 text-sm font-light text-[#767676]">
              Remember me
            </label>
            <Link
              className="ml-[43%] text-sm font-semibold"
              href={'/signin/password-forgot'}
            >
              Forgot Password?
            </Link>
          </div>
          {
          message !== ''
            ? <p className='text-[#ff3c3c]'>{message}</p>
            : ''
          }
          <SignButton
            onClick={handleSubmit}
            able={!Object.values(errors).some(Boolean) && left > 0}
            title="Login"
          />
        </form>
        <Feed
          title={'Account blocked'}
          title2={
            "check your email and try again or sign up if you don't have an account."
          }
          isFeedOpen={isFeedOpen}
          setFeedClose={setFeedClose}
          buttonText={'close'}
          link={false}
        />
      </div>
    </div>
  )
}
