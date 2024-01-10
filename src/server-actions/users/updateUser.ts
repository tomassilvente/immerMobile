import { DEPLOYMENT_LINKS } from "../../constants/deploymentLinks"

const API_BASE_URL = `${DEPLOYMENT_LINKS.immerServer}/api`

const getHeaders = (): Record<string, string> => {
  const token = localStorage.getItem('token')
  return {
    Authorization: `Bearer ${token}`,
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
}

const handleResponse = async (response: Response): Promise<Response> => {
  const data = await response.json()
  localStorage.setItem('immerUserData', JSON.stringify(data))
  return response
}

const updateUser = async (userData: any): Promise<Response> => {
  const id = localStorage.getItem('userId')

  try {
    const response = await fetch(`${API_BASE_URL}/users/${id}`, {
      method: 'PATCH',
      headers: getHeaders(),
      body: JSON.stringify(userData)
    })

    return await handleResponse(response)
  } catch (err) {
    console.error(err)
    throw err
  }
}

export { updateUser }
