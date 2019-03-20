import { useState, useEffect } from "react";

const useHttp = url => {
  const [data, setData] = useState([]);

  const fetchDataAsync = async () => {
    fetch(url)
      .then(res => res.json())
      .then(response => setData(response));
  };

  useEffect(() => {
    fetchDataAsync();
  }, [url]);

  return data;
};

export default useHttp;
