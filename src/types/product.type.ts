export interface IProduct {
  createdAt: string;
  id: string;
  offerId: string;
  title: string;
  description: string;
  url: string;
  image: string;
  contentLanguage: string;
  targetCountry: string;
  availability: string;
  brand: string;
  condition: string;
  price: {
    value: string;
    currency: string;
  };
  freeShipping: boolean;
  isSale: boolean;
  category?: string;
  shop: string;
  shopImage: string;
  rating: string;
  payments: string[];
}

export type BestOfferItem = {
  shop: string;
  price: {
    value: string;
    currency: string;
  };
  freeShipping: boolean;
  rating: string;
  url: string;
};