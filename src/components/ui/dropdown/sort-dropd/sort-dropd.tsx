import { SORT } from "src/constants/sort";
import { DropdownMenu } from "../dropdown-menu";

export const SortDropdown = () => {
  return (
    <div className="flex items-center justify-end gap-[10px] w-full mt-[20px] pb-[20px] border-b-1 border-gray-700">
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
