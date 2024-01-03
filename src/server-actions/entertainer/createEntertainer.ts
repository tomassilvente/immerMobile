export interface entertainerData{
      id: string,
      name: string,
      type: string,
      description:string,
      fans: number,
      performances: number,
      mediaUrls: Array<string>
    }
    
    const createEntertainer = async (entertainerData: entertainerData): Promise<{token: string}> => {
        const response = await fetch('https://immer-backend-dev-kenx.2.us-1.fl0.io/api/entertainer', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(entertainerData)
        })
        console.log(response)
        return await response.json();
    }
export { createEntertainer }