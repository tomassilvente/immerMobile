import React from 'react'
import { type InputFieldProps } from '../../types/attendeeprofile.interfaces'

const InputField: React.FC<InputFieldProps> = ({ type, value, onChange, placeholder }) => (
  <input className="input-field" onChange={onChange} type={type} value={value} placeholder={placeholder} />
)

export default InputField
