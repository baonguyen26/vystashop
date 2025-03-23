import { useQuery } from "@tanstack/react-query";
import { apiClient } from "src/libs/api-client";
import { IProduct } from "src/types/product.type";

export const fetchProducts = async (url: string): Promise<{ data: IProduct[]; total: number }> => {
    const response =  await apiClient.get<IProduct[]>(`${url}`, { withCredentials: false });

    const total = await apiClient.get<IProduct[]>(``, { withCredentials: false });
    
    return { data: response.data, total: total.data.length };
};

export const useProducts = (url: string) => {
    return useQuery({
        queryKey: ["products", url],
        queryFn: () => fetchProducts(url)
    })
}