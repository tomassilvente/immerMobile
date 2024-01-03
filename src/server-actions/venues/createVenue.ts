export interface venueData{
      id: string,
      name: string,
      location:string,
      capacity: number,
      type: string,
      createdAt: Date,
      updatedAt: Date
    }
    
    const postVenue = async (venueData: venueData): Promise<{token: string}> => {
        const response = await fetch('https://immer-backend-dev-kenx.2.us-1.fl0.io/api/venues', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(venueData)
        })
        console.log(response)
        return await response.json();
    }
export { postVenue }