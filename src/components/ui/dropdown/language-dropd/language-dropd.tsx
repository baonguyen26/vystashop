import { LocalIcon } from "src/assets/local-icon";
import { DropdownMenu } from "../dropdown-menu";
import { languagesItems } from "src/constants/language";
import { useTranslation } from "react-i18next";

export const LanguageDropdown = ({
  className,
  arrowType,
  overlay,
}: {
  className?: string;
  arrowType?: "default" | "black";
  overlay?: boolean;
}) => {
  const { i18n } = useTranslation();

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
        i18n.changeLanguage(item.value);
      }}
      className={className}
      overlay={overlay}
    />
  );
};
