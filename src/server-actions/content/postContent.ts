const postContent = async (contentData: object): Promise<{token: string}> => {
        const response = await fetch('https://immer-backend-dev-kenx.2.us-1.fl0.io/api/content', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(contentData)
        })
        console.log(response)
        return await response.json();
    }
export { postContent }
  