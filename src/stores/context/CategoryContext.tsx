import { useContext } from "react";
import { createContext } from "react";

export const CategoryContext = createContext<{
  selectedCategoryId: string | null;
  setSelectedCategoryId: (name: string | null) => void;
}>({
  selectedCategoryId: null,
  setSelectedCategoryId: () => {},
});

export const useCategoryContext = () => useContext(CategoryContext);
