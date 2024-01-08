const manageContent = async (id: String, approve:boolean ): Promise<{token: string}> => {
    const response = await fetch(`https://immer-backend-dev-kenx.2.us-1.fl0.io/api/content/manage/${id}/${approve}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(approve)
    }) 
    console.log(response)
    return await response.json();
}
export { manageContent }
