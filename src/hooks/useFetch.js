import { useCallback, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [total, setTotal] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const request = useCallback(async (url, options) => {
    let response;
    let json;

    try {
      setError(null);
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();

      if (response.ok === false) {
        if (response.status === 429) {
          //error when exceeded data limit per day, 3000
          throw new Error(
            "Sorry for the inconvenience, today we exceeded Marvel's free data query limit, be sure to visit our website tomorrow."
          );
        }
        throw new Error(json.status);
      }

      setData(json.data.results);
      setTotal(json.data.total);
      return { response, json };
    } catch (e) {
      json = null;
      setError(e.message);
    } finally {
      setLoading(false);

      return { response, json };
    }
  }, []);

  return { data, loading, error, total, request };
};

export default useFetch;
