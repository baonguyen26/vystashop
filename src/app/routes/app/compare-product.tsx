import { CompareProductMain } from "src/components/layouts/compare-product/compare-product-main";
import { ProductResultFooter, ProductResultHeader } from "src/components/layouts/product-result-layout";

export const CompareProductRouter = () => {
    return (
        <>
            <ProductResultHeader/>
            <CompareProductMain/>
            <ProductResultFooter/>
        </>
    );
}