import { LocalIcon } from "src/assets/local-icon";
import { BRAND_PROPERTIES } from "src/constants/brand-properties";

export const PopularBrands = () => {
  return (
    <div className="flex flex-col gap-[20px] px-[100px]">
      <h2 className="text-2xl font-bold ">Popular Brands</h2>
      <div className="flex gap-3 items-center justify-between">
        {BRAND_PROPERTIES.map((brand, index) => (
          <div
            className="flex flex-col gap-5"
            key={index}
          >
            <div
              className="place-items-center place-content-center w-50 h-30 rounded-xl"
              style={{ backgroundColor: brand.brand_color }}
            >
              <LocalIcon
                iconName={brand.brand_icon}
                width={brand.width}
                height={brand.height}
              />
            </div>
            <span className="text-sm font-medium text-center">
              {brand.brand_name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
