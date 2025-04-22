export interface IProduct {
  id: string;
  title: string;
  description: string;
  image: string;
  avatar: string;
  brand: string;
  price: {
    value: string;
    currency: string;
  };
  availability: string;
  condition: string;
  contentLanguage: string;
  createdAt: string;
  freeShipping: boolean;
  isSale: boolean;
  name: string;
  offerId: string;
  targetCountry: string;
  url: string;
  category?: string;
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

export type Producttttt = {
    id: string;
    title: string;
    brand: string;
    shop: string;
    description: string;
    image: string;
    shopImage: string;
    price: {
      value: string;
      currency: string;
    };
    url: string;
    freeShipping: boolean;
    rating: string;
    payments: string[];
  };

export type IProductDetail = {
  title: string;
  brand: string;
  shop: string;
  description: string;
  image: string;
  shopImage: string;
  price: {
    value: string;
    currency: string;
  };
  url: string;
  freeShipping: boolean;
  rating: string;
  payments: string[];
};
