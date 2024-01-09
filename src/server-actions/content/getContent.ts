import { DEPLOYMENT_LINKS } from "../../constants/deploymentLinks"

const getContent = async (id?: string): Promise<void> => {
  let url: string

  if (id !== undefined) {
    url = `${DEPLOYMENT_LINKS.immerServer}/api/content/${id}`
  } else {
    url = `${DEPLOYMENT_LINKS.immerServer}/api/content`
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

export { getContent }
