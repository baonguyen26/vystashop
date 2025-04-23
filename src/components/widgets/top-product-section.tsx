import { useRef } from "react";
import { LocalIcon } from "src/assets/local-icon";
import { ProductCarousel } from "../ProductCarousel";
import { useTranslation } from "react-i18next";

export const TopProductSection = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= carouselRef.current.clientWidth;
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += carouselRef.current.clientWidth;
    }
  };

   const { t } = useTranslation();

  return (
    <div className="w-[100%] px-[20px] md:px-[60px] lg:px-[100px] flex flex-col gap-[20px] max-w-[1440px] mx-auto">
      <div className="w-[100%] flex items-center justify-between">
        <h2 className="text-[16px] sm:text-[24px] font-[700]">{t("top_products")}</h2>
        <div className="flex items-center gap-[20px]">
          <span onClick={scrollLeft}>
            <LocalIcon
              className="cursor-pointer w-[20px] h-[20px]  sm:w-[24px] sm:h-[24px]"
              iconName="arrow_icon"
            />
          </span>
          <span onClick={scrollRight}>
            <LocalIcon
              className="scale-x-[-1] cursor-pointer w-[20px] h-[20px]  sm:w-[24px] sm:h-[24px]"
              iconName="arrow_icon"
            />
          </span>
        </div>
      </div>

      <ProductCarousel scrollRef={carouselRef} haveOffer={true} />
    </div>
  );
};
