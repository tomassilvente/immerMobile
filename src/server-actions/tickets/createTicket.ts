import { DEPLOYMENT_LINKS } from "../../constants/deploymentLinks"

export interface ticketData {
  id: string
  eventId: string
  eventName: string
  userId: string
  artistId: string
  purchaseDate: Date
  price: number
  invoiceId: string
  createdAt: Date
  updatedAt: Date
}

const postEvent = async (ticketData: ticketData): Promise<{ token: string }> => {
  const response = await fetch(`${DEPLOYMENT_LINKS.immerServer}/api/events`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(ticketData)
  })
  console.log(response)
  return await response.json()
}
export { postEvent }
