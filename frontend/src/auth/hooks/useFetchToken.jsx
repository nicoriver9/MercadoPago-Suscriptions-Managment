import { useState, useEffect } from "react";
import { fetchToken } from "../helpers/fetchToken";


export const useFetchToken = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const tokenData = await fetchToken();
    setData(tokenData);
  };

  useEffect(() => {
    getData();
  }, []);

  return data;
};
