import { memo, RefObject, useEffect, useRef } from "react";
import { IProduct } from "src/types/product.type";
import ProductCard from "../ui/card";
import { TIME_CAROUSEL } from "src/constants";

const data: IProduct[] = [
  {
    image: "gigabyte_image",
    title:
      "Gigabyte Radeon RX 9070 XT GAMING OC 16G GDDR6 16GB Graphics Card - GV- R9070XTGAMING OC-16GD",
    price: { value: "$689.95", currency: "USA" },
    brand: "awd-it.co.uk",
  },
  {
    image: "msi_nvidia_image",
    title:
      "Gigabyte Radeon RX 9070 XT GAMING OC 16G GDDR6 16GB Graphics Card - GV- R9070XTGAMING OC-16GD",
    price: { value: "$689.95", currency: "USA" },
    brand: "awd-it.co.uk",
  },
  {
    image: "gigabyte_image",
    title:
      "Gigabyte Radeon RX 9070 XT GAMING OC 16G GDDR6 16GB Graphics Card - GV- R9070XTGAMING OC-16GD",
    price: { value: "$689.95", currency: "USA" },
    brand: "awd-it.co.uk",
  },
  {
    image: "gigabyte_image",
    title:
      "Gigabyte Radeon RX 9070 XT GAMING OC 16G GDDR6 16GB Graphics Card - GV- R9070XTGAMING OC-16GD",
    price: { value: "$689.95", currency: "USA" },
    brand: "awd-it.co.uk",
  },
  {
    image: "gigabyte_image",
    title:
      "Gigabyte Radeon RX 9070 XT GAMING OC 16G GDDR6 16GB Graphics Card - GV- R9070XTGAMING OC-16GD",
    price: { value: "$689.95", currency: "USA" },
    brand: "awd-it.co.uk",
  },
  {
    image: "gigabyte_image",
    title:
      "Gigabyte Radeon RX 9070 XT GAMING OC 16G GDDR6 16GB Graphics Card - GV- R9070XTGAMING OC-16GD",
    price: { value: "$689.95", currency: "USA" },
    brand: "awd-it.co.uk",
  },
  {
    image: "gigabyte_image",
    title:
      "Gigabyte Radeon RX 9070 XT GAMING OC 16G GDDR6 16GB Graphics Card - GV- R9070XTGAMING OC-16GD",
    price: { value: "$689.95", currency: "USA" },
    brand: "awd-it.co.uk",
  },
  {
    image: "gigabyte_image",
    title:
      "Gigabyte Radeon RX 9070 XT GAMING OC 16G GDDR6 16GB Graphics Card - GV- R9070XTGAMING OC-16GD",
    price: { value: "$689.95", currency: "USA" },
    brand: "awd-it.co.uk",
  },
  {
    image: "gigabyte_image",
    title:
      "Gigabyte Radeon RX 9070 XT GAMING OC 16G GDDR6 16GB Graphics Card - GV- R9070XTGAMING OC-16GD",
    price: { value: "$689.95", currency: "USA" },
    brand: "awd-it.co.uk",
  },
];

export const ProductCarousel = memo(({
  scrollRef,
}: {
  scrollRef: RefObject<HTMLDivElement | null>;
}) => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const scrollCarousel = () => {
     if(intervalRef.current) {
      scrollRef.current!.scrollLeft += scrollRef.current!.clientWidth;
      
      if(
        scrollRef.current!.scrollLeft + scrollRef.current!.clientWidth >=
        scrollRef.current!.scrollWidth
      ) {
        scrollRef.current!.scrollLeft = 0;
      }
     }
    }

    intervalRef.current = setInterval(scrollCarousel, TIME_CAROUSEL);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
  }, [scrollRef]);

  return (
    <div
      ref={scrollRef}
      className="w-full overflow-x-auto flex gap-[30px] scroll-smooth snap-x snap-mandatory"
    >
      {data.map((product, index) => (
        <ProductCard
          key={index}
          product={product}
        />
      ))}
    </div>
  );
});
