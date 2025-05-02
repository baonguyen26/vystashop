import { useQuery } from "@tanstack/react-query";
import { apiClient } from "src/libs/api-client";
import { IProduct } from "src/types/product.type";
// import { cleanUrl } from "src/utils/cn";

export const fetchProducts = async (
  url: string
): Promise<{ data: IProduct[]; total: number }> => {
  const response = await apiClient.get<{ data: IProduct[]; total: number }>(
    `${url}`
  );
  const { data: products, total } = response.data;
  return {
    data: products,
    total: total,
  };
};

export const useProducts = (url: string) => {
  return useQuery({
    queryKey: ["products", url],
    queryFn: () => fetchProducts(url),
  });
};

export const fetchProductOffer = async (
  url: string
): Promise<{ product: IProduct; offers: IProduct[] }> => {
  const productRes = await apiClient.get<IProduct>(url);
  const product = productRes.data;

  const offerId = product.offerId;
  const offerRes = await apiClient.get<{ data: IProduct[] }>(
    `?offerId=${offerId}`
  );
  const offers = offerRes.data.data;

  return {
    product,
    offers,
  };
};

export const useProduct = (url: string) => {
  return useQuery({
    queryKey: ["product", url],
    queryFn: () => fetchProductOffer(url),
  });
};
