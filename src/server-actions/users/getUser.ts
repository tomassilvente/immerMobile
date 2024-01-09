const getUser = async (id: string): Promise<void> => {
  let url: string

  // ! What is the point of doing this??
  if (id !== undefined) {
    url = `https://immer-backend-dev-kenx.2.us-1.fl0.io/api/users/${id}`
  } else {
    url = 'https://immer-backend-dev-kenx.2.us-1.fl0.io/api/users/20/3'
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

export { getUser }
