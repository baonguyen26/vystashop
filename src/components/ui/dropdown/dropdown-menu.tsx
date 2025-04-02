import { useState, useEffect } from "react";
import { LocalIcon } from "src/assets/local-icon";

const dropdownEventTarget = new EventTarget();

export type DropdownMenuItem = {
  value: string;
  name: string;
  icon?: React.ReactNode;
};

export type DropdownMenuProps = {
  items: DropdownMenuItem[];
  onChange: (item: DropdownMenuItem, index: number) => void;
  defaultItemIndex?: number;
  defaultExpanded?: boolean;
  className?: string;
  icon?: React.ReactNode;
  arrowType?: "default" | "black";
  overlay?: boolean;
};

export const DropdownMenu = ({
  items,
  onChange,
  defaultItemIndex = 0,
  defaultExpanded = false,
  className,
  icon,
  arrowType = "default",
  overlay,
}: DropdownMenuProps) => {
  const [isExpanded, setExpanded] = useState<boolean>(defaultExpanded);
  const [selectedItem, setSelectedItem] = useState<DropdownMenuItem>(
    items[defaultItemIndex]
  );

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

  return (
    <div
      className={`relative flex flex-col gap-y-2 text-[16px] font-[400]
        leading-[24px] dropdown-menu ${className}`}
    >
      <div
        className={`flex items-center h-full px-2 py-[7px] 
          ${overlay ? "gap-[4px]" : "gap-[14px]"}`}
      >
        <figure>
          {!overlay && selectedItem.icon && selectedItem.icon}
          {icon && icon}
        </figure>
        <button
          onClick={toggleExpanded}
          className="flex items-center justify-between w-full gap-[10px]"
        >
          <div
            className={`flex flex-col ${overlay ? "items-start flex-col leading-4.5" : ""} `}
          >
            <span className="text-[13px]">
              {overlay ? (selectedItem.icon ? "Countries" : "Languages") : null}
            </span>
            <span className={`${overlay ? "font-[600]" : ""}`}>
              {selectedItem.name}
            </span>
          </div>
          <LocalIcon
            iconName={arrowType === "black" ? "ic_arrow_black" : "ic_arrow"}
            width={16}
            height={16}
            className={
              arrowType === "black"
                ? isExpanded
                  ? "rotate-90"
                  : "-rotate-90"
                : isExpanded
                  ? "rotate-180"
                  : ""
            }
          />
        </button>
      </div>
      {isExpanded && (
        <div
          className="z-10 w-full absolute top-[45px] flex flex-col items-start 
            border border-black/15 rounded-[8px] px-2 py-2 text-black bg-white"
        >
          {items.map((item, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedItem(item);
                onChange(item, index);
                setExpanded(false);
              }}
              className={`flex items-center gap-1 rounded-md px-4 py-2 text-left
              text-black text-sm hover:bg-black/15 w-full 
                ${item.value === selectedItem.value ? "bg-black/10" : ""}`}
              role="menuitem"
            >
              {!overlay && item.icon && item.icon}
              {item.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
