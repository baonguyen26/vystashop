import { LocalIcon } from "src/assets/local-icon";
import {  LanguageDropdown } from "../../dropdown";
import { Button } from "../../button";
import { useOverlay } from "../use-overlay";
import { useTranslation } from "react-i18next";

export const CountryOverlay = () => {
  const { dismiss } = useOverlay();

  const { t  } = useTranslation();

  return (
    <div className="flex w-full flex-col justify-center gap-[16px] rounded-[16px] h-[300px] px-[20px] bg-white">
      <div
        onClick={(e) => {
          e.stopPropagation();
          dismiss();
        }}
        className="w-full flex justify-end"
      >
        <LocalIcon iconName="ic_cancel" />
      </div>
      {/* <div className="flex items-center gap-[10px]">
        <div className="flex items-center justify-center w-[54px] h-[54px] rounded-[4px] bg-[#007DC2]">
          <LocalIcon
            iconName="ic_location"
            width={24}
            height={24}
          />
        </div>
        <CountriesDropdown
          itemType="full"
          overlay={true}
          arrowType="black"
          className={"flex-grow h-full border-1 border-gray-400 rounded-[8px]"}
        />
      </div> */}
      <div className="flex items-center gap-[10px]">
        <div className="flex items-center justify-center w-[54px] h-[54px] rounded-[4px] bg-[#007DC2]">
          <LocalIcon
            iconName="ic_language"
            width={24}
            height={24}
          />
        </div>
        <LanguageDropdown
          overlay={true}
          arrowType="black"
          className={"flex-grow h-full border-1 border-gray-400 rounded-[8px]"}
        />
      </div>
      <Button
        onClick={(e) => {
          e.stopPropagation();
          dismiss();
        }}
       className="h-[48px] font-bold bg-[#007DC2]">{t("product.apply")}</Button>
    </div>
  );
};
