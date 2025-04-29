import { CheckBox, checkboxItemProps } from "../../input";
import { useState, useRef, useCallback, useEffect } from "react";
import { InputSearchLocal } from "../../input";
import { QUERY_KEY } from "src/constants/query-key";
import { useSearchParamsFilter } from "src/hooks";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export type BrandFilterProps = {
  items?: checkboxItemProps[];
  className?: string;
  onClear?: number;
};

export const BrandFilter = ({
  items,
  className,
}: BrandFilterProps) => {
  const [filteredItems, setFilteredItems] =useState<checkboxItemProps[]>(items ? items : []);
  const [selectedValue, setSelectedValue] = useState<string | null>("");

  const { setValues, deleteKey, getValueAsString } = useSearchParamsFilter(
    QUERY_KEY.BRAND
  );
  const [searchParams] = useSearchParams();
  const prevTitleRef = useRef<string | null>(searchParams.get(QUERY_KEY.TITLE));
  const currentTitle = searchParams.get(QUERY_KEY.TITLE);
  const selected = getValueAsString() || "";

  useEffect(() => {
    // Reset state khi items thay đổi (khi remount)
    setFilteredItems(items || []);
    setSelectedValue(null);
  }, [items]);

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

  const { t } = useTranslation();

  return (
    <div className={className}>
      <div>
        <h1 className="text-[16px] font-[600] leading-[24px]">
          {t("product.brands")}
        </h1>
        <InputSearchLocal
          items={items as checkboxItemProps[]}
          className="w-[208px] h-[36px] px-[6px]"
          onChange={setFilteredItems}
        />
      </div>
      <span className="text-[10px] font-[500] leading-[15px]">
        {t("product.num_of_brands")}: {filteredItems.length}
      </span>
      <div className="flex flex-col max-h-[170px] overflow-y-scroll">
        {filteredItems.length > 0 ? filteredItems.map((item) => (
          <CheckBox
            key={item.value}
            value={item.value as string}
            name={item.name as string}
            checked={selectedValue === item.value}
            onChange={handleChange}
          />
        )) : (
          <Box>
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
        </Box>
        )}
      </div>
    </div>
  );
};
