import { DEPLOYMENT_LINKS } from "../../constants/deploymentLinks"

const getUser = async (id: string): Promise<void> => {
  let url: string

  // ! What is the point of doing this??
  if (id !== undefined) {
    url = `${DEPLOYMENT_LINKS.immerServer}/api/users/${id}`
  } else {
    url = `${DEPLOYMENT_LINKS.immerServer}/api/users/20/3`
  }

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

export { getUser }
