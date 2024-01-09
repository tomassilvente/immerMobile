export interface eventData{
id: string,
  eventName: string,
  organizerId: string,
  artistId: string,
  startDate: Date,
  endDate: Date,
  location: string,
  price: number,
  discountPercentage: number,
  discountStartDate: Date,
  discountEndDate: Date,
  createdAt: Date,
  updatedAt: Date
}

const postEvent = async (eventData: eventData): Promise<{token: string}> => {
    const response = await fetch('https://immer-backend-dev-kenx.2.us-1.fl0.io/api/events', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(eventData)
    })
    console.log(response)
    return await response.json();
}
export { postEvent }
