import { useContext } from "react";
import { createContext } from "react";

export const CategoryContext = createContext<{
  selectedCategoryName: string | null;
  setSelectedCategoryName: (name: string | null) => void;
}>({
  selectedCategoryName: null,
  setSelectedCategoryName: () => {},
});

export const useCategoryContext = () => useContext(CategoryContext);
