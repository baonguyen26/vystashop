import { useState } from "react";
import { useTranslation } from "react-i18next";
import { categories } from "src/constants/category-properties";

export const CategoryDesktop = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { t } = useTranslation();

  return (
    <div className="flex w-full px-25 z-10 bg-white category-section">
      <div className="w-1/4 pl-2 py-2 border-r-2 border-gray-200">
        <h2 className="text-sm font-bold mb-2">{t("categories.title")}</h2>
        {categories.map((category) => (
          <div
            key={category.id}
            className={`text-sm flex gap-5 items-center p-1 cursor-pointer hover:underline ${
              selectedCategory === category.id ? "bg-gray-300" : ""
            }`}
            onClick={() => {
              setSelectedCategory(category.id);
            }}
          >
            {category.icon}
            {t(`categories.${category.id}.title`)}
          </div>
        ))}
      </div>

      <div className="w-3/4 pl-8 py-2 border-r-2 border-gray-200">
        <h2 className="text-sm font-bold mb-2 ">{selectedCategory && t(`categories.${selectedCategory}.title`)}</h2>
        {selectedCategory ? (
          categories
            .find((cat) => cat.id === selectedCategory)
            ?.subcategories.map((sub) => {
              const cat = categories.find((cat) => cat.id === selectedCategory);
              return (
              <div
                key={sub.id}
                className="text-sm py-2 mb-1 hover:underline hover:text-blue-400 cursor-pointer"
              >
                {t(`categories.${cat!.id}.subcategories.${sub.id}`)}
              </div>
            )})
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};
