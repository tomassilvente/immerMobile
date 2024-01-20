'use client'
import React, { useState } from 'react'
import SignButton from '../../../../components/SignUp/SignButton'
import { useRouter } from 'next/navigation'
import { newPassword } from '../../../../server-actions/auth/newPassword'

export default function PasswordChange (): JSX.Element {
  const router = useRouter()
  // First Password Validations
  const [wrong, setWrong] = useState(false)
  const [correct, setCorrect] = useState(false)
  const [password, setPassword] = useState('')

  const setIsCorrect = (password: string): void => {
    if (password.length > 7) {
      setCorrect(true)
      setWrong(false)
      setPassword(password)
    } else {
      setWrong(true)
      setCorrect(false)
    }
  }

  // Password match Validation
  const [differents, setDifferents] = useState(false)
  const [equals, setEquals] = useState(false)

  const passwordMatch = (confirmation: string): void => {
    if (password === confirmation) {
      setEquals(true)
      setDifferents(false)
    } else {
      setEquals(false)
      setDifferents(true)
    }
  }

  let token = ''
  let able = false
  if (equals && correct) able = true
  else able = false

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    const response: { message?:string , status: number} = await newPassword(password, token)
  
    if (response.status === 201) {
      router.push('/signin/password-forgot/reset/success')
    }
  }


  return (
    <div className="font-Inter relative max-w-[480px]  m-auto p-5">
      <div className="m-5 text-center">
        <p className="text-4xl mt-8 font-semibold">Reset your password</p>
        <p className="text-lg font-light text-[#767676] mt-10">
          Please enter the new password for your account
        </p>
        <form className="text-start mt-10" onSubmit={handleSubmit}>
          <p className="text-xl mt-5">New password</p>
          <input
            onChange={(e) => { setIsCorrect(e.target.value) }}
            style={{
              borderColor: correct ? 'green' : wrong ? 'red' : ''
            }}
            className="border rounded-md w-[100%] mt-3 mb-2 py-4 pl-3 focus:border-black after:border-[5px]"
            placeholder="Enter Your Password"
            id="password"
            name="password"
            type="password"
          />
          {correct
            ? (
            <span className="text-sm font-light text-[#439829] mt-3">
              Valid Password
            </span>
              )
            : wrong
              ? (
            <span className="text-sm font-light text-[#ff3c3c] mt-3">
              Invalid Password
            </span>
                )
              : (
                  ''
                )}
          <br />
          <span className="font-light text-[#767676]">
            At least 8 characters, 1 uppercase letter, 1 number, 1 symbol
          </span>
          <p className="text-xl mt-5">Confirm Password</p>
          <input
            onChange={(e) => { passwordMatch(e.target.value) }}
            style={{
              borderColor: equals ? 'green' : differents ? 'red' : ''
            }}
            className="border rounded-md w-[100%] mt-3 mb-2 py-4 pl-3 focus:border-black"
            placeholder="Enter Your Password"
            id="confirmPassword"
            name="confirmPassword"
            type="password"
          />
          <br />
          <span
            style={{
              color: differents ? 'red' : equals ? 'green' : ''
            }}
            className="font-light text-[#767676]"
          >
            Both passowrds must match
          </span>
          <button
          type="submit"
          className="w-[100%] text-center text-2xl bg-primary text-white mt-12  py-5 rounded-full"
        >
          Reset My Password
        </button>
        </form>
      </div>
    </div>
  )
}
