import { useState } from "react";
import { categories } from "src/constants/category-properties";

export const CategoryDesktop = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="flex w-full px-25 z-10 bg-white category-section">
      <div className="w-1/4 pl-2 py-2 border-r-2 border-gray-200">
        <h2 className="text-sm font-bold mb-2">Categories</h2>
        {categories.map((category) => (
          <div
            key={category.id}
            className={`text-sm flex gap-5 items-center p-1 cursor-pointer hover:underline ${
              selectedCategory === category.name ? "bg-gray-300" : ""
            }`}
            onClick={() => {
              setSelectedCategory(category.name);
            }}
          >
            {category.icon}
            {category.name}
          </div>
        ))}
      </div>

      <div className="w-3/4 pl-8 py-2 border-r-2 border-gray-200">
        <h2 className="text-sm font-bold mb-2 ">{selectedCategory}</h2>
        {selectedCategory ? (
          categories
            .find((cat) => cat.name === selectedCategory)
            ?.subcategories.map((sub) => (
              <div
                key={sub.id}
                className="text-sm py-2 mb-1 hover:underline hover:text-blue-400 cursor-pointer"
              >
                {sub.name}
              </div>
            ))
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};
