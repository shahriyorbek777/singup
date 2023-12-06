import axios from "axios";
import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsPending(true);
      try {
        const req = await axios(url);

        if (!req.status == 200) {
          throw new Error(req.message);
        }
        setData(req.data);
        setIsPending(false);
        setError(null);
      } catch (error) {
        console.log(error);
        setError(error);
        setIsPending(false);
      }
    };

    getData();
  }, [url]);

  return { data, isPending, error };
}
