import { Offer } from "./types";
import { Button } from "../ui";
import { LocalIcon } from "src/assets/local-icon";
import { useTranslation } from "react-i18next";

interface OfferCardProps {
  offer: Offer;
  isHighestRated: boolean;
}

export const OfferCard = ({ offer, isHighestRated }: OfferCardProps) => {
  const { t } = useTranslation();

  return (
    <div
      className={`w-full md:w-[80%] bg-white shadow-md rounded-xl p-4 flex flex-col gap-3 ${isHighestRated ? "border-2 border-blue-500" : ""}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-start sm:items-center gap-2">
          {offer.shopImage && <img
            src={offer.shopImage}
            alt="Merchant"
            className="w-12 h-12 object-contain"
          />}
          <div className="flex flex-col">
            <p className="font-semibold text-base">{offer.shop}</p>
            <div className="flex items-center gap-2 flex-wrap">
              {offer.rating && (
                <span className="text-sm text-gray-600">★ {offer.rating}</span>
              )}
              {isHighestRated && (
                <span className="text-xs text-white bg-blue-500 px-2 py-0.5 rounded-full font-semibold">
                  Vysta Recommends
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-1 justify-start sm:justify-end">
          {offer.payments.map((payment, index) => (
            <img
              key={index}
              src={payment}
              alt="Payment"
              className="w-8 h-5 object-contain border border-gray-200 rounded-sm"
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-t border-gray-400 pt-3 gap-3">
        <div>
          <p className="text-sm font-medium text-blue-800 break-words">
            {offer.title}
          </p>
          {offer.freeShipping && (
            <p className="text-sm text-green-600 font-medium">{t("product.free_shipping")}</p>
          )}
        </div>

        <div className="flex items-center justify-between gap-3">
          <span className="text-base font-bold text-gray-900">
            £{offer.price}
          </span>

          {/* Desktop */}
          <div className="hidden sm:flex">
            <Button
              className="bg-[linear-gradient(100deg,#00A1EA_3.97%,#0D7AAF_95.64%)] text-white px-4 py-2 rounded font-semibold text-sm"
              onClick={() => window.open(offer.url, "_blank")}
            >
              {t("go_to_shop")}
              <LocalIcon
                iconName="ic_link"
                width={16}
                height={16}
              />
            </Button>
          </div>

          {/* Mobile */}
          <div className="sm:hidden">
            <button
              className="w-10 h-10 flex items-center justify-center bg-[linear-gradient(100deg,#00A1EA_3.97%,#0D7AAF_95.64%)] rounded-full text-white shadow"
              onClick={() => window.open(offer.url, "_blank")}
              aria-label="Go to shop"
            >
              <LocalIcon
                iconName="ic_arrow_offer"
                width={16}
                height={16}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
