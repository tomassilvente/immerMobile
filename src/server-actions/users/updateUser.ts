

const updateUser = async (userData: any) => {
    const id = localStorage.getItem('userId');
    const token = localStorage.getItem('token')

    try {
        const response = await fetch(`https://immer-backend-dev-kenx.2.us-1.fl0.io/api/users/${id}`, {
            method: 'PATCH',
            headers: {
                "Authorization": `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        const data = await response.json()
        localStorage.setItem("immerUserData", JSON.stringify(data));
        return response;
    } catch(err) {
        console.log(err)
    }
    
  }
 
  export { updateUser };