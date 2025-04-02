import { DropdownMenu } from "../dropdown-menu";
import { countriesItems } from "src/constants/countries";

export const CountriesDropdown = ({
    className,
    arrowType,
    overlay,
  }: {
    className?: string;
    arrowType?: "default" | "black";
    overlay?: boolean;
  }) => {
    return (
      <DropdownMenu
        arrowType={arrowType}
        items={countriesItems}
        onChange={(item) => {
          console.log(item);
        }}
        className={className}
        overlay={overlay}
      />
    );
  };
  
