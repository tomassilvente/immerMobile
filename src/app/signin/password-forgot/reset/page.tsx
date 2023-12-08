'use client'
import React, { useState } from 'react'
import SignButton from 'app/signup/components/SignButton'

export default function PasswordChange (): JSX.Element {
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

  let able = false
  if (equals && correct) able = true
  else able = false

  return (
    <div className="font-Inter relative max-w-[480px] m-auto">
      <div className="m-5 text-center">
        <p className="text-4xl mt-8 font-semibold">Reset your password</p>
        <p className="text-lg font-light text-[#767676] mt-10">
          Please enter the new password for your account
        </p>
        <form className="text-start mt-10">
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
          <SignButton title={'Change Password'} able={able} />
        </form>
      </div>
    </div>
  )
}
