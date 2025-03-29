import { SORT } from "src/constants/sort";
import { DropdownMenu } from "../dropdown-menu";
import { useSearchParamsFilter } from "src/hooks";
import { QUERY_KEY } from "src/constants/query-key";
import { DropdownMenuItem } from "../dropdown-menu";

export const SortDropdown = () => {
  const { setSearchParams } = useSearchParamsFilter(QUERY_KEY.SORT);

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
      prev.set("sort", "price");
      prev.set("order", item.value);
      return prev;
    });
  };

  return (
    <div className="flex items-center justify-end gap-[10px] w-full mt-[20px] pb-[20px] border-b-1 border-gray-700">
      <span>Sort by:</span>
      <DropdownMenu
        items={SORT}
        onChange={(item) => {
          handleSort(item);
        }}
        querykey="sort"
        className="w-[240px] text-black border-1 rounded-[6px]"
      />
    </div>
  );
};
