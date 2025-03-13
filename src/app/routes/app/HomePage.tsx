import { useRef } from "react";
import { LocalIcon } from "src/assets/local-icon";
import ProductCalrousel from "src/components/ProductCarousel";

export const HomePage = () => {
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

  return (
    <div className="w-[100%] flex flex-col justify-start items-center">
      {/* Other content  */}


      {/* Top Products */}
      <div className="w-[100%] p-[20px] md:py-[40px] md:px-[60px] lg:py-[60px] lg:px-[100px] flex flex-col gap-[20px]">
        <div className="w-[100%] flex items-center justify-between">
          <h2 className="text-[16px] sm:text-[24px] font-[700]">Top Products</h2>
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

        <ProductCalrousel scrollRef={carouselRef} />
      </div>


      {/* Other content */}
    </div>
  );
};
