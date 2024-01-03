import { entertainerData } from "./createEntertainer";

const updateEntertainer = async (entertainerData: entertainerData, id: String): Promise<{token: string}> => {
    const response = await fetch(`https://immer-backend-dev-kenx.2.us-1.fl0.io/api/entertainer/${id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(entertainerData)
    })
    console.log(response)
    return await response.json();
}
export { updateEntertainer }