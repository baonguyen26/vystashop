import { LocalIcon } from "src/assets/local-icon";
import {
  // CountriesDropdown,
  LanguageDropdown,
  CategoriesDropdown,
  InputSearch,
} from "src/components/ui";
import { QUERY_KEY } from "src/constants/query-key";
import { useSearchParamsFilter } from "src/hooks";
import { cva } from "class-variance-authority";
import { useMediaQuery } from "react-responsive";
import { useOverlay } from "src/components/ui";
import { CountryOverlay } from "src/components/ui";
import { useTranslation } from "react-i18next";

const headerStyles = cva("flex flex-col gap-[6px] justify-center w-full bg-[#212225] relative", {
  variants: {
    mobile: {
      true: "px-[20px] py-[12px]",
      false: "max-[1110px]:px-3 px-[100px] py-[12px]",
    },
  },
});

const navStyles = cva("flex justify-between items-center", {
  variants: {
    mobile: {
      true: "",
      false: "py-[12px]",
    },
  },
});

const gapStyles = cva("flex items-center", {
  variants: {
    mobile: {
      true: "gap-[30px]",
      false: "gap-[47px]",
    },
  },
});

export const ProductResultHeader = () => {
  const { setValues } = useSearchParamsFilter(QUERY_KEY.TITLE);
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });
  const { display } = useOverlay();

  const handleSearch = (value: string) => {
    if (!value) return;
    setValues(value);
  };

  const { t } = useTranslation();

  return (
    <header className={headerStyles({ mobile: isMobile })}>
      <nav className={navStyles({ mobile: isMobile })}>
        {isMobile ? (
          <>
            <div className="flex items-center gap-[20px]">
              <CategoriesDropdown />
              <a href="/">
                <LocalIcon
                  iconName="ic_logo"
                  width={"auto"}
                  height={"auto"}
                />
              </a>
            </div>
            <div
              onClick={(e) => {
                e.stopPropagation();
                display(<CountryOverlay />);
              }}
              className={gapStyles({ mobile: isMobile })}
            >
              <LanguageDropdown className={"text-white pointer-events-none"} />
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center gap-[47px]">
              <a href="/">
                <LocalIcon
                  iconName="ic_logo"
                  width={"auto"}
                  height={"auto"}
                />
              </a>
              <CategoriesDropdown />
            </div>
            <InputSearch 
              onClickHandler={handleSearch} 
              className="max-[1110px]:hidden"
              placeholder={t("introduce_items.search.title")}
            />
            <div className="flex items-center gap-[30px]">
              <LanguageDropdown className={"text-white"} />
              {/* <CountriesDropdown className={"text-white"} /> */}
            </div>
          </>
        )}
      </nav>
      <InputSearch 
        onClickHandler={handleSearch} 
        className="flex max-[1110px]:rounded-[8px] max-[1110px]:flex min-[1110px]:hidden" 
        placeholder={t("introduce_items.search.title")}
      />
    </header>
  );
};
