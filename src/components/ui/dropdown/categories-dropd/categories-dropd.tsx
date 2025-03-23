import { useEffect, useState } from "react";
import { LocalIcon } from "src/assets/local-icon";
import { Category } from "src/components/widgets/category-section";

const categoryEventTarget = new EventTarget();

export const CategoriesDropdown = () => {
  const [selectedCategory, setSelectedCategory] = useState<boolean>(false);

  const toggleExpanded = () => {
    if (!selectedCategory) {
      categoryEventTarget.dispatchEvent(new Event("close-all"));
    }
    setSelectedCategory((prev) => !prev);
  };

  useEffect(() => {
      const closeDropdown = () => setSelectedCategory(false);
      const handleClickOutside = (event: MouseEvent) => {
        if (!(event.target as HTMLElement).closest(".category-section")) {
          setSelectedCategory(false);
        }
      };

      categoryEventTarget.addEventListener("close-all", closeDropdown);
      document.addEventListener("click", handleClickOutside);

      return () => {
        categoryEventTarget.removeEventListener("close-all", closeDropdown);
        document.removeEventListener("click", handleClickOutside);
      };
    }, []);


  return (
    <>
      <div
        onClick={toggleExpanded}
        className="flex items-center gap-[16px] w-[143px] px-[15px] py-[10px] rounded-[46px] bg-[#00A1EA] hover:cursor-pointer category-section"
      >
        <LocalIcon
          iconName="ic_menu"
          width={"auto"}
          height={"auto"}
        />
        <span className="text-[16px] text-white font-[400] leading-[24px]">
          Categories
        </span>
      </div>
      <div className="w-full absolute z-10 left-0 top-22">
        {selectedCategory && <Category />}
      </div>
    </>
  );
};
