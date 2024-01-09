import { type venueData } from './createVenue'

const updateVenue = async (venueData: venueData, id: string): Promise<{ token: string }> => {
  const response = await fetch(`https://immer-backend-dev-kenx.2.us-1.fl0.io/api/venues/${id}`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(venueData)
  })
  console.log(response)
  return await response.json()
}
export { updateVenue }
