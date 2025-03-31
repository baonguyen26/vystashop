import { useSearchParamsFilter } from "src/hooks";
import { QUERY_KEY } from "src/constants/query-key";
import { useState } from "react";

export type discountFilterItems = {
    value : string;
    name : string;
}

type discountFilterProps = {
    items: discountFilterItems[];
    defaultSelected?: string;
    className?: string;
}

export const DiscountsFilter = (
    {
        items,
        defaultSelected = "",
        className = "",
    } : discountFilterProps
) => {
    const  [ selected, setSelected ] = useState<string>(defaultSelected);
    const  { setValues, deleteKey } = useSearchParamsFilter(QUERY_KEY.DISCOUNT);

    const handleSelect = (item: discountFilterItems) => {
        setSelected((prev) => prev === item.value ? "" : item.value);
        selected === item.value ? deleteKey() : setValues(item.value);
    }

    return (
        <div className={`flex flex-col items-start gap-3 ${className}`}>
            <h1 className="text-[16px] font-[600] leading-[24px]">Discounts</h1>
            <div className="flex flex-col items-start gap-3">
                {
                    items.map((item, index) => (
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
                    ))
                }
            </div>
        </div>
    )
}
