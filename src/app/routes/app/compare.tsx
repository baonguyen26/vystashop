import { ProductResultFooter, ProductResultHeader } from "src/components/layouts/product-result-layout";
import { CompareMain } from "src/features/compare-feature/compare-main";

export const CompareRouter = () => {
  return (
    <>
      <ProductResultHeader/>
      <CompareMain />
      <ProductResultFooter/>
    </>
  );
};
