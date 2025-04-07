import { CheckBox } from "../../input";
import { checkboxItemProps } from "../../input";
import { useState } from "react";
import { InputSearchLocal } from "../../input";
import { useTranslation } from "react-i18next";

export type ShopFilterProps = {
  className?: string;
  items: checkboxItemProps[];
};

export const ShopFilter = ({ className, items }: ShopFilterProps) => {
    const [selectedValue, setSelectedValue] = useState<string | null>(null);
    const [filteredItems, setFilteredItems] = useState<checkboxItemProps[]>(items);
  
    const handleChange = ({ value }: checkboxItemProps) => {
      setSelectedValue((prev) => (prev === value ? null : value)); 
    };

    const { t } = useTranslation();
  
    return (
      <div  className={className}>
        <div>
          <h1 className="text-[16px] font-[600] leading-[24px]">{t("product.shops")}</h1>
          <InputSearchLocal
            items={items}
            className="w-[208px] h-[36px] px-[6px]"
            onChange={(filteredItems) => {
                setFilteredItems(filteredItems);
              }}
            />
        </div>
        <span className="text-[10px] font-[500] leading-[15px]">{t("product.num_of_shops")}: {items.length}</span>
        <div className="flex flex-col max-h-[170px] overflow-y-scroll">
          {filteredItems.map((item) => (
            <CheckBox
              key={item.value}
              value={item.value as string}
              name={item.name as string}
              checked={selectedValue === item.value}
              onChange={(itemChecked) => {
                handleChange(itemChecked);
                console.log(itemChecked);
              }}
            />
          ))}
        </div>
      </div>
    );
  };
  
  
  