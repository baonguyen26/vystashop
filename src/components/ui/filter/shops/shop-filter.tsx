import { CheckBox } from "../../input";
import { checkboxItemProps } from "../../input";
import { useState } from "react";
import { InputSearchLocal } from "../../input";
import { QUERY_KEY } from "src/constants/query-key";
import { useEffect, useRef } from "react";
import { useSearchParamsFilter } from "src/hooks";
import { useSearchParams } from "react-router-dom";

export type ShopFilterProps = {
  className?: string;
  items: checkboxItemProps[];
};

export const ShopFilter = ({ className, items }: ShopFilterProps) => {
     const [selectedValue, setSelectedValue] = useState<string | null>("");
     const [filteredItems, setFilteredItems] = useState<checkboxItemProps[]>(items);
   
     const { setValues, deleteKey } = useSearchParamsFilter(QUERY_KEY.SHOP);
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
      <div  className={className}>
        <div>
          <h1 className="text-[16px] font-[600] leading-[24px]">Shops</h1>
          <InputSearchLocal
            items={items}
            className="w-[208px] h-[36px] px-[6px]"
            onChange={(filteredItems) => {
                setFilteredItems(filteredItems);
              }}
            />
        </div>
        <span className="text-[10px] font-[500] leading-[15px]">number of shops: {items.length}</span>
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
  