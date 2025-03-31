import { ProductsSection } from "src/components/widgets";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useProducts } from "src/hooks/useProducts";
import { PRODUCTS_LIMIT } from "src/constants/TimeInterval";

export const ProductsList = () => {
    const location = useLocation();
    
    const [page, setPage] = useState(1);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const pageFromUrl = parseInt(params.get("p") || "1", 10);
        setPage(pageFromUrl);
    }, [location.search]);

    const { data, isLoading } = useProducts(
        `${location.search ? `${location.search}&p=${page}&l=${PRODUCTS_LIMIT}` :
                            `?p=${page}&l=${PRODUCTS_LIMIT}`}`
    );
    const products = data?.data || [];
    const totalProducts = data?.total || 0;

    return (
        <>
            {isLoading ? (
                <p>Loading...</p> 
            ) : (
                <ProductsSection 
                    products={products} 
                    currentPage={page} 
                    onPage={(newPage) => {
                        setPage(newPage);
                        const params = new URLSearchParams(location.search);
                        params.set("p", newPage.toString());
                        window.history.pushState(null, "", `?${params.toString()}`);
                    }}
                    totalProducts={totalProducts} 
                />
            )}
        </>
    );
};