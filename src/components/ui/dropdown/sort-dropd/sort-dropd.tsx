import { SORT } from "src/constants/sort";
import { Drop } from "./drop";
import { useSearchParamsFilter } from "src/hooks";
import { QUERY_KEY } from "src/constants/query-key";
import { DropdownMenuItem } from "../dropdown-menu";
import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const SortDropdown = ({ className }: { className?: string }) => {
  const { setSearchParams } = useSearchParamsFilter(QUERY_KEY.SORT);
  const [searchParams] = useSearchParams();

  const deleteKey = () => {
    setSearchParams((prev) => {
      prev.delete(QUERY_KEY.SORT);
      prev.delete(QUERY_KEY.ORDER);
      return prev;
    });
  };

  const prevTitleRef = useRef<string | null>(searchParams.get(QUERY_KEY.TITLE));

  useEffect(() => {
    const currentTitle = searchParams.get(QUERY_KEY.TITLE);
    const prevTitle = prevTitleRef.current;

    if (currentTitle !== prevTitle) {
      deleteKey();
    }
    prevTitleRef.current = currentTitle;
  }, [searchParams]);

  // Get current sort and order from search params
  const currentSort = searchParams.get("order") || "relevance";
  
  const selectedItem = SORT.find(item => item.value === currentSort) || SORT[0];

  const handleSort = (item: DropdownMenuItem) => {
    if (item.value === "relevance") {
      setSearchParams((prev) => {
        prev.delete(QUERY_KEY.SORT);
        prev.delete(QUERY_KEY.ORDER);
        return prev;
      });
      return;
    }

    setSearchParams((prev) => {
      prev.set("sortBy", "price");
      prev.set("order", item.value);
      return prev;
    });
  };

  const { t } = useTranslation();

  return (
    <div className={`flex items-center gap-[10px] w-full mt-[20px] pb-[20px] ${className}`}>
      <span>{t("product.sort_by")}:</span>
      <Drop
        items={SORT}
        onChange={(item) => handleSort(item)}
        selectedItem={selectedItem}
        translateValue={true}
        className="w-[240px] text-black border-gray-600 max-[800px]:w-full border-1 rounded-[6px]"
      />
    </div>
  );
};
