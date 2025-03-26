import { LocalIcon } from "src/assets/local-icon";
import {
  CountriesDropdown,
  LanguageDropdown,
  CategoriesDropdown,
} from "src/components/ui";

export const AppHeader = () => {
  return (
    <header className="bg-[#212225] relative">
      <nav className="flex justify-between items-center px-[100px] py-[12px]">
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
        <div className="flex items-center gap-[30px]">
          <LanguageDropdown />
          <CountriesDropdown />
        </div>
      </nav>
    </header>
  );
};
