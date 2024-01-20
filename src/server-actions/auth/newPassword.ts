// ! I am sure it does not it correctly defined, we need to check the fields

import { DEPLOYMENT_LINKS } from "../../constants/deploymentLinks"

const newPassword = async (password: string, token:string): Promise<{ message: string, status:number }> => {
  const response = await fetch(`${DEPLOYMENT_LINKS.immerServer}/api/auth/new-password?token=${token}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(password)
  })

  return await response.json()
}

export { newPassword }