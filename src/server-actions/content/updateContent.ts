import { DEPLOYMENT_LINKS } from "../../constants/deploymentLinks"

const updateContent = async (contentData: object, id: string): Promise<{ token: string }> => {
  const response = await fetch(`${DEPLOYMENT_LINKS.immerServer}/api/content/${id}`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(contentData)
  })
  console.log(response)
  return await response.json()
}
export { updateContent }
