import React from 'react'

interface InputFieldProps {
  label: string
  name: string
  value: string
  error: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  type: 'text' | 'password' | 'email'
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  value,
  error,
  onChange,
  placeholder,
  type
}) => (
  <div>
    <p className="text-xl mt-5">{label}</p>
    <input
      name={name}
      value={value}
      onChange={onChange}
      className={`border rounded-md w-[100%] mt-3 py-4 pl-3 focus:border-black ${
        error !== '' ? 'border-red-400' : ''
      }`}
      placeholder={placeholder}
      type={type}
    />
    {error !== '' && (
      <span className="text-sm font-light text-[#ff3c3c] mt-3">{error}</span>
    )}
  </div>
)
