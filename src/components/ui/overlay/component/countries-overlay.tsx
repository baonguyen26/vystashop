import { LocalIcon } from "src/assets/local-icon";
import { CountriesDropdown, LanguageDropdown } from "../../dropdown";
import { Button } from "../../button";
import { useOverlay } from "../use-overlay";

export const CountryOverlay = () => {
  const { dismiss } = useOverlay();

  return (
    <div className="flex flex-col border-1 justify-center gap-[16px] rounded-[16px] h-[280px] px-[20px]">
      <div
        onClick={(e) => {
          e.stopPropagation();
          dismiss();
        }}
        className="w-full flex justify-end"
      >
        <LocalIcon iconName="ic_cancel" />
      </div>
      <div className="flex items-center">
        <div className="flex items-center justify-center w-[54px] h-[54px] rounded-[4px] bg-[#007DC2]">
          <LocalIcon
            iconName="ic_location"
            width={24}
            height={24}
          />
        </div>
        <CountriesDropdown />
      </div>
      <div className="flex items-center">
        <div className="flex items-center justify-center w-[54px] h-[54px] rounded-[4px] bg-[#007DC2]">
          <LocalIcon
            iconName="ic_language"
            width={24}
            height={24}
          />
        </div>
        <LanguageDropdown />
      </div>
      <Button className="h-[48px] font-bold bg-[#007DC2]">Apply</Button>
    </div>
  );
};
