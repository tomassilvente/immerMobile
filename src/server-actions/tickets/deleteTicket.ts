export const deleteTicket = async (id: string): Promise<void> => {
  const url = `https://immer-backend-dev-kenx.2.us-1.fl0.io/api/events/${id}`

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
