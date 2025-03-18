import { DropdownMenu } from "../dropdown-menu";
import { countriesItems } from "src/constants/countries";

export const CountriesDropdown = () => {
    return (
        <DropdownMenu
            items={countriesItems}
            onChange={(item) => {
                console.log(item);
            }}
            className="w-fit"
        />
    )
}
