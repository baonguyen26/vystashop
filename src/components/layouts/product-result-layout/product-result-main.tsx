import { BrandFilter, DiscountsFilter, ShopFilter, SortDropdown } from "src/components/ui";
import { brandFilterAttributes } from "src/constants/brand-filter";
import { ShopFilterAttributes } from "src/constants/shop-filter";
import { ProductsList } from "src/features/result-feature";
import { discountFilterAttribute } from "src/constants/discount-filter";

export const ProductResultMain = () => {
  return (
    <div className="w-full">
      <div className="flex justify-start gap-[30px] max-w-[1440px] mb-[40px] mx-auto">
        <div className="hiden md:flex flex-col flex-nowrap bg-white w-[208px] pb-4 md:pt-[62px] gap-[10px]">
          <BrandFilter items={brandFilterAttributes}/>
          <ShopFilter  items={ShopFilterAttributes}/>
          <DiscountsFilter items={discountFilterAttribute}/>
        </div>
        <div className="flex flex-col items-start flex-nowrap md:w-[calc(100%-208px)] gap-[20px]">
          <SortDropdown />
          <ProductsList />
        </div>
      </div>
    </div>
  );
};
