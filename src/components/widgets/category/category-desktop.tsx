import { useNavigate } from "react-router-dom";
import { categories } from "src/constants/category-properties";
import { useCategoryContext } from "src/stores/context/CategoryContext";

export const CategoryDesktop = ({ onClose }: { onClose: () => void }) => {
  const { selectedCategoryName, setSelectedCategoryName } =
    useCategoryContext();

  const navigate = useNavigate();

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategoryName(categoryName);
  };

  const handleSubcategoryClick = (subcategoryId: string) => {
    navigate(`/c/${subcategoryId.toLowerCase()}`);
    onClose();
  };

  return (
    <div className="flex w-full px-25 z-10 bg-white category-section">
      <div className="w-1/4 pl-2 py-2 border-r-2 border-gray-200">
        <h2 className="text-sm font-bold mb-2">Categories</h2>
        {categories.map((category) => (
          <div
            key={category.id}
            className={`text-sm flex gap-5 items-center p-1 cursor-pointer hover:underline ${
              selectedCategoryName === category.name ? "bg-gray-300" : ""
            }`}
            onClick={() => handleCategoryClick(category.name)}
          >
            {category.icon}
            {category.name}
          </div>
        ))}
      </div>

      <div className="w-3/4 pl-8 py-2 border-r-2 border-gray-200">
        <h2 className="text-sm font-bold mb-2">{selectedCategoryName}</h2>
        {selectedCategoryName ? (
          <>
            {categories
              .find((cat) => cat.name === selectedCategoryName)
              ?.subcategories.map((sub) => (
                <div
                  key={sub.id}
                  className="text-sm py-2 mb-1 hover:underline hover:text-blue-400 cursor-pointer"
                  onClick={() => {
                    if (sub.id) {
                      handleSubcategoryClick(sub.id);
                    }
                  }}
                >
                  {sub.name}
                </div>
              ))}
          </>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};
