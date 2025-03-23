import { memo, RefObject } from "react";
import { IProduct } from "src/types/product.type";
import ProductCard from "../ui/card";
import { TIME_CAROUSEL } from "src/constants/TimeInterval";
import { useAutoScroll } from "src/hooks";

const data: IProduct[] = [
  {
      id: "1",
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQK1_nKkVXyMHV4Iscqh9VUWQvhdC-ycDi0VVWflanq5q0LYNDHKX_jnd65BoN4LSt6TVix76PrqCC0poTQw9wxAiDRLGm3bV6u2BYYkNy-796ZOrpDnII-nA&usqp=CAE",
      title: "Gigabyte Radeon RX 9070 XT GAMING OC 16G GDDR6 16GB Graphics Card",
      price: { value: "689.95", currency: "USD" },
      brand: "Gigabyte",
      description: "Powerful graphics card for gaming and rendering.",
      avatar: "https://example.com/avatar1.jpg",
      availability: "in stock",
      condition: "new",
      contentLanguage: "en",
      createdAt: "2025-03-10T04:06:06.283Z",
      freeShipping: false,
      isSale: true,
      name: "Gigabyte RX 9070 XT",
      offerId: "9070XT-GB-1",
      targetCountry: "US",
      url: "https://example.com/product/1",
  },
  {
      id: "2",
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQK1_nKkVXyMHV4Iscqh9VUWQvhdC-ycDi0VVWflanq5q0LYNDHKX_jnd65BoN4LSt6TVix76PrqCC0poTQw9wxAiDRLGm3bV6u2BYYkNy-796ZOrpDnII-nA&usqp=CAE",
      title: "MSI GeForce RTX 4070 GAMING X TRIO 12GB GDDR6X Graphics Card",
      price: { value: "799.99", currency: "USD" },
      brand: "MSI",
      description: "High-performance RTX 4070 with triple-fan cooling.",
      avatar: "https://example.com/avatar2.jpg",
      availability: "in stock",
      condition: "new",
      contentLanguage: "en",
      createdAt: "2025-03-10T04:10:00.000Z",
      freeShipping: true,
      isSale: false,
      name: "MSI RTX 4070",
      offerId: "RTX4070-MSI-2",
      targetCountry: "US",
      url: "https://example.com/product/2",
  },
  {
      id: "3",
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQK1_nKkVXyMHV4Iscqh9VUWQvhdC-ycDi0VVWflanq5q0LYNDHKX_jnd65BoN4LSt6TVix76PrqCC0poTQw9wxAiDRLGm3bV6u2BYYkNy-796ZOrpDnII-nA&usqp=CAE",
      title: "ASUS TUF Gaming Radeon RX 7900 XT OC Edition 20GB GDDR6",
      price: { value: "899.99", currency: "USD" },
      brand: "ASUS",
      description: "TUF Gaming RX 7900 XT with enhanced durability.",
      avatar: "https://example.com/avatar3.jpg",
      availability: "out of stock",
      condition: "new",
      contentLanguage: "en",
      createdAt: "2025-03-10T04:15:00.000Z",
      freeShipping: false,
      isSale: true,
      name: "ASUS TUF RX 7900 XT",
      offerId: "TUF7900XT-ASUS-3",
      targetCountry: "US",
      url: "https://example.com/product/3",
  },
  {
      id: "4",
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQK1_nKkVXyMHV4Iscqh9VUWQvhdC-ycDi0VVWflanq5q0LYNDHKX_jnd65BoN4LSt6TVix76PrqCC0poTQw9wxAiDRLGm3bV6u2BYYkNy-796ZOrpDnII-nA&usqp=CAE",
      title: "ASUS TUF Gaming Radeon RX 7900 XT OC Edition 20GB GDDR6",
      price: { value: "899.99", currency: "USD" },
      brand: "ASUS",
      description: "TUF Gaming RX 7900 XT with enhanced durability.",
      avatar: "https://example.com/avatar3.jpg",
      availability: "out of stock",
      condition: "new",
      contentLanguage: "en",
      createdAt: "2025-03-10T04:15:00.000Z",
      freeShipping: false,
      isSale: true,
      name: "ASUS TUF RX 7900 XT",
      offerId: "TUF7900XT-ASUS-3",
      targetCountry: "US",
      url: "https://example.com/product/3",
  },
  {
      id: "5",
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQK1_nKkVXyMHV4Iscqh9VUWQvhdC-ycDi0VVWflanq5q0LYNDHKX_jnd65BoN4LSt6TVix76PrqCC0poTQw9wxAiDRLGm3bV6u2BYYkNy-796ZOrpDnII-nA&usqp=CAE",
      title: "ASUS TUF Gaming Radeon RX 7900 XT OC Edition 20GB GDDR6",
      price: { value: "899.99", currency: "USD" },
      brand: "ASUS",
      description: "TUF Gaming RX 7900 XT with enhanced durability.",
      avatar: "https://example.com/avatar3.jpg",
      availability: "out of stock",
      condition: "new",
      contentLanguage: "en",
      createdAt: "2025-03-10T04:15:00.000Z",
      freeShipping: false,
      isSale: true,
      name: "ASUS TUF RX 7900 XT",
      offerId: "TUF7900XT-ASUS-3",
      targetCountry: "US",
      url: "https://example.com/product/3",
  },
  {
      id: "6",
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQK1_nKkVXyMHV4Iscqh9VUWQvhdC-ycDi0VVWflanq5q0LYNDHKX_jnd65BoN4LSt6TVix76PrqCC0poTQw9wxAiDRLGm3bV6u2BYYkNy-796ZOrpDnII-nA&usqp=CAE",
      title: "ASUS TUF Gaming Radeon RX 7900 XT OC Edition 20GB GDDR6",
      price: { value: "899.99", currency: "USD" },
      brand: "ASUS",
      description: "TUF Gaming RX 7900 XT with enhanced durability.",
      avatar: "https://example.com/avatar3.jpg",
      availability: "out of stock",
      condition: "new",
      contentLanguage: "en",
      createdAt: "2025-03-10T04:15:00.000Z",
      freeShipping: false,
      isSale: true,
      name: "ASUS TUF RX 7900 XT",
      offerId: "TUF7900XT-ASUS-3",
      targetCountry: "US",
      url: "https://example.com/product/3",
  },
  {
      id: "7",
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQK1_nKkVXyMHV4Iscqh9VUWQvhdC-ycDi0VVWflanq5q0LYNDHKX_jnd65BoN4LSt6TVix76PrqCC0poTQw9wxAiDRLGm3bV6u2BYYkNy-796ZOrpDnII-nA&usqp=CAE",
      title: "ASUS TUF Gaming Radeon RX 7900 XT OC Edition 20GB GDDR6",
      price: { value: "899.99", currency: "USD" },
      brand: "ASUS",
      description: "TUF Gaming RX 7900 XT with enhanced durability.",
      avatar: "https://example.com/avatar3.jpg",
      availability: "out of stock",
      condition: "new",
      contentLanguage: "en",
      createdAt: "2025-03-10T04:15:00.000Z",
      freeShipping: false,
      isSale: true,
      name: "ASUS TUF RX 7900 XT",
      offerId: "TUF7900XT-ASUS-3",
      targetCountry: "US",
      url: "https://example.com/product/3",
  },
];

export const ProductCarousel = memo(({
  scrollRef,
}: {
  scrollRef: RefObject<HTMLDivElement | null>;
}) => {
  useAutoScroll(scrollRef, TIME_CAROUSEL);

  return (
    <div
      ref={scrollRef}
      className="w-full overflow-x-auto flex gap-[30px] scroll-smooth snap-x snap-mandatory"
    >
      {data.map((product, index) => (
        <ProductCard
          key={index}
          product={product}
          className="w-[210px]"
        />
      ))}
    </div>
  );
});
