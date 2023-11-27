const getEvents = async (id) => {
    if(id){
        const response = await fetch(`https://immer-backend-dev-kenx.2.us-1.fl0.io/api/events/${id}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
        });
        return await response.json();
    }
    else{
        const response = await fetch(`https://immer-backend-dev-kenx.2.us-1.fl0.io/api/events`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
        });
        return await response.json();
    }
  }
 
  export { getEvents };