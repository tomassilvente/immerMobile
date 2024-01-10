// ! I am sure it does not it correctly defined, we need to check the fields

import { DEPLOYMENT_LINKS } from "../../constants/deploymentLinks"

interface UserData {
  username: string
  password: string
  fullName: string
  email: string
}

const registerUser = async (userData: UserData): Promise<{ message: string }> => {
  const response = await fetch(`${DEPLOYMENT_LINKS.immerServer}/api/auth/register`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })

  return await response.json()
}

export { registerUser }
