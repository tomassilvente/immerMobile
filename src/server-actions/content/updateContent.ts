const updateContent = async (contentData: object, id: String): Promise<{token: string}> => {
    const response = await fetch(`https://immer-backend-dev-kenx.2.us-1.fl0.io/api/content/${id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contentData)
    })
    console.log(response)
    return await response.json();
}
export { updateContent }
