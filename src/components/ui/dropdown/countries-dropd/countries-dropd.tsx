import { DropdownMenu } from "../dropdown-menu";
import { countriesItemsFull, countriesItemsAcronym } from "src/constants/countries";

export const CountriesDropdown = ({
    className,
    arrowType,
    overlay,
    itemType = "acronym"
  }: {
    className?: string;
    arrowType?: "default" | "black";
    overlay?: boolean;
    itemType?: "full" | "acronym";
  }) => {
    return (
      <DropdownMenu
        arrowType={arrowType}
        items={itemType === "full" ? countriesItemsFull : countriesItemsAcronym}
        onChange={(item) => {
          console.log(item);
        }}
        className={className}
        overlay={overlay}
      />
    );
  };
  
