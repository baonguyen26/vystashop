import { useSearchParamsFilter } from "src/hooks";
import { QUERY_KEY } from "src/constants/query-key";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export type RatingFilterItem = {
  value: string;
  name: string;
};

type DiscountFilterProps = {
  items: RatingFilterItem[];
  className?: string;
};
export const RatingFilter = ({
  items,
  className = "",
}: DiscountFilterProps) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const { setValues, deleteKey, getValueAsString } = useSearchParamsFilter(QUERY_KEY.RATING);
  const selected = getValueAsString();

  const handleSelect = (item: RatingFilterItem) => {
    if (selectedValue === item.value) {
      setSelectedValue(null);
      deleteKey();
      return;
    }
    setSelectedValue(item.value);
    setValues(item.value);
  };
  // Cập nhật state nếu URL có sẵn value
  useEffect(() => {
    if (selected) {
      setSelectedValue(selected);
    } else {
      setSelectedValue(null);
    }
  }, [selected]);

  const { t } = useTranslation();

  return (
    <div className={`flex flex-col items-start gap-3 ${className}`}>
      <h1 className="text-[16px] font-[600] leading-[24px]">{t("product.discounts")}</h1>
      <div className="flex flex-col items-start gap-3">
        {items.map((item) => (
          <button
            key={item.value}
            onClick={(e) => {
              e.stopPropagation();
              handleSelect(item);
            }}
            className={selected === item.value ? "font-bold" : "font-[300]"}
            role="rating-filter"
          >
            ★ {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};
