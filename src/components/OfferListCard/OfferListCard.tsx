import { useState } from "react";
import { OfferCard } from "./OfferCard";
import { FilterSortBar } from "./FilterSortBar";
import { MobileFilterModal } from "./MobileFilterModal";
import { LocalIcon } from "src/assets/local-icon";
import { IProduct } from "src/types/product.type";

interface OfferListCardProps {
  offerList: IProduct[];
}

export const OfferListCard = ({ offerList }: OfferListCardProps) => {
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
        ? a.price - b.price
        : parseFloat(b.rating || "0") - parseFloat(a.rating || "0");
    });

  return (
    <div className="w-full flex flex-col items-center gap-4 bg-[#f5f5f5] p-4">
      <FilterSortBar
        filterFreeShipping={filterFreeShipping}
        filterHighRating={filterHighRating}
        sortBy={sortBy}
        onSort={setSortBy}
        onToggleShipping={() => setFilterFreeShipping(!filterFreeShipping)}
        onToggleRating={() => setFilterHighRating(!filterHighRating)}
      />

      <div className="md:hidden w-full flex justify-start">
        <button
          className="text-sm p-2 border-1 border-gray-300 rounded bg-white shadow"
          onClick={() => setShowMobileFilter(true)}
        >
          <LocalIcon iconName="ic_filter" width={28} height={28} className="text-gray-600"/>
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
