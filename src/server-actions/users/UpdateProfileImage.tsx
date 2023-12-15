
const updateProfileImage = async (data: any) => {
    const token = localStorage.getItem('token')

    try {
        const response = await fetch("https://immer-backend-dev-kenx.2.us-1.fl0.io/api/users/update-profile-picture", {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            },
            body: data,
        });
        return response;
    } catch(err) {
        console.log(err)
    }
    
  }
 
  export { updateProfileImage };