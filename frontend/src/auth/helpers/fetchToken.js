

export const fetchToken = async (data) => {
    
    const response = await fetch("https://cedes-donations.vercel.app/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const tokenData = await response.json();
    const userToken = tokenData.token;    
    return userToken;

}

