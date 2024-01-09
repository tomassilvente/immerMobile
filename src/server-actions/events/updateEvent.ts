import { type eventData } from './postEvent'

const updateEvent = async (contentData: eventData, id: string): Promise<{ token: string }> => {
  const response = await fetch(`https://immer-backend-dev-kenx.2.us-1.fl0.io/api/content/${id}`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(contentData)
  })
  console.log(response)
  return await response.json()
}
export { updateEvent }
