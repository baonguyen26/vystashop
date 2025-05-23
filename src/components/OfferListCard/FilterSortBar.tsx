import { useTranslation } from "react-i18next";

interface FilterSortBarProps {
  filterFreeShipping: boolean;
  filterHighRating: boolean;
  sortBy: "price" | "rating";
  onToggleShipping: () => void;
  onToggleRating: () => void;
  onSort: (sort: "price" | "rating") => void;
}

export const FilterSortBar = ({
  filterFreeShipping,
  filterHighRating,
  sortBy,
  onToggleShipping,
  onToggleRating,
  onSort,
}: FilterSortBarProps) => {
  const { t } = useTranslation();

  return (
    <div className="hidden md:flex w-[80%] flex-wrap gap-6 items-center justify-end">
      <label
        className={`flex items-center p-1 gap-1 text-sm ${filterFreeShipping ? "border rounded border-blue-400 bg-blue-100" : ""}`}
      >
        <input
          type="checkbox"
          checked={filterFreeShipping}
          onChange={onToggleShipping}
        />
        {t("product.free_shipping")}
      </label>
      <label
        className={`flex items-center p-1 gap-1 text-sm ${filterHighRating ? "border rounded border-blue-400 bg-blue-100" : ""}`}
      >
        <input
          type="checkbox"
          checked={filterHighRating}
          onChange={onToggleRating}
        />
        {`4+ ${t("product.rating")}`}
      </label>
  
      <div className="flex items-center gap-2 text-sm font-semibold">
        {`${t("product.sort_by")}:`}
        <button
          className={`px-3 py-1 rounded border border-blue-400 ${sortBy === "price" ? "bg-blue-100 font-bold" : "bg-white text-gray-600"}`}
          onClick={() => onSort("price")}
        >
          {`${t("product.item_price")}`}
        </button>
        <button
          className={`px-3 py-1 rounded border border-blue-400 ${sortBy === "rating" ? "bg-blue-100 font-bold" : "bg-white text-gray-600"}`}
          onClick={() => onSort("rating")}
        >
          {`${t("product.store_rating")}`}
        </button>
      </div>
    </div>
  )
};
