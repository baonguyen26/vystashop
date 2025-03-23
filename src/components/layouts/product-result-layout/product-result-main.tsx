import { BrandFilter, ShopFilter, SortDropdown } from "src/components/ui";
import { brandFilterAttributes } from "src/constants/brand-filter";
import { ShopFilterAttributes } from "src/constants/shop-filter";
import { ProductsList } from "src/features/result-feature";

export const ProductResultMain = () => {
  return (
    <div className="flex justify-start gap-[20px] max-w-[1440px] mb-[40px]">
      <div className="hiden md:flex flex-col flex-nowrap bg-white w-[208px] pb-4 md:pt-[62px]">
        <BrandFilter items={brandFilterAttributes}/>
        <ShopFilter  items={ShopFilterAttributes}/>
      </div>
      <div className="flex flex-col items-start flex-nowrap md:w-[calc(100%-208px)]">
        <SortDropdown />
        <ProductsList />
      </div>
    </div>
  );
};
