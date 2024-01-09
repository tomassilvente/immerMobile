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
  const response = await fetch('https://immer-backend-dev-kenx.2.us-1.fl0.io/api/events', {
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
