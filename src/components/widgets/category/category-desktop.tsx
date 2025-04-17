import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { categories } from "src/constants/category-properties";
import { useCategoryContext } from "src/stores/context/CategoryContext";

export const CategoryDesktop = ({ onClose }: { onClose: () => void }) => {
  const { selectedCategoryId, setSelectedCategoryId } =
    useCategoryContext();

  const navigate = useNavigate();

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategoryId(categoryName);
  };

  const handleSubcategoryClick = (subcategoryId: string) => {
    navigate(`/c/${subcategoryId.toLowerCase()}`);
    onClose();
  };

  const { t } = useTranslation();

  return (
    <div className="flex w-full px-25 z-10 bg-white category-section">
      <div className="w-1/4 pl-2 py-2 border-r-2 border-gray-200">
        <h2 className="text-sm font-bold mb-2">{t("categories.title")}</h2>
        {categories.map((category) => (
          <div
            key={category.id}
            className={`text-sm flex gap-5 items-center p-1 cursor-pointer hover:underline ${
              selectedCategoryId === category.name ? "bg-gray-300" : ""
            }`}
            onClick={() => handleCategoryClick(category.id)}
          >
            {category.icon}
            {t(`categories.${category.id}.title`)}
          </div>
        ))}
      </div>

      <div className="w-3/4 pl-8 py-2 border-r-2 border-gray-200">
        <h2 className="text-sm font-bold mb-2">{selectedCategoryId && t(`categories.${selectedCategoryId}.title`)}</h2>
        {selectedCategoryId ? (
          <>
            {categories
              .find((cat) => cat.id === selectedCategoryId)
              ?.subcategories.map((sub) => {
                const cat = categories.find((cat) => cat.id === selectedCategoryId);
                return (
                  <div
                    key={sub.id}
                    className="text-sm py-2 mb-1 hover:underline hover:text-blue-400 cursor-pointer"
                    onClick={() => {
                      if (sub.id) {
                        handleSubcategoryClick(sub.id);
                      }
                    }}
                  >
                    {t(`categories.${cat!.id}.subcategories.${sub.id}`)}
                  </div>
                )
              })}
          </>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};
