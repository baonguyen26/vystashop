import { LocalIcon } from "src/assets/local-icon";
import {
  // CountriesDropdown,
  LanguageDropdown,
  CategoriesDropdown,
} from "src/components/ui";
import { cva } from "class-variance-authority";
import { useMediaQuery } from "react-responsive";
import { CountryOverlay } from "src/components/ui";
import { useOverlay } from "src/components/ui";

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

export const AppHeader = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });
  const {display} = useOverlay();

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
                  width={60}
                  height={60}
                />
              </a>
            </div>
            <div
            onClick={(e) => {
              e.stopPropagation();
              display(<CountryOverlay />);
            }}
             className={gapStyles({ mobile: isMobile })}>
              <LanguageDropdown className="text-white pointer-events-none"/>
            </div>
          </>
        ) : (
          <>
            <div className={gapStyles({ mobile: isMobile })}>
              <a href="/">
                <LocalIcon
                  iconName="ic_logo"
                  width={"auto"}
                  height={"auto"}
                />
              </a>
              <CategoriesDropdown />
            </div>
            <div className="flex items-center gap-[30px]">
              <LanguageDropdown
                className={"text-white"}
              />
              {/* <CountriesDropdown
                className={"text-white"}
              /> */}
            </div>
          </>
        )}
      </nav>
    </header>
  );
};
