import { useState, useEffect } from "react";
import { LocalIcon } from "src/assets/local-icon";
import { cn } from "src/utils/cn";

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
  querykey?: string;
};

export const DropdownMenu = ({
  items,
  onChange,
  defaultItemIndex = 0,
  defaultExpanded = false,
  className,
  icon,
  querykey,
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
      className={cn(
        "relative flex flex-col gap-y-2 text-[16px] text-white font-[400] leading-[24px] dropdown-menu",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center h-[auto] px-2 py-[7px]",
          selectedItem.icon ? "gap-[4px]" : "gap-[14px]"
        )}
      >
        <figure>
          {selectedItem.icon && selectedItem.icon}
          {icon && icon}
        </figure>
        <button
          onClick={toggleExpanded}
          className="flex items-center justify-between w-full gap-[10px]"
        >
          {selectedItem.name}
          {!querykey ? (
            <LocalIcon
              iconName="ic_arrow"
              width={"auto"}
              height={"auto"}
              className={isExpanded ? "rotate-180" : ""}
            />
          ) : (
            <LocalIcon
              iconName="ic_arrow_black"
              width={16}
              height={16}
              className={isExpanded ? "rotate-90" : "-rotate-90"}
            />
          )}
        </button>
      </div>
      {isExpanded && (
        <div className="z-10 w-full absolute top-[45px] flex flex-col items-start border border-black/15 rounded-[8px] px-2 py-2 text-black bg-white">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedItem(item);
                onChange(item, index);
                setExpanded(false);
              }}
              className={cn(
                "flex items-center gap-1 rounded-md px-4 py-2 text-left text-sm hover:bg-black/15 w-full",
                item.value === selectedItem.value && "bg-black/10"
              )}
              role="menuitem"
            >
              {item.icon && item.icon}
              {item.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
