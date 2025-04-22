import { apiClient } from "src/libs/api-client";
import { useQuery } from "@tanstack/react-query";
import {Producttttt } from "src/types/product.type";

export const getProductToCompare = () => {
    return apiClient.get<Producttttt[]>("?offerId=5337720798-online:en:GB:40033461565");
};

export const useGetProductToCompare = () => {
    return useQuery({
        queryKey: ["account-setting"],
        queryFn: getProductToCompare,
    });
};
