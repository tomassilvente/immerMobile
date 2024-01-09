import { DEPLOYMENT_LINKS } from "../../constants/deploymentLinks"

interface UserData {
  email: string
  password: string
}

export interface User {
  _id: string
  username: string
  fullName: string
  email: string
  password: string
  role: string
  image: string
  is_online: string
  phoneNumber: string
  dateOfBirth: Date
  country: string
  state: string
  city: string
  interests: string[]
  createdAt: Date
  updatedAt: Date
  customerId: string
}

const loginUser = async (userData: UserData): Promise<{ token: string, user: User }> => {
  const response = await fetch(`${DEPLOYMENT_LINKS.immerServer}/api/auth/login`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })

  return await response.json()
}

export { loginUser }
