const getTickets = async (id: string): Promise<void> => {
    let url: string
  
    if (id !== undefined) {
      url = `https://immer-backend-dev-kenx.2.us-1.fl0.io/api/tickets/${id}`
    } else {
      url = 'https://immer-backend-dev-kenx.2.us-1.fl0.io/api/tickets/20/3'
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
  
  export { getTickets }