import { LocalIcon } from "src/assets/local-icon";
import {
  CountriesDropdown,
  LanguageDropdown,
  CategoriesDropdown,
} from "src/components/ui";
import { cva } from "class-variance-authority";
import { useMediaQuery } from "react-responsive";

const headerStyles = cva("bg-[#212225] relative", {
  variants: {
    mobile: {
      true: "px-[20px] py-[12px]",
      false: "px-[100px] py-[12px]",
    },
  },
});

const navStyles = cva("flex justify-between items-center", {
  variants: {
    mobile: {
      true: "px-[20px] py-[12px]",
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

export const AppHeader = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });

  return (
    <header className={headerStyles({ mobile: isMobile })}>
      <nav className={navStyles({ mobile: isMobile })}>
        {isMobile ? (
          <>
            <CategoriesDropdown />
            <a href="/">
              <LocalIcon iconName="ic_logo" width={60} height={60} />
            </a>
            <div className={gapStyles({ mobile: isMobile })}>
              <CountriesDropdown />
            </div>
          </>
        ) : (
          <>
            <div className={gapStyles({ mobile: isMobile })}>
              <a href="/">
                <LocalIcon iconName="ic_logo" width={"auto"} height={"auto"} />
              </a>
              <CategoriesDropdown />
            </div>
            <div className="flex items-center gap-[30px]">
              <LanguageDropdown />
              <CountriesDropdown />
            </div>
          </>
        )}
      </nav>
    </header>
  );
};
