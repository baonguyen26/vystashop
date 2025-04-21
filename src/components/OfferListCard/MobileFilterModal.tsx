interface Props {
  sortBy: "price" | "rating";
  filterFreeShipping: boolean;
  filterHighRating: boolean;
  onClose: () => void;
  onSort: (s: "price" | "rating") => void;
  onToggleShipping: () => void;
  onToggleRating: () => void;
}

export const MobileFilterModal = ({
  sortBy,
  filterFreeShipping,
  filterHighRating,
  onClose,
  onSort,
  onToggleShipping,
  onToggleRating,
}: Props) => (
  <div className="fixed inset-0 z-50 backdrop-blur-sm bg-white/30 flex justify-center items-center">
    <div className="bg-white w-[90%] max-w-sm p-4 rounded shadow-lg relative">
      <button
        className="absolute top-2 right-2 text-xl font-bold"
        onClick={onClose}
      >
        ×
      </button>
      <div className="text-base font-bold mb-4">SORT BY:</div>
      <div className="flex flex-col gap-2">
        <label>
          <input
            type="radio"
            name="sort"
            checked={sortBy === "price"}
            onChange={() => onSort("price")}
          />
          <span className="ml-2">Item price</span>
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            checked={sortBy === "rating"}
            onChange={() => onSort("rating")}
          />
          <span className="ml-2">Store Rating</span>
        </label>
      </div>

      <div className="text-base font-bold mt-4 mb-2">FILTER BY:</div>
      <div className="flex flex-col gap-2">
        <label>
          <input
            type="checkbox"
            checked={filterFreeShipping}
            onChange={onToggleShipping}
          />
          <span className="ml-2">Free shipping</span>
        </label>
        <label>
          <input
            type="checkbox"
            checked={filterHighRating}
            onChange={onToggleRating}
          />
          <span className="ml-2">4+ rating</span>
        </label>
      </div>

      <button
        className="mt-4 w-full bg-blue-500 text-white py-2 rounded font-semibold"
        onClick={onClose}
      >
        Apply
      </button>
    </div>
  </div>
);
