export interface Offer {
  shop: string;
  rating?: string;
  shopImage: string;
  payments: string[];
  title: string;
  freeShipping: boolean;
  price: number;
  url: string;
}
// Dùng type tạm thời để xử lí typescript, sau ni sẽ dùng type của product