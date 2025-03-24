import ProductCard from "../ui/card";
import { IProduct } from "src/types/product.type";
import { Key } from "react";
import { Pagination } from "../ui/pagination";
import { PRODUCTS_LIMIT } from "src/constants/TimeInterval";

interface ProductsProps {
    products: IProduct[];
    currentPage: number;
    totalProducts: number;
    onPage: (page: number) => void;
}

export const ProductsSection = ({ products, currentPage, totalProducts, onPage }: ProductsProps) => {
    return (
        <>
            <div className={"grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-start gap-[20px] sm:gap-5 w-full"}>
                {products.map((product: IProduct, index: Key) => (
                    <ProductCard product={product} key={index} />
                ))}
            </div>

            {(totalProducts > PRODUCTS_LIMIT) && <Pagination totalPage={Math.ceil(totalProducts / 24)} currentPage={currentPage} onPage={onPage} />}
        </>
    );
}