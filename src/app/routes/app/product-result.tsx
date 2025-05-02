import {
  ProductResultFooter,
  ProductResultHeader,
  ProductResultMain,
} from "src/components/layouts/product-result-layout";
import { useEffect } from "react";

export const ProductResultRouter = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ProductResultHeader />
      <ProductResultMain />
      <ProductResultFooter />
    </>
  );
};
