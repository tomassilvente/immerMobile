import { DEPLOYMENT_LINKS } from "../../constants/deploymentLinks"

export const deleteTicket = async (id: string): Promise<void> => {
  const url = `${DEPLOYMENT_LINKS.immerServer}/api/events/${id}`

  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })

  console.log(response)
  return await response.json()
}
