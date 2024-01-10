import { DEPLOYMENT_LINKS } from "../../constants/deploymentLinks"

const getUserPic = async (id: string): Promise<void> => {
  const url = `${DEPLOYMENT_LINKS.immerServer}/api/users/profile-image/${id}`

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })

  console.log(response)
  return await response.json()
}

export { getUserPic }
