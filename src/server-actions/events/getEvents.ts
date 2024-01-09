import { DEPLOYMENT_LINKS } from "../../constants/deploymentLinks"

const getEvents = async (id?: string): Promise<void> => {
  let url: string

  if (id !== undefined) {
    url = `${DEPLOYMENT_LINKS.immerServer}/api/events/${id}`
  } else {
    url = `${DEPLOYMENT_LINKS.immerServer}/api/events`
  }

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })

  console.log(response)
  return await response.json()
}

export { getEvents }
