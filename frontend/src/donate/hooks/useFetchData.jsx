import { useState, useEffect } from "react";
import { fetchData } from "../helpers/fetchData";

export const useFetchData = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const usersData = await fetchData();
    setData(usersData);
  };

  useEffect(() => {
    getData();
  }, []);

  return data;
};
