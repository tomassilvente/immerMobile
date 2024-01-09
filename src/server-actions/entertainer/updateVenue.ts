import { DEPLOYMENT_LINKS } from '../../constants/deploymentLinks'
import { type entertainerData } from './createEntertainer'

const updateEntertainer = async (entertainerData: entertainerData, id: string): Promise<{ token: string }> => {
  const response = await fetch(`${DEPLOYMENT_LINKS.immerServer}/api/entertainer/${id}`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(entertainerData)
  })
  console.log(response)
  return await response.json()
}
export { updateEntertainer }
