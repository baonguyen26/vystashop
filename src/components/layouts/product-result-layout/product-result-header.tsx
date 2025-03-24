import { LocalIcon } from "src/assets/local-icon";
import {
  CountriesDropdown,
  LanguageDropdown,
  CategoriesDropdown,
  InputSearch,
} from "src/components/ui";
import { QUERY_KEY } from "src/constants/query-key";
import { useSearchParamsFilter } from "src/hooks";

export const ProductResultHeader = () => {
  const { setValues } = useSearchParamsFilter(QUERY_KEY.TITLE);

  const handleSearch = (value: string) => {
    if (!value) return;
    setValues(value);
  };

  return (
    <header className="bg-[#212225]">
      <nav className="flex justify-between items-center px-[100px] py-[12px]">
        <div className="flex items-center gap-[47px]">
          <LocalIcon iconName="ic_logo" width={"auto"} height={"auto"} />
          <CategoriesDropdown />
        </div>
        <InputSearch onClickHandler={handleSearch} />
        <div className="flex items-center gap-[30px]">
          <LanguageDropdown />
          <CountriesDropdown />
        </div>
      </nav>
    </header>
  );
};