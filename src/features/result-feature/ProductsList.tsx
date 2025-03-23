import { ProductsSection } from "src/components/widgets";
import { useState } from "react";
import { useProducts } from "src/hooks/useProducts";
import { PRODUCTS_LIMIT } from "src/constants/TimeInterval";

export const ProductsList = () => {
    const [page, setPage] = useState(1);
    const { data, isLoading } = useProducts(`?p=${page}&l=${PRODUCTS_LIMIT}`);
    const products = data?.data || [];
    const totalProducts = data?.total || 0;

    

    return (
        <>
            {isLoading ? (
                <p>Loading...</p> 
            ) : (
                <ProductsSection products={products} currentPage={page} onPage={setPage} totalPage={Math.ceil(totalProducts / PRODUCTS_LIMIT)} />
            )}
        </>
    );
} 