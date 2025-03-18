export interface IProduct {
    title: string;
    image: string;
    brand: string;
    price: {
        value: string;
        currency: string;
    };
}
