import { type ticketData } from './createTicket'

const updateTicket = async (ticketData: ticketData, id: string): Promise<{ token: string }> => {
  const response = await fetch(`https://immer-backend-dev-kenx.2.us-1.fl0.io/api/ticket/${id}`, {
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
