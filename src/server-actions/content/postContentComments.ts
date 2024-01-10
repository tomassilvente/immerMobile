import { DEPLOYMENT_LINKS } from "../../constants/deploymentLinks"

const postContentComments = async (comment: object, id: string): Promise<{ token: string }> => {
  const response = await fetch(`${DEPLOYMENT_LINKS.immerServer}/api/content/comment/${id}/20/1`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(comment)
  })
  console.log(response)
  return await response.json()
}
export { postContentComments }
