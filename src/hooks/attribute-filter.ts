import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { QUERY_KEY } from "src/constants/query-key";

export const useAttributesFilter = () => {
  const key = QUERY_KEY.ATTRIBUTES;
  const [searchParams, setSearchParams] = useSearchParams();

  const getValueAsObject = () => {
    const raw = searchParams.get(key);
    const params: { [key: string]: string[] } = {};
    raw?.split("_").forEach((group) => {
      const [attributeId, attributeValues] = group.split("-");
      params[attributeId] = attributeValues.split(",");
    });
    return params;
  };

  const [params, setParams] = useState<{ [key: string]: string[] }>(
    getValueAsObject
  );

  useEffect(() => {
    setParams(getValueAsObject());
  }, [searchParams]);

  const parseObjectToString = (object: { [key: string]: string[] }) => {
    const raw: string[] = [];
    Object.keys(object).forEach((attributeId) => {
      raw.push([attributeId, object[attributeId].join(",")].join("-"));
    });
    return raw.join("_");
  };

  const addValues = (attributeId: string, ...attributeValueIds: string[]) => {
    setSearchParams((prev) => {
      if (!params[attributeId]) {
        params[attributeId] = [];
      }
      params[attributeId].push(...attributeValueIds);

      prev.set(key, parseObjectToString(params));
      return prev;
    });
  };

  const deleteValues = (
    attributeId: string,
    ...attributeValueIds: string[]
  ) => {
    setSearchParams((prev) => {
      params[attributeId] = params[attributeId].filter(
        (attributeValueId) => !attributeValueIds.includes(attributeValueId)
      );

      // If attribute value is empty after delete then delete its attribute key
      if (params[attributeId].length === 0) {
        delete params[attributeId];
      }

      // If there's no attribute left then delete query key
      if (Object.keys(params).length === 0) {
        prev.delete(key);
      } else {
        prev.set(key, parseObjectToString(params));
      }

      return prev;
    });
  };

  return { params, addValues, deleteValues };
};
