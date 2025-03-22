import { BRAND_PROPERTIES } from "src/constants/brand-properties";
import { Brand } from "../ui";

export const PopularBrands = () => {
  return (
    <div className="flex flex-col gap-[20px] px-[100px]">
      <h2 className="text-2xl font-bold ">Popular Brands</h2>
      <div className="flex gap-3 items-center justify-between">
        {BRAND_PROPERTIES.map((brand, index) => Brand(brand, index))}
      </div>
    </div>
  );
};
