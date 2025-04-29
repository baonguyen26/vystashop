import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { LocalIcon } from "src/assets/local-icon";
import { DropdownMenuItem } from "../dropdown-menu";

const dropdownEventTarget = new EventTarget();

export type DropProps = {
  items: DropdownMenuItem[];
  onChange: (item: DropdownMenuItem, index: number) => void;
  defaultItemIndex?: number;
  defaultExpanded?: boolean;
  className?: string;
  icon?: React.ReactNode;
  translateValue?: boolean;
  selectedItem: DropdownMenuItem;
};

export const Drop = ({
  items,
  onChange,
  defaultItemIndex = 0,
  defaultExpanded = false,
  className,
  icon,
  translateValue,
  selectedItem,
}: DropProps) => {
  const [isExpanded, setExpanded] = useState<boolean>(defaultExpanded);
  const [internalSelectedItem, setInternalSelectedItem] = useState<DropdownMenuItem>(
    selectedItem || items[defaultItemIndex]
  );

  useEffect(() => {
    if (selectedItem) {
      setInternalSelectedItem(selectedItem);
    }
  }, [selectedItem]);

  const toggleExpanded = () => {
    if (!isExpanded) {
      dropdownEventTarget.dispatchEvent(new Event("close-all"));
    }
    setExpanded((prev) => !prev);
  };

  useEffect(() => {
    const closeDropdown = () => setExpanded(false);
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest(".dropdown-menu")) {
        setExpanded(false);
      }
    };

    dropdownEventTarget.addEventListener("close-all", closeDropdown);
    document.addEventListener("click", handleClickOutside);

    return () => {
      dropdownEventTarget.removeEventListener("close-all", closeDropdown);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleItemChange = (item: DropdownMenuItem, index: number) => {
    setInternalSelectedItem(item);
    onChange(item, index);
  };

  const { t } = useTranslation();

  return (
    <div
      className={`relative flex flex-col gap-y-2 text-[16px] font-[400]
        leading-[24px] dropdown-menu ${className}`}
    >
      <div className={`flex items-center h-full px-2 py-[7px] gap-[14px]`}>
        <figure>{icon && icon}</figure>
        <button
          onClick={toggleExpanded}
          className="flex items-center justify-between w-full gap-[10px]"
        >
          <div className="flex flex-col">
            <span>
              {translateValue
                ? t(`product.${internalSelectedItem.value}`)
                : internalSelectedItem.name}
            </span>
          </div>
          <LocalIcon
            iconName={"ic_arrow_black"}
            width={16}
            height={16}
            className={isExpanded ? "rotate-90" : "-rotate-90"}
          />
        </button>
      </div>
      {isExpanded && (
        <div
          className="z-10 w-full absolute top-[45px] flex flex-col items-start 
            border border-black/15 rounded-[8px] px-2 py-2 text-black bg-white scroll-smooth snap-y snap-mandatory overflow-auto"
        >
          {items.map((item, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                handleItemChange(item, index);
                setExpanded(false);
              }}
              className={`flex items-center gap-1 rounded-md px-4 py-2 text-left
              text-black text-sm hover:bg-black/15 w-full 
                ${item.value === internalSelectedItem.value ? "bg-black/10" : ""}`}
              role="menuitem"
            >
              {translateValue ? t(`product.${item.value}`) : item.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
