const getContent = async (id?: String): Promise<void> => {
    let url: string
  
    if (id !== undefined) {
      url = `https://immer-backend-dev-kenx.2.us-1.fl0.io/api/content/${id}`
    } else {
      url = 'https://immer-backend-dev-kenx.2.us-1.fl0.io/api/content'
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
  
  export { getContent }
  