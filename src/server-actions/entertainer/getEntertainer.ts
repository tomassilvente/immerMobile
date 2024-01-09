import { DEPLOYMENT_LINKS } from "../../constants/deploymentLinks"

const getEntertainer = async (id: string): Promise<void> => {
  let url: string

  if (id !== undefined) {
    url = `${DEPLOYMENT_LINKS.immerServer}/api/entertainer/${id}`
  } else {
    url = `${DEPLOYMENT_LINKS.immerServer}/api/entertainer/20/3`
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

export { getEntertainer }
