import { useEffect, useState } from "react";
import { LocalIcon } from "src/assets/local-icon";
import { CategoryDesktop } from "src/components/widgets/category/category-desktop";
import { useMediaQuery } from "react-responsive";
import { CategoryMobile } from "src/components/widgets/category/category-mobile";
import { useTranslation } from "react-i18next";
import { CategoryContext } from "src/stores/context/CategoryContext";

const categoryEventTarget = new EventTarget();

export const CategoriesDropdown = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<boolean>(false);
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });

  const [selectedCategoryId, setSelectedCategoryId] = useState<
    string | null
  >(localStorage.getItem("selectedCategory"));

  useEffect(() => {
    if (selectedCategoryId) {
      localStorage.setItem("selectedCategory", selectedCategoryId);
    } else {
      localStorage.removeItem("selectedCategory");
    }
  }, [selectedCategoryId]);

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
    <CategoryContext.Provider
      value={{ selectedCategoryId, setSelectedCategoryId }}
    >
      {isMobile ? (
        <div>
          <div
            onClick={toggleExpanded}
            className="p-2 bg-[#212225] category-section"
          >
            <LocalIcon
              iconName="ic_menu"
              width={"auto"}
              height={"auto"}
            />
          </div>
        </div>
      ) : (
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
            {t('categories.title')}
          </span>
        </div>
      )}

      {selectedCategory && (
        <div
          className="w-full absolute z-10 left-0 top-24 category-section"
          onClick={(e) => e.stopPropagation()}
        >
          {isMobile ? (
            <CategoryMobile onClose={() => setSelectedCategory(false)} />
          ) : (
            <CategoryDesktop onClose={() => setSelectedCategory(false)} />
          )}
        </div>
      )}
    </CategoryContext.Provider>
  );
};
