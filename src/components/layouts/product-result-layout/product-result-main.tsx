import {
  BrandFilter,
  // DiscountsFilter,
  FilterMobile,
  ShopFilter,
  SortDropdown,
} from "src/components/ui";
import { ProductsList } from "src/features/result-feature";
// import { discountFilterAttribute } from "src/constants/discount-filter";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { RatingFilter } from "src/components/ui/filter/rating";
import { ratingFilterAttribute } from "src/constants/rating-filter";
import { useGetFilterOptions } from "src/features/api/filter-attribute";
import { useSearchParamsFilter } from "src/hooks";
import { QUERY_KEY } from "src/constants/query-key";

export const ProductResultMain = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });
  const [isVisible, setIsVisible] = useState(false);

  const { t } = useTranslation();

  const {getValueAsString} = useSearchParamsFilter(QUERY_KEY.TITLE);

  const title = getValueAsString() || "";
  const { data } = useGetFilterOptions(title);
  const option = data?.data;

  return (
    <main className="w-full px-[30px]">
      {isMobile ? (
        <>
          <div className="flex w-full gap-[30px] max-w-[1440px] mb-[40px] mx-auto">
            <div className="flex flex-col items-start flex-nowrap w-full gap-[20px]">
              <div className="flex justify-between w-full py-[20px] border-b-1 border-gray-700">
                <span className="text-[14px] font-[300]">
                  {t("product.result_summary", {current: "...", total: "...", retailers: "..."})}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsVisible((prev) => !prev);
                  }}
                  className="text-[14px] text-cyan-500 font-bold "
                >
                  {t("product.filter")}
                </button>
              </div>
              <ProductsList />
            </div>
          </div>
          {isVisible && <FilterMobile open={isVisible} setOpen={setIsVisible}/>}
        </>
      ) : (
        <>
          <div className="flex justify-start gap-[30px] max-w-[1440px] mb-[40px] mx-auto">
            <div className="hidden md:flex flex-col flex-nowrap bg-white w-[208px] pb-4 md:pt-[62px] gap-[10px]">
              <BrandFilter items={option?.brands} />
              <ShopFilter items={option?.shops} />
              {/* <DiscountsFilter items={discountFilterAttribute} /> */}
              <RatingFilter items={ratingFilterAttribute} />
            </div>
            <div className="flex flex-col items-start flex-nowrap md:w-[calc(100%-208px)] gap-[20px]">
              <SortDropdown className="justify-end border-b-1 border-gray-600" />
              <ProductsList />
            </div>
          </div>
        </>
      )}
    </main>
  );
};
