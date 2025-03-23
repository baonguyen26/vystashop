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
          path: "/products",
          lazy: async () => {
            const { ProductsRouter } = await import("./routes/app/products-page");
            return { Component: ProductsRouter };
          },
        },
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
