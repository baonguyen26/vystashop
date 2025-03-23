import { SORT } from "src/constants/sort";
import { DropdownMenu } from "../dropdown-menu";

export const SortDropdown = () => {
  return (
    <div className="flex items-center gap-[10px]">
    <span>
        Sort by:
    </span>
      <DropdownMenu
        items={SORT}
        onChange={(item) => {
          // setValues(item.value);
          console.log(item);
        }}
        querykey="sort"
        className="w-[240px] text-black border-1 rounded-[6px]"
      />
    </div>
  );
};
