import { useState } from "react";
import { offerList } from "src/constants/offer-list";
import { OfferCard } from "./OfferCard";
import { FilterSortBar } from "./FilterSortBar";
import { MobileFilterModal } from "./MobileFilterModal";

export const OfferListCard = () => {
  const [filterHighRating, setFilterHighRating] = useState(false);
  const [filterFreeShipping, setFilterFreeShipping] = useState(false);
  const [sortBy, setSortBy] = useState<"price" | "rating">("price");
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const maxRating = Math.max(
    ...offerList.map((offer) => parseFloat(offer.rating || "0"))
  );

  const filteredOffers = offerList
    .filter((offer) => {
      const rating = parseFloat(offer.rating || "0");
      return (
        (!filterHighRating || rating > 4) &&
        (!filterFreeShipping || offer.freeShipping)
      );
    })
    .sort((a, b) => {
      return sortBy === "price"
        ? parseFloat(a.price.value) - parseFloat(b.price.value)
        : parseFloat(b.rating || "0") - parseFloat(a.rating || "0");
    });

  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-4 bg-[#f5f5f5] p-4">
      <FilterSortBar
        filterFreeShipping={filterFreeShipping}
        filterHighRating={filterHighRating}
        sortBy={sortBy}
        onSort={setSortBy}
        onToggleShipping={() => setFilterFreeShipping(!filterFreeShipping)}
        onToggleRating={() => setFilterHighRating(!filterHighRating)}
      />

      <div className="md:hidden w-full flex justify-end mb-2">
        <button
          className="text-sm px-3 py-1 border border-gray-300 rounded bg-white shadow"
          onClick={() => setShowMobileFilter(true)}
        >
          Filter & Sort
        </button>
      </div>

      {showMobileFilter && (
        <MobileFilterModal
          sortBy={sortBy}
          filterFreeShipping={filterFreeShipping}
          filterHighRating={filterHighRating}
          onClose={() => setShowMobileFilter(false)}
          onSort={setSortBy}
          onToggleShipping={() => setFilterFreeShipping(!filterFreeShipping)}
          onToggleRating={() => setFilterHighRating(!filterHighRating)}
        />
      )}

      {filteredOffers.map((offer, index) => (
        <OfferCard
          key={index}
          offer={offer}
          isHighestRated={parseFloat(offer.rating || "0") === maxRating}
        />
      ))}
    </div>
  );
};
