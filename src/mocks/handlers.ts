import { http, HttpResponse } from "msw";
import data from "../../data.json";

export const handlers = [
  
  http.get("/api/products/:id", ({ params }) => {
    const { id } = params;
    const product = data.find((p) => p.id.toString() === id);

    if (!product) {
      return HttpResponse.json({ message: "Not Found" }, { status: 404 });
    }

    return HttpResponse.json(product);
  }),

  http.get("/api/products", ({ request }) => {
    const url = new URL(request.url);

    const title = url.searchParams.get("title");
    const category = url.searchParams.get("category");
    const brand = url.searchParams.get("brand");
    const shop = url.searchParams.get("shop");
    const rating = url.searchParams.get("rating");
    const offerId = url.searchParams.get("offerId"); // <-- thêm dòng này
    const sortBy = url.searchParams.get("sortBy");
    const order = url.searchParams.get("order");
    const page = Number(url.searchParams.get("p") || "1");
    const limit = Number(url.searchParams.get("l") || "24");

    let filtered = data.filter((product) => {
      const matchTitle = title
        ? product.title.toLowerCase().includes(title.toLowerCase())
        : true;

      const matchCategory = category
        ? product.category.toLowerCase() === category.toLowerCase()
        : true;

      const matchBrand = brand
        ? product.brand.toLowerCase() === brand.toLowerCase()
        : true;

      const matchShop = shop
        ? product.shop.toLowerCase() === shop.toLowerCase()
        : true;

      const matchRating = rating
        ? Math.floor(Number(product.rating)) === Number(rating)
        : true;

      const matchOfferId = offerId
        ? product.offerId?.toString() === offerId
        : true;

      return (
        matchTitle &&
        matchCategory &&
        matchBrand &&
        matchShop &&
        matchRating &&
        matchOfferId
      );
    });

    // SORT
    if (sortBy === "price") {
      filtered = filtered.sort((a, b) => {
        const aPrice = Number(a.price);
        const bPrice = Number(b.price);
        return order === "asc" ? aPrice - bPrice : bPrice - aPrice;
      });
    }

    // PAGINATION
    const total = filtered.length;
    const start = (page - 1) * limit;
    const end = start + limit;
    const paginated = filtered.slice(start, end);

    return HttpResponse.json({
      data: paginated,
      total,
    });
  }),
];
