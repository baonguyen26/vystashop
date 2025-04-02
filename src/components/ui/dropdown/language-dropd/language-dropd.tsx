import { LocalIcon } from "src/assets/local-icon";
import { DropdownMenu } from "../dropdown-menu";
import { languagesItems } from "src/constants/language";

export const LanguageDropdown = ({
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
      icon={
        !overlay && (
          <LocalIcon
            iconName="ic_lang"
            width={"auto"}
            height={"auto"}
          />
        )
      }
      items={languagesItems}
      onChange={(item) => {
        // setValues(item.value);
        console.log(item);
      }}
      className={className}
      overlay={overlay}
    />
  );
};
