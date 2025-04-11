import { CheckBox, checkboxItemProps } from "../../input";
import { useState, useRef, useCallback } from "react";
import { InputSearchLocal } from "../../input";
import { QUERY_KEY } from "src/constants/query-key";
import { useSearchParamsFilter } from "src/hooks";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

export type BrandFilterProps = {
  items: checkboxItemProps[];
  className?: string;
  onClear?: number;
};

export const BrandFilter = ({
  items,
  className,
  onClear = 0,
}: BrandFilterProps) => {
  const [filteredItems, setFilteredItems] =
    useState<checkboxItemProps[]>(items);
  const [selectedValue, setSelectedValue] = useState<string | null>("");

  const { setValues, deleteKey, getValueAsString } = useSearchParamsFilter(QUERY_KEY.BRAND);
  const [searchParams] = useSearchParams();
  const prevTitleRef = useRef<string | null>(searchParams.get(QUERY_KEY.TITLE));
  const currentTitle = searchParams.get(QUERY_KEY.TITLE);
  const selected = getValueAsString() || "";

  useEffect(() => {
    if (onClear > 0) {
      setSelectedValue("");
      deleteKey();
    }
  }, [onClear, deleteKey]);
  

  useEffect(() => {
    if (selected) {
      setSelectedValue(selected);
    } else {
      setSelectedValue(null);
    }
  }, [selected]);

  useEffect(() => {
    if (currentTitle !== prevTitleRef.current) {
      prevTitleRef.current = currentTitle;
      setSelectedValue(null);
      deleteKey();
    }
  }, [currentTitle, deleteKey]);

  const handleChange = useCallback(
    ({ value }: checkboxItemProps) => {
      setSelectedValue((prev) => {
        const newValue = prev === value ? null : value;
        if (newValue === null) {
          deleteKey();
        } else if (newValue !== "") {
          setValues(newValue);
        }
        return newValue;
      });
    },
    [deleteKey, setValues]
  );

  return (
    <div className={className}>
      <div>
        <h1 className="text-[16px] font-[600] leading-[24px]">Brands</h1>
        <InputSearchLocal
          items={items}
          className="w-[208px] h-[36px] px-[6px]"
          onChange={setFilteredItems}
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
