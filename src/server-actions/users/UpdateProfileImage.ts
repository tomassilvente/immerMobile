import { DEPLOYMENT_LINKS } from "../../constants/deploymentLinks"

export const updateProfileImage = async (data: any): Promise<Response> => {
  const token = localStorage.getItem('token')

  try {
    const response = await fetch(`${DEPLOYMENT_LINKS.immerServer}/api/users/update-profile-picture`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json'
      },
      body: data
    })
    return response
  } catch (err) {
    console.log(err)
    return new Response(null, { status: 500, statusText: 'Internal Server Error' })
  }
}
