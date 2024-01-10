import { DEPLOYMENT_LINKS } from "../../constants/deploymentLinks"

const deleteEntertainer = async (id: string): Promise<void> => {
  const url = `${DEPLOYMENT_LINKS.immerServer}/api/entertainer/${id}`

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

export { deleteEntertainer }
