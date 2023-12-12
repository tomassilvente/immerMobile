import React from 'react'
import { type InputFieldProps } from '../../types/attendeeprofile.interfaces'

const InputField: React.FC<InputFieldProps> = ({ type, placeholder }) => (
  <input className="input-field" type={type} placeholder={placeholder} />
)

export default InputField
