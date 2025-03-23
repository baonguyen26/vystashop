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
}
