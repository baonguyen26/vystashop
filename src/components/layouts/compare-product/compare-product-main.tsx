import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { OfferListCard } from "src/components/OfferListCard/OfferListCard";
import { ProductCarousel } from "src/components/ProductCarousel";
import { LocalIcon } from "../../../assets/local-icon";
import { useProduct } from "src/hooks/useProducts";
import { useParams } from "react-router-dom";
import { BestOffer, ProductDetail } from "src/components/ui";

export const CompareProductMain = () => {
  const { id } = useParams();
  const { data } = useProduct(`/${id}`);

  const scrolRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<"where" | "dynamics">("where");

  const { t } = useTranslation();

  return (
    <div className="px-[40px] py-[60px]">
      <div className="flex justify-center gap-[10px] pb-[40px]">
        {data?.product && <ProductDetail product={data.product} />}
        <div className="flex flex-col gap-[15px] max-[960px]:hidden">
          <span className="text-[20px] font-[700] leading-[30px] uppercase">
            {t("product.best_offers")}
          </span>
          <div className="flex flex-col gap-[5px] max-h-[450px] overflow-y-auto">
            {data?.offers.map((item, key) => (
              <BestOffer
                key={key}
                product={item}
                active={item.id === id}
              />
            ))}
          </div>
        </div>
      </div>

        {/*  */}
      <div className="w-full flex flex-col items-center bg-white">
        <div className="w-[90%] md:w-[78%] flex justify-center">
          <span
            className={`p-[10px] flex-1 text-center text-[12px] md:text-[14px] uppercase font-[600] ${activeTab == "where" ? "border-b-2 border-amber-600 text-amber-600" : "border-b-1 border-gray-300"} cursor-pointer`}
            onClick={() => setActiveTab("where")}
          >
            {t("where_to_buy")}
          </span>
          <span
            className={`p-[10px] flex-1 text-center text-[12px] md:text-[14px] uppercase font-[600] ${activeTab == "dynamics" ? "border-b-2 border-amber-600 text-amber-600" : "border-b-1 border-gray-300"} cursor-pointer`}
            onClick={() => setActiveTab("dynamics")}
          >
            {t("price_dynamics")}
          </span>
        </div>
        {activeTab == "where" ? (
          <OfferListCard offerList={data?.offers ?? []} />
        ) : (
          <div className="w-full flex justify-center">
            <div className="w-[90%] md:w-[78%] py-[20px]">
              <h2 className="font-[700] text-xl flex items-center gap-[4px]">
                {t("price_history")}
                <span className="flex items-center gap-[4px] text-blue-600">
                  <LocalIcon
                    iconName="ic_clock"
                    width={12}
                    height={12}
                  />
                  <p className="text-[12px] cursor-pointer">
                    {t("create_alert")}
                  </p>
                </span>
              </h2>
              <div className="w-full h-[200px] md:h-[320px] flex items-center justify-center">
                <p className="font-[600] text-lg">{t("fetching_price_data")}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/*  */}
      <div className="w-full flex flex-col justify-start items-center pt-[40px] pb-[20px]">
        <div className="w-full h-[1px] bg-gray-300"></div>
        <div className="w-[90%] md:w-[78%] flex flex-col justify-start items-start gap-[32px]">
          <h2 className="text-[16px] sm:text-[24px] font-[700] pt-[40px]">
            {t("product.related_products")}
          </h2>
          <ProductCarousel
            scrollRef={scrolRef}
            haveOffer={false}
          />
        </div>
      </div>
    </div>
  );
};
