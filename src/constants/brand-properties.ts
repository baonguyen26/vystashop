export type BrandProperties = {
  brand_icon:
    | "ic_rothys"
    | "ic_puravida"
    | "ic_bestbuy"
    | "ic_adidas"
    | "ic_apple"
    | "ic_nike";
  brand_name: string;
  brand_color: string;
  width: number;
  height: number;
};

export const BRAND_PROPERTIES: BrandProperties[] = [
  {
    brand_icon: "ic_rothys",
    brand_name: "ROTHY'S",
    brand_color: "#EEEEEE",
    width: 100,
    height: 50,
  },
  {
    brand_icon: "ic_puravida",
    brand_name: "Puravida",
    brand_color: "#FCEBE5",
    width: 140,
    height: 25,
  },
  {
    brand_icon: "ic_bestbuy",
    brand_name: "BEST BUY",
    brand_color: "#EEEEEE",
    width: 140,
    height: 55,
  },
  {
    brand_icon: "ic_adidas",
    brand_name: "Adidas",
    brand_color: "#FCF7E5",
    width: 80,
    height: 56,
  },
  {
    brand_icon: "ic_apple",
    brand_name: "Apple",
    brand_color: "#E5F1FC",
    width: 120,
    height: 60,
  },
  {
    brand_icon: "ic_nike",
    brand_name: "Nike",
    brand_color: "#EEEEEE",
    width: 180,
    height: 40,
  },
];
