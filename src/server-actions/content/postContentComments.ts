const postContentComments = async (comment: object, id: string): Promise<{ token: string }> => {
  const response = await fetch(`https://immer-backend-dev-kenx.2.us-1.fl0.io/api/content/comment/${id}/20/1`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(comment)
  })
  console.log(response)
  return await response.json()
}
export { postContentComments }
