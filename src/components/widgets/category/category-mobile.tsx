import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LocalIcon } from "src/assets/local-icon";
import { categories } from "src/constants/category-properties";
import { useCategoryContext } from "src/stores/context/CategoryContext";

export const CategoryMobile = ({ onClose }: { onClose: () => void }) => {
  const { selectedCategoryName, setSelectedCategoryName } =
    useCategoryContext();
  const [viewingSubcategory, setViewingSubcategory] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedCategoryName) {
      setViewingSubcategory(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategoryName(categoryName);
    setViewingSubcategory(true);
  };

  const handleSubcategoryClick = (subcategoryId: string) => {
    navigate(`/c/${subcategoryId.toLowerCase()}`);
    onClose();
  };

  const handleBack = () => {
    setViewingSubcategory(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col category-section">
      <div className="flex items-center justify-between px-4 py-2">
        {viewingSubcategory ? (
          <button onClick={handleBack}>
            <LocalIcon
              className="rotate-180"
              iconName="ic_arrow_category"
              width={20}
              height={20}
            />
          </button>
        ) : null}

        <button
          className="ml-auto"
          onClick={onClose}
        >
          <LocalIcon
            iconName="ic_close"
            width={20}
            height={20}
          />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-3">
        {!viewingSubcategory ? (
          <div className="py-2">
            <h5 className="font-bold text-sm mb-2">Categories</h5>
            {categories.map((category) => (
              <div
                key={category.id}
                className={`flex gap-5 py-2 items-center border-b border-gray-300 cursor-pointer ${
                  selectedCategoryName === category.name ? "bg-gray-100" : ""
                }`}
                onClick={() => handleCategoryClick(category.name)}
              >
                {category.icon}
                {category.name}
                <LocalIcon
                  className="ml-auto"
                  iconName="ic_arrow_category"
                  width={6}
                  height={12}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="py-2">
            <h5 className="font-bold text-sm mb-2 mt-4">
              {selectedCategoryName}
            </h5>
            {categories
              .find((cat) => cat.name === selectedCategoryName)
              ?.subcategories.map((sub) => (
                <div
                  key={sub.id}
                  className="p-3 border-b border-gray-300 cursor-pointer hover:underline hover:text-blue-400"
                  onClick={() => handleSubcategoryClick(sub.id)}
                >
                  {sub.name}
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};
