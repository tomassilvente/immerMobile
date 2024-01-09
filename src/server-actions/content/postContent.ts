import { DEPLOYMENT_LINKS } from "../../constants/deploymentLinks"

const postContent = async (contentData: object): Promise<{ token: string }> => {
  const response = await fetch(`${DEPLOYMENT_LINKS.immerServer}/api/content`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(contentData)
  })
  console.log(response)
  return await response.json()
}
export { postContent }
