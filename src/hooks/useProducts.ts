import { useQuery } from "@tanstack/react-query";
import { apiClient } from "src/libs/api-client";
import { IProduct, Test } from "src/types/product.type";
// import { cleanUrl } from "src/utils/cn";

export const fetchProducts = async (url: string): Promise<Test> => {
  const response = await apiClient.get<Test>(`${url}`, {
    withCredentials: false,
  });
  const products = response.data;
  // console.log(products);

  return products;
};

export const fetchProductOffer = async (
  url: string
): Promise<{ product: IProduct; offers: IProduct[] }> => {
  const productRes = await apiClient.get<IProduct>(url, {
    withCredentials: false,
  });
  const product = productRes.data;

  const offerId = product.offerId;
  const offerRes = await apiClient.get<IProduct[]>(`?offerId=${offerId}`, {
    withCredentials: false,
  });
  const offers = offerRes.data;
  // .filter(p => p.id != product.id);

  return {
    product: product,
    offers,
  };
};

export const useProducts = (url: string) => {
  return useQuery({
    queryKey: ["products", url],
    queryFn: () => fetchProducts(url),
  });
};

export const useProduct = (url: string) => {
  return useQuery({
    queryKey: ["product", url],
    queryFn: () => fetchProductOffer(url),
  });
};
