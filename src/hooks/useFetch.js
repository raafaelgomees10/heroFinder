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
          throw new Error(
            JSON.stringify({
              code: response.status,
              message:
                "Sorry for the inconvenience, today we exceeded the marvel data query limit, please be sure to visit our website tomorrow.",
            })
          );
        }
        throw new Error(response.statusText);
      }
    } catch (e) {
      json = null;
      setError(e.message);
    } finally {
      setData(json.data.results);
      setTotal(json.data.total);
      setLoading(false);
      return { response, json };
    }
  }, []);

  return { data, loading, error, total, request };
};

export default useFetch;
