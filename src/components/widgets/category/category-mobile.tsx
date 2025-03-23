import { useEffect, useState } from "react";
import { LocalIcon } from "src/assets/local-icon";
import { categories } from "src/constants/category-properties";

export const CategoryMobile = ({ onClose }: { onClose: () => void }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [viewingSubcategory, setViewingSubcategory] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col category-section">
      <div className="flex items-center justify-between px-4 py-2">
        {viewingSubcategory ? (
          <button onClick={() => setViewingSubcategory(false)}>
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
                className="flex gap-5 py-2 items-center border-b border-gray-300"
                onClick={() => {
                  setSelectedCategory(category.name);
                  setViewingSubcategory(true);
                }}
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
            <h5 className="font-bold text-sm mb-2 mt-4">{selectedCategory}</h5>
            {categories
              .find((cat) => cat.name === selectedCategory)
              ?.subcategories.map((sub) => (
                <div
                  key={sub.id}
                  className="p-3 border-b border-gray-300"
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
