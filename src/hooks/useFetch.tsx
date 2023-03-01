import { useEffect, useState } from "react";

export const useFetch = <T extends unknown>(
  callback: () => Promise<T> | null,
  dependencies?: any[]
) => {
  const [response, setResponse] = useState<T | null>(null as T);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(
    () => {
      const onCallback = async () => {
        setLoading(true);
        try {
          const data = await callback();
          setResponse(data);
          setLoading(false);
        } catch (e: any) {
          setError(e);
          setLoading(false);
        } finally {
          setLoading(false);
        }
      };
      onCallback();
    },
    dependencies ? dependencies : []
  );

  return { loading, response, error };
};
