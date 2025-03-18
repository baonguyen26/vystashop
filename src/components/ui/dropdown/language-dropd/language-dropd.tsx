import { LocalIcon } from "src/assets/local-icon";
import { DropdownMenu } from "../dropdown-menu";
import { languagesItems } from "src/constants/language";

export const LanguageDropdown = () => {
  return (
    <DropdownMenu
      icon={
        <LocalIcon
          iconName="ic_lang"
          width={"auto"}
          height={"auto"}
        />
      }
      items={languagesItems}
      onChange={(item) => {
        // setValues(item.value);
        console.log(item);
      }}
      className="w-fit"
    />
  );
};
