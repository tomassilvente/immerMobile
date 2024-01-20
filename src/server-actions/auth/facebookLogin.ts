import { DEPLOYMENT_LINKS } from "../../constants/deploymentLinks"

const facebookLogin = async (): Promise<{ page:any }> => {
  const response = await fetch(`${DEPLOYMENT_LINKS.immerServer}/api/auth/facebook`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
  })

  return await response.json()
}

export { facebookLogin }