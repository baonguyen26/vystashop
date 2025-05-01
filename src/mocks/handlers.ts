import { http, HttpResponse } from 'msw';
import data from '../../data.json';
import { IProduct, Test } from 'src/types/product.type';

export const handlers = [
  http.get('/api/products', ({ request }) => {
    const url = new URL(request.url);

    // Lấy query params
    const offerId = url.searchParams.get('offerId');
    const category = url.searchParams.get('category');
    const sort = url.searchParams.get('sort');
    const brand = url.searchParams.get('brand');
    const shop = url.searchParams.get('shop');
    const freeShipping = url.searchParams.get('freeShipping');
    const rating = url.searchParams.get('rating');
    const q = url.searchParams.get('q');
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '1000');

    let products = data?.data as Test;

    // FILTER
    products = products.filter(p => {
      const matchOfferId = offerId ? p.offerId?.includes(offerId) : true;
      const matchCategory = category ? p.category === category : true;
      const matchBrand = brand ? p.brand?.toLowerCase() === brand.toLowerCase() : true;
      const matchShop = shop ? p.shop?.toLowerCase() === shop.toLowerCase() : true;
      const matchFreeShipping = freeShipping === 'true' ? p.freeShipping === true : true;
      const matchRating = rating ? parseFloat(p.rating || '0') >= parseFloat(rating) : true;
      const matchQuery = q ? p.title?.toLowerCase().includes(q.toLowerCase()) : true;

      return matchOfferId && matchCategory && matchBrand && matchShop && matchFreeShipping && matchRating && matchQuery;
    });

    // SORT
    if (sort === 'price') {
      products.sort((a, b) => a.price - b.price);
    } else if (sort === 'rating') {
      products.sort((a, b) => parseFloat(b.rating || '0') - parseFloat(a.rating || '0'));
    }

    // PAGINATION
    const start = (page - 1) * limit;
    const end = start + limit;
    const paginated = products.slice(start, end);

    return HttpResponse.json({
      total: products.length,
      page,
      limit,
      data: paginated,
    });
  }),

  // Lấy chi tiết sản phẩm
  http.get('/api/products/:id', ({ params }) => {
    const { id } = params;
    const product = (data.products as IProduct[]).find(p => p.id === id);
    if (!product) {
      return HttpResponse.json({ error: 'Product not found' }, { status: 404 });
    }
    return HttpResponse.json(product);
  }),
];
