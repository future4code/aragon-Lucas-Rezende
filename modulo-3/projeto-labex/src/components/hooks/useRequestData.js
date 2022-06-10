import { useState, useEffect } from "react";
import axios from "axios";

export const useRequestData = (url, initialState) => {
  const [data, setData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(true);

  const getData = () => {
    axios
      .get(url, {
        headers: {
          auth: window.localStorage.getItem("token-labex"),
        },
      })
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Erro de requisição");
        console.log(err.response.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return [data, isLoading];
};
