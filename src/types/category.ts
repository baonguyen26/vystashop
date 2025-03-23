type subCategoryType = {
  name: string;
};
export type categoryType = {
  name: string;
  icon: React.ReactNode;
  subcategories: subCategoryType[];
};
