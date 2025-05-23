import { useEffect, useRef } from "react";
import { BRAND_PROPERTIES } from "src/constants/brand-properties";
import { Brand } from "../ui";
import { useTranslation } from "react-i18next";

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

  const { t } = useTranslation();

  return (
    <div className="w-[100%] px-[20px] md:px-[60px] lg:px-[100px] flex flex-col gap-[20px] max-w-[1440px] mx-auto">
      <h2 className="text-2xl font-bold">{t("popular_brands")}</h2>
      <div
        ref={scrollContainerRef}
        className="flex items-center justify-between gap-[14px] overflow-x-auto scroll-smooth whitespace-nowrap"
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
