const apiUrl = import.meta.env.VITE_API_URL;

 export const fetchDataDonations = async (token) => {
    const response = await fetch(`${apiUrl}/find-subscripcion`, {
        headers: {
          token: token,
        },
      });
      const data = await response.json();
      return data;             
 }


