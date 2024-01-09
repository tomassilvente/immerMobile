import { DEPLOYMENT_LINKS } from "../../constants/deploymentLinks"

const manageContent = async (id: string, approve: boolean): Promise<{ token: string }> => {
  const response = await fetch(`${DEPLOYMENT_LINKS.immerServer}/api/content/manage/${id}/${approve}`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(approve)
  })
  console.log(response)
  return await response.json()
}
export { manageContent }
