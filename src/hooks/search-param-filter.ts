import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { QUERY_KEY } from "src/constants/query-key";

export const useSearchParamsFilter = (key: QUERY_KEY, separate = ",") => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getValueAsArray = () => {
    return searchParams.get(key)?.split(separate) || [];
  };

  const [params, setParams] = useState<string[]>(getValueAsArray);

  useEffect(() => {
    setParams(getValueAsArray());
  }, [searchParams]);

  const getValueAsString = () => {
    return searchParams.get(key);
  };

  const setValues = (...values: string[]) => {
    setSearchParams((prev) => {
      prev.set(key, values.join(separate));
      return prev;
    });
  };

  const addValues = (...values: string[]) => {
    setSearchParams((prev) => {
      params.push(...values);
      prev.set(key, params.join(separate));
      return prev;
    });
  };

  const deleteValues = (...values: string[]) => {
    setSearchParams((prev) => {
      const newParams = params.filter((value) => !values.includes(value));

      if (newParams.length === 0) {
        deleteKey();
      } else {
        prev.set(key, newParams.join(separate));
      }

      return prev;
    });
  };

  const deleteKey = () => {
    setSearchParams((prev) => {
      prev.delete(key);
      return prev;
    });
  };


  return {
    searchParams,
    params,
    setSearchParams,
    getValueAsString,
    getValueAsArray,
    setValues,
    addValues,
    deleteValues,
    deleteKey,
  };
};
