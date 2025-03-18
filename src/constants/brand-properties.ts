type BrandProperties = {
  brand_icon:
    | "apple_brand"
    | "nike_brand"
    | "dyson_brand"
    | "lego_brand"
    | "aeg_brand"
    | "michael_kors_brand";
  brand_name: string;
  brand_color: string;
  width: number;
  height: number;
};

export const BRAND_PROPERTIES: BrandProperties[] = [
  {
    brand_icon: "apple_brand",
    brand_name: "Apple",
    brand_color: "#EEEEEE",
    width: 45,
    height: 50,
  },
  {
    brand_icon: "nike_brand",
    brand_name: "Nike",
    brand_color: "#FCEBE5",
    width: 125,
    height: 45,
  },
  {
    brand_icon: "dyson_brand",
    brand_name: "Dyson",
    brand_color: "#EEEEEE",
    width: 140,
    height: 55,
  },
  {
    brand_icon: "lego_brand",
    brand_name: "Lego",
    brand_color: "#FCF7E5",
    width: 56,
    height: 56,
  },
  {
    brand_icon: "aeg_brand",
    brand_name: "AEG",
    brand_color: "#E5F1FC",
    width: 83,
    height: 31,
  },
  {
    brand_icon: "michael_kors_brand",
    brand_name: "Michael Kors",
    brand_color: "#EEEEEE",
    width: 173,
    height: 18,
  },
];