import { BrandFilter } from "../brands";
import { DiscountsFilter } from "../discounts";
import { ShopFilter } from "../shops";
import { SortDropdown } from "../../dropdown";
import { brandFilterAttributes } from "src/constants/brand-filter";
import { ShopFilterAttributes } from "src/constants/shop-filter";
import { discountFilterAttribute } from "src/constants/discount-filter";
import { LocalIcon } from "src/assets/local-icon";
import { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const FilterMobile = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (item: boolean) => void;
}) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setOpen(false);
      setIsClosing(false);
    }, 600);
  };

  const clearFilter = () => {
    const searchName = window.location.search;
    const value = searchName.split("&")[0];
    console.log(value);
    
    if (value) {
      const newUrl = `${window.location.pathname}${value}`;
      window.history.pushState({}, "", newUrl);
    }
  };

  const { t } = useTranslation();

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-white z-[100] flex flex-col gap-[20px] p-[40px] overflow-y-auto ${
        open && !isClosing ? "slide-in" : "slide-out"
      }`}
    >
      <style>
        {`
            @keyframes slide-in {
              from { transform: translateX(-100%); }
              to { transform: translateX(0); }
            }
            @keyframes slide-out {
              from { transform: translateX(0); }
              to { transform: translateX(-100%); }
            }
            .slide-in { animation: slide-in 0.4s ease-out forwards; }
            .slide-out { animation: slide-out 0.4s ease-out forwards; }
          `}
      </style>

      <div className="w-full h-full gap-3.5">
        <div className="flex justify-between items-center w-full">
          <span>{t("product.filter")}</span>
          <LocalIcon
            iconName="ic_cancel"
            onClick={() => {
                clearFilter();
                handleClose();
            }}
          />
        </div>
        <SortDropdown className="flex-col items-start" />
        <DiscountsFilter items={discountFilterAttribute} />
        <BrandFilter items={brandFilterAttributes} />
        <ShopFilter items={ShopFilterAttributes} />
        <div className="flex items-center justify-center py-5">
          <button 
          onClick = {() => {
            clearFilter();
            handleClose();
          }}
          className="w-[50%] h-[40px]">
            {t("product.clear_filter")}
          </button>
          <button
            className="w-[50%] h-[40px] rounded-[999px] bg-[#72d3da]"
            onClick={handleClose}
          >
            {t("product.apply")}
          </button>
        </div>
      </div>
    </div>
  );
};
