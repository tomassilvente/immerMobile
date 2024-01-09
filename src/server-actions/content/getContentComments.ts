const getContentComments = async (id: string): Promise<void> => {
  const url = `https://immer-backend-dev-kenx.2.us-1.fl0.io/api/content/comment/${id}/20/1`

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

export { getContentComments }
