import { useEffect, useRef } from "react";
import { BRAND_PROPERTIES } from "src/constants/brand-properties";
import { Brand } from "../ui";

export const PopularBrands: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let direction = 1;
    const scrollStep = 400;
    const scrollInterval = 5000;

    const interval = setInterval(() => {
      if (
        scrollContainer.scrollLeft + scrollContainer.clientWidth >=
        scrollContainer.scrollWidth
      ) {
        direction = -1;
      } else if (scrollContainer.scrollLeft <= 0) {
        direction = 1;
      }
      scrollContainer.scrollBy({
        left: direction * scrollStep,
        behavior: "smooth",
      });
    }, scrollInterval);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-[20px] px-[20px] md:px-[60px] lg:px-[100px]">
      <h2 className="text-2xl font-bold">Popular Brands</h2>
      <div
        ref={scrollContainerRef}
        className="flex justify-baseline gap-3 lg:gap-[52px] items-center overflow-x-auto scroll-smooth whitespace-nowrap"
      >
        {BRAND_PROPERTIES.map((brand, index) => (
          <div
            key={index}
            className="flex-shrink-0"
          >
            {Brand(brand, index)}
          </div>
        ))}
      </div>
    </div>
  );
};
