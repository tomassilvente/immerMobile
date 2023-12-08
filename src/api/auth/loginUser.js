

const loginUser = async (userData) => {
    const response = await fetch('https://immer-backend-dev-kenx.2.us-1.fl0.io/api/auth/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    
    return response;
  }
 
  export { loginUser };