/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import SignButton from '../../../components/SignUp/SignButton'
import { registerUser } from '../../../server-actions/auth/registerUser'
import { InputField } from '../../../components/SignUp/InputField'
import { CheckboxAgreement } from '../../../components/SignUp/CheckboxAgreement'

export default function Create (): JSX.Element {
  const router = useRouter()

  const [message, setMessage] = useState<string>('')
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
    passwordConfirm: ''
  })

  const [errors, setErrors] = useState({
    fullName: '',
    username: '',
    email: '',
    password: 'At least 8 characters, 1 uppercase letter, 1 number, 1 symbol',
    passwordConfirm: ''
  })

  const validateField = (name: any, value: string | string[]): void => {
    let error = ''
    switch (name) {
      case 'fullName':
        error = value.length < 2 ? 'Valid name required' : ''
        break
      case 'username':
        error = value.length < 3 ? 'Valid username required' : ''
        break
      case 'email':
        error =
          !value.includes('@') || value.length < 3
            ? 'Valid email required'
            : ''
        break
      case 'password':
        error = value.length < 8
          ? 'Invalid password'
          : ''
        break
      case 'passwordConfirm':
        error = value !== formData.password ? 'Passwords must match' : ''
        break
      default:
        break
    }
    setErrors((prev) => ({ ...prev, [name]: error }))
  }

  const handleChange = (e: { target: { name: any, value: any } }): void => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    validateField(name, value)
  }

  const handleSubmit: (e: {
    preventDefault: () => void
  }) => Promise<void> = async (e) => {
    e.preventDefault()
    // ! The same here, we need to fix the idea of calling a void function inside another one
    // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
    const response: { status?: string, message: string } = await registerUser(formData)
    console.log(response)
    if (response.status === '201') {
      router.push('/signin/email')
    } else setMessage(response.message)
  }

  const [accepted, setAccepted] = useState(false)

  return (
    <div className="font-Inter max-w-[480px] m-auto p-5">
      <div className="text-center min-h-screen">
        <p className="text-2xl mt-8 font-semibold">Create your account</p>
        <p className="text-lg font-light text-[#767676] mt-3">
          Create your personal account now to access all the exclusive benefits we
          have to offer.
        </p>
        <form className="text-start mt-10" onSubmit={handleSubmit}>
          <InputField
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            error={errors.fullName}
            onChange={handleChange}
            placeholder="Enter Your Full Name"
            type="text"
          />
          <InputField
            label="Username"
            name="username"
            value={formData.username}
            error={errors.username}
            onChange={handleChange}
            placeholder="Enter Your Username"
            type="text"
          />
          <InputField
            label="Email"
            name="email"
            value={formData.email}
            error={errors.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
            type="email"
          />
          <InputField
            label="Password"
            name="password"
            value={formData.password}
            error={errors.password}
            onChange={handleChange}
            placeholder="Enter Your Password"
            type="password"
          />
          <InputField
            label="Confirm Password"
            name="passwordConfirm"
            value={formData.passwordConfirm}
            error={errors.passwordConfirm}
            onChange={handleChange}
            placeholder="Confirm Your Password"
            type="password"
          />
          <CheckboxAgreement
            accepted={accepted}
            toggleAccepted={() => { setAccepted(!accepted) }}
          />
          {
            message !== ''
              ? <p className='text-[#ff3c3c]'>{message}</p>
              : ''
          }
          <SignButton
            onClick={handleSubmit}
            able={!Object.values(errors).some(Boolean) && accepted}
            title="Sign In"
          />
        </form>
      </div>
    </div>

  )
}
