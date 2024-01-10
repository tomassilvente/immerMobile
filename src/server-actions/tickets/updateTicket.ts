import { DEPLOYMENT_LINKS } from '../../constants/deploymentLinks'
import { type ticketData } from './createTicket'

const updateTicket = async (ticketData: ticketData, id: string): Promise<{ token: string }> => {
  const response = await fetch(`${DEPLOYMENT_LINKS.immerServer}/api/ticket/${id}`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(ticketData)
  })
  console.log(response)
  return await response.json()
}
export { updateTicket }
