import { DEPLOYMENT_LINKS } from "../../constants/deploymentLinks"

const googleLogin = async (): Promise<{ page:any }> => {
  const response = await fetch(`${DEPLOYMENT_LINKS.immerServer}/api/auth/google`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control': 'Allow-Origin'
    },
  })

  console.log(response)
  return await response.json()
}

export { googleLogin }