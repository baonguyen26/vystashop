import { CheckBox, checkboxItemProps } from "../../input";
import { useState, useEffect, useRef } from "react";
import { InputSearchLocal } from "../../input";
import { QUERY_KEY } from "src/constants/query-key";
import { useSearchParamsFilter } from "src/hooks";
import { useSearchParams } from "react-router-dom";

export type BrandFilterProps = {
  items: checkboxItemProps[];
  className?: string;
};

export const BrandFilter = ({ items, className }: BrandFilterProps) => {
  const [selectedValue, setSelectedValue] = useState<string | null>("");
  const [filteredItems, setFilteredItems] = useState<checkboxItemProps[]>(items);

  const { setValues, deleteKey } = useSearchParamsFilter(QUERY_KEY.BRAND);
  const [searchParams] = useSearchParams();

  const prevTitleRef = useRef<string | null>(searchParams.get(QUERY_KEY.TITLE));

  useEffect(() => {
    const currentTitle = searchParams.get(QUERY_KEY.TITLE); 
    const prevTitle = prevTitleRef.current; 

    if (currentTitle !== prevTitle) {
      setSelectedValue(null);
      deleteKey();
    }
    prevTitleRef.current = currentTitle;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]); 

  useEffect(() => {
    if (selectedValue === null) {
      deleteKey();
    } else if (selectedValue !== "") {
      setValues(selectedValue);
    }
    return () => {
      deleteKey();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedValue]);

  const handleChange = ({ value }: checkboxItemProps) => {
    setSelectedValue((prev) => (prev === value ? null : value));
  };

  return (
    <div className={className}>
      <div>
        <h1 className="text-[16px] font-[600] leading-[24px]">Brands</h1>
        <InputSearchLocal
          items={items}
          className="w-[208px] h-[36px] px-[6px]"
          onChange={(filteredItems) => {
            setFilteredItems(filteredItems);
          }}
        />
      </div>
      <span className="text-[10px] font-[500] leading-[15px]">
        Number of brands found: {filteredItems.length}
      </span>
      <div className="flex flex-col max-h-[170px] overflow-y-scroll">
        {filteredItems.map((item) => (
          <CheckBox
            key={item.value}
            value={item.value as string}
            name={item.name as string}
            checked={selectedValue === item.value}
            onChange={handleChange}
          />
        ))}
      </div>
    </div>
  );
};
