import { useSearchParamsFilter } from "src/hooks";
import { QUERY_KEY } from "src/constants/query-key";
import { useState } from "react";
import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

export type discountFilterItems = {
  value: string;
  name: string;
};

type discountFilterProps = {
  items: discountFilterItems[];
  defaultSelected?: string;
  className?: string;
};

export const DiscountsFilter = ({
  items,
  defaultSelected = "",
  className = "",
}: discountFilterProps) => {
  const [selected, setSelected] = useState<string>(defaultSelected);
  const { setValues, deleteKey } = useSearchParamsFilter(QUERY_KEY.DISCOUNT);

  const [searchParams] = useSearchParams();
  const prevTitleRef = useRef<string | null>(searchParams.get(QUERY_KEY.TITLE));

  useEffect(() => {
    const currentTitle = searchParams.get(QUERY_KEY.TITLE);
    const prevTitle = prevTitleRef.current;

    if (currentTitle !== prevTitle) {
      setSelected("");
    }
    prevTitleRef.current = currentTitle;
  }, [searchParams]);

  useEffect(() => {
    if (selected === "") {
      deleteKey();
    }

    // return () => {
    //   deleteKey();
    // }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  const handleSelect = (item: discountFilterItems) => {
    setSelected((prev) => (prev === item.value ? "" : item.value));
    return selected === item.value ? deleteKey() : setValues(item.value);
  };

  const { t } = useTranslation();

  return (
    <div className={`flex flex-col items-start gap-3 ${className}`}>
      <h1 className="text-[16px] font-[600] leading-[24px]">{t("product.discounts")}</h1>
      <div className="flex flex-col items-start gap-3">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              handleSelect(item);
            }}
            className={selected === item.value ? "font-bold" : "font-normal"}
            role="discount-filter"
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};
