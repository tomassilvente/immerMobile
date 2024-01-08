const getUserPic = async (id: string): Promise<void> => {
    let url: string
    url = `https://immer-backend-dev-kenx.2.us-1.fl0.io/api/users/profile-image/${id}`

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
  
  export { getUserPic }