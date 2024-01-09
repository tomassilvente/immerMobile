import { DEPLOYMENT_LINKS } from '../../constants/deploymentLinks'
import { type venueData } from './createVenue'

const updateVenue = async (venueData: venueData, id: string): Promise<{ token: string }> => {
  const response = await fetch(`${DEPLOYMENT_LINKS.immerServer}/api/venues/${id}`, {
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
