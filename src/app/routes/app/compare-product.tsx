import { CompareProductHeader } from "src/components/layouts/compare-product/compare-product-header";
import { CompareProductMain } from "src/components/layouts/compare-product/compare-product-main";
import { ProductResultFooter } from "src/components/layouts/product-result-layout";

export const CompareProductRouter = () => {
    return (
        <>
            <CompareProductHeader/>
            <CompareProductMain/>
            <ProductResultFooter/>
        </>
    );
}