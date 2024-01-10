import { DEPLOYMENT_LINKS } from "../../constants/deploymentLinks"

const getContentComments = async (id: string): Promise<void> => {
  const url = `${DEPLOYMENT_LINKS.immerServer}/api/content/comment/${id}/20/1`

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

export { getContentComments }
