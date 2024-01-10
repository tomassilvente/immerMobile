import { DEPLOYMENT_LINKS } from "../../constants/deploymentLinks"

export interface entertainerData {
  id: string
  name: string
  type: string
  description: string
  fans: number
  performances: number
  mediaUrls: string[]
}

const createEntertainer = async (entertainerData: entertainerData): Promise<{ token: string }> => {
  const response = await fetch(`${DEPLOYMENT_LINKS.immerServer}/api/entertainer`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(entertainerData)
  })
  console.log(response)
  return await response.json()
}
export { createEntertainer }
