import { ProductResultHeader } from "src/components/layouts/product-result-layout";
import { BrandFilter, ShopFilter } from "src/components/ui";
import { brandFilterAttributes } from "src/constants/brand-filter";
import { ShopFilterAttributes } from "src/constants/shop-filter";

export const ProductResultRouter = () => {
  return (
    <>
      <ProductResultHeader />
      <BrandFilter items={brandFilterAttributes} />
      <ShopFilter items={ShopFilterAttributes} />
    </>
  );
};
