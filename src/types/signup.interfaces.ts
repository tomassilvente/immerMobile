export interface CheckboxAgreementProps {
  accepted: boolean
  toggleAccepted: () => void
}

export interface InputFieldProps {
  label: string
  name: string
  value: string
  error: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  type: 'text' | 'password' | 'email'
}

export interface ButtonProps {
  title: string
  able: boolean
  onClick?: any
}
