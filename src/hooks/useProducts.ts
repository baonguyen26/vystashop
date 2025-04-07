import { useQuery } from "@tanstack/react-query";
import { apiClient } from "src/libs/api-client";
import { IProduct } from "src/types/product.type";
import { cleanUrl } from "src/utils/cn";

export const fetchProducts = async (url: string): Promise<{ data: IProduct[]; total: number }> => {
    const response =  await apiClient.get<IProduct[]>(`${url}`, { withCredentials: false });

    const totalUrl = cleanUrl(url);
    const total = await apiClient.get<IProduct[]>(`${totalUrl}`, { withCredentials: false });

    return { data: response.data, total: total.data.length };
};

export const useProducts = (url: string) => {
    return useQuery({
        queryKey: ["products", url],
        queryFn: () => fetchProducts(url)
    })
}