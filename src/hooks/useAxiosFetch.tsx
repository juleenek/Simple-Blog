import { useState, useEffect } from 'react';
import axios from 'axios';

export const useAxiosFetch = (dataUrl: string) => {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();
    const fetchData = async (url: string) => {
      setIsLoading(true);
      try {
        const response = await axios.get(url, {
          cancelToken: source.token,
        });
        if (isMounted) {
          setData(response.data);
          setFetchError(null);
        }
      } catch (error) {
        if (isMounted) {
          setFetchError((error as Error).message);
          setData([]);
        }
      } finally {
        isMounted && setTimeout(() => setIsLoading(false), 1000);
      }
    };
    fetchData(dataUrl);
    const cleanUp = () => {
      isMounted = false;
      source.cancel();
    };

    return cleanUp;
  }, [dataUrl]);

  return { data, fetchError, isLoading };
};
