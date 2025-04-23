import { useQuery } from "@tanstack/react-query";
import { apiClient } from "src/libs/api-client";
import { IProduct } from "src/types/product.type";
import { cleanUrl } from "src/utils/cn";

export const fetchProducts = async (url: string): Promise<{ data: (IProduct & {offers: number })[]; total: number }> => {
    const response =  await apiClient.get<IProduct[]>(`${url}`, { withCredentials: false });
    const products = response.data;

    const totalUrl = cleanUrl(url);
    const totalRes = await apiClient.get<IProduct[]>(`${totalUrl}`, { withCredentials: false });
    const totalProducts = totalRes.data.length;

    const numOfferProducts = await Promise.all(
        products.map(async (product) => {
            const offerRes = await apiClient.get<IProduct[]>(`?offerId=${product.offerId}`, {
                withCredentials: false,
            });

            const offerCount = offerRes.data.filter((p) => p.id !== product.id).length;
    
            return {
                ...product,
                offers: offerCount
            };
        }
    ))

    return { data: numOfferProducts, total: totalProducts };
};

export const fetchProductOffer = async (url: string): Promise<{ product: IProduct; offers: IProduct[] }> => {
    const productRes = await apiClient.get<IProduct>(url, { withCredentials: false });
    const product = productRes.data;

    const offerId = product.offerId;
    const offerRes  = await apiClient.get<IProduct[]>(`?offerId=${offerId}`, { withCredentials: false });
    const offers = offerRes.data.filter(p => p.id != product.id);

    return {
        product: product,
        offers
    }
}

export const useProducts = (url: string) => {
    return useQuery({
        queryKey: ["products", url],
        queryFn: () => fetchProducts(url)
    })
}

export const useProduct = (url: string) => {
    return useQuery({
        queryKey: ["product", url],
        queryFn: () => fetchProductOffer(url)
    })
}