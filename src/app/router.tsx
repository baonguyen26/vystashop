import { createBrowserRouter } from "react-router-dom";

/**
 * create main router
 */
export const createRouter = () => {
  return createBrowserRouter([
    {
      path: "",
      lazy: async () => {
        const { AppRouterRoot } = await import("./routes/root");
        return { Component: AppRouterRoot };
      },
      children: [
        {
          path: "",
          lazy: async () => {
            const { HomeRouter } = await import("./routes/app/home");
            return { Component: HomeRouter };
          },
        },
        {
          path: "results",
          lazy: async () => {
            const { ProductResultRouter } = await import("./routes/app/product-result");
            return { Component: ProductResultRouter };
          },
        },
        {
          path: "compare/:name/:id",
          lazy: async () => {
            const { CompareRouter } = await import("./routes/app/compare");
            return { Component: CompareRouter };
          },
        },
        {
          path: "c/:category",
          lazy: async () => {
            const { ProductResultRouter } = await import("./routes/app/product-result");
            return { Component: ProductResultRouter };
          },
        },
        {
          path: "offers",
          lazy: async () => {
            const { OfferListCard } = await import("../components/OfferListCard/OfferListCard");
            return { Component: OfferListCard };
          },
        }
      ],
    },
    {
      path: "*",
      lazy: async () => {
        const { NotFoundRouter } = await import("./routes/not-found");
        return { Component: NotFoundRouter };
      },
    },
  ]);
};
