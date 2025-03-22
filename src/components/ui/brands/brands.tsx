import { LocalIcon } from "src/assets/local-icon";
import { BrandProperties } from "src/constants/brand-properties";

export const Brand = (brand: BrandProperties, index: number) => {
  return (
    <div
      className="flex flex-col gap-5"
      key={index}
    >
      <div
        className="place-items-center place-content-center w-45 h-30 rounded-xl"
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
  );
};
