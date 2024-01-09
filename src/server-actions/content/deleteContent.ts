const deleteContent = async (id: string): Promise<void> => {
  const url = `https://immer-backend-dev-kenx.2.us-1.fl0.io/api/content/${id}`

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
export { deleteContent }
