// ! I am sure it does not it correctly defined, we need to check the fields

import { DEPLOYMENT_LINKS } from "../../constants/deploymentLinks"

const resetPassword = async (email: string): Promise<{ message: string, token:string }> => {
  const response = await fetch(`${DEPLOYMENT_LINKS.immerServer}/api/auth/reset-password`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(email)
  })

  return await response.json()
}

export { resetPassword }
