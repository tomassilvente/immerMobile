const getEntertainer = async (id: string): Promise<void> => {
  let url: string

  if (id !== undefined) {
    url = `https://immer-backend-dev-kenx.2.us-1.fl0.io/api/entertainer/${id}`
  } else {
    url = 'https://immer-backend-dev-kenx.2.us-1.fl0.io/api/entertainer/20/3'
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

export { getEntertainer }
