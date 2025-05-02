import { ProductsSection } from "src/components/widgets";
import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useProducts } from "src/hooks/useProducts";
import { PRODUCTS_LIMIT } from "src/constants/TimeInterval";
import { categories } from "src/constants/category-properties";
import { Spinner } from "src/components/ui/spinner/spinner";

export const ProductsList = () => {
  const location = useLocation();
  const { category } = useParams<{ category: string }>();

  const [page, setPage] = useState(1);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const pageFromUrl = parseInt(params.get("p") || "1", 10);
    setPage(pageFromUrl);
  }, [location.search]);

  const buildQueryString = () => {
    const params = new URLSearchParams(location.search);

    params.set("p", page.toString());
    params.set("l", PRODUCTS_LIMIT.toString());

    if (category) {
      const subcategory = categories
        .flatMap((item) => item.subcategories)
        .find((sub) => sub.id === category);

      params.set("category", subcategory?.id || category);
    }
    return `?${params.toString()}`;
  };

  const queryString = buildQueryString();
  const { data, isLoading } = useProducts(queryString);
  const products = data?.data || [];
  const totalProducts = data?.total || 0;

  return (
    <div className="w-full flex flex-col justify-center items-center">
      {isLoading ? (
        <Spinner />
      ) : products.length === 0 ? (
        <p className="text-gray-500 text-lg">Don't see any product!.</p>
      ) : (
        <ProductsSection
          products={products}
          currentPage={page}
          onPage={(newPage) => {
            setPage(newPage);
            const params = new URLSearchParams(location.search);
            params.set("p", newPage.toString());
            window.history.pushState(null, "", `?${params.toString()}`);
            window.scrollTo(0, 0);
          }}
          totalProducts={totalProducts}
        />
      )}
    </div>
  );
};
