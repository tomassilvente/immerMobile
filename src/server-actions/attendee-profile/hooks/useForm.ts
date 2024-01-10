import { useState } from 'react'

interface FormState {
  fullName: string
  username: string
  image: string
  phoneNumber: string
  dateOfBirth: string
  country: string
  state: string
  city: string
  interests: string[]
}

interface UseFormReturn {
  formState: FormState
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement> | CustomEvent) => void
}

const useForm = (initialState: FormState): UseFormReturn => {
  const [formState, setFormState] = useState<FormState>(initialState)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement> | CustomEvent): void => {
    if ('target' in event && event.target instanceof HTMLInputElement) {
      setFormState({
        ...formState,
        [event.target.name]: event.target.value
      })
    } else if ('detail' in event && event.detail !== null && event.detail !== undefined) {
      setFormState({
        ...formState,
        interests: event.detail.value.split(',')
      })
    }
  }

  return {
    formState,
    handleInputChange
  }
}

export default useForm
