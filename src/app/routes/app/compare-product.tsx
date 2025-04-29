import { CompareProductHeader } from "src/components/layouts/compare-product/compare-product-header";
import { CompareProductMain } from "src/components/layouts/compare-product/compare-product-main";
import { ProductResultFooter } from "src/components/layouts/product-result-layout";
import { useEffect } from "react";

export const CompareProductRouter = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (    
        <>
            <CompareProductHeader/>
            <CompareProductMain/>
            <ProductResultFooter/>
        </>
    );
}