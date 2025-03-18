import { createBrowserRouter } from "react-router-dom";

/**
 * Tạo router chính của ứng dụng
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
            const { ContentRoot } = await import("./routes/app/content-root");
            return { Component: ContentRoot };
          },
          children: [
            {
              path: "/",
              lazy: async () => {
                const { HomePage } = await import("./routes/app/HomePage");
                return { Component: HomePage };
              },
            },
            {
              path: "test",
              lazy: async () => {
                const { Test } = await import("./routes/app/page");
                return { Component: Test };
              },
            },
          ],
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
