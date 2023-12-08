const getEvents = async (id?: boolean): Promise<void> => {
  let url: string

  if (id !== undefined) {
    url = `https://immer-backend-dev-kenx.2.us-1.fl0.io/api/events/${id}`
  } else {
    url = 'https://immer-backend-dev-kenx.2.us-1.fl0.io/api/events'
  }

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })

  return await response.json()
}

export { getEvents }
