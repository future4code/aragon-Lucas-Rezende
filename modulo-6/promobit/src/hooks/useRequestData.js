import { useState, useEffect } from "react";
import axios from "axios";

export const useRequestData = (url, path, state) => {
  const [data, setData] = useState(state);

  const getData = () => {
    axios
      .get(`${url}${path}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => {
    getData();
  }, [path]);

  return [data];
};
