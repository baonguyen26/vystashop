import { apiClient } from "src/libs/api-client";
import { useQuery } from "@tanstack/react-query";
import { checkboxItemProps } from "src/components/ui";

type FilterOptions = {
  brands: checkboxItemProps[];
  shops: checkboxItemProps[];
};

export const getFilterOptions = (title: string) => {
  return apiClient.get<FilterOptions>(`/filters/${title}`);
};

export const useGetFilterOptions = (title: string, ) => {
  return useQuery({
    queryKey: ["filter-options", title],
    queryFn: () => getFilterOptions(title),
    enabled: !!title,
  });
};
