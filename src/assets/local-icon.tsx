import React from "react";

import {
  ic_arrow,
  ic_dot_green,
  ic_enjoy_blue,
  ic_lang,
  ic_logo,
  ic_menu,
  ic_order_blue,
  ic_search_black,
  ic_search_blue,
  ic_uk,
  apple_brand,
  nike_brand,
  dyson_brand,
  lego_brand,
  aeg_brand,
  michael_kors_brand,
  facebook,
  instagram,
  linkedin,
  twitter,
  google,
  arrow_icon
} from ".";

const icon = {
  ic_arrow,
  ic_dot_green,
  ic_enjoy_blue,
  ic_lang,
  ic_logo,
  ic_menu,
  ic_order_blue,
  ic_search_black,
  ic_search_blue,
  ic_uk,
  apple_brand,
  nike_brand,
  dyson_brand,
  lego_brand,
  aeg_brand,
  michael_kors_brand,
  facebook,
  instagram,
  linkedin,
  twitter,
  google,
  arrow_icon
} satisfies Record<string, React.FunctionComponent<React.SVGProps<SVGSVGElement>>>;

type ReactIconProps = React.SVGProps<SVGSVGElement> & {
  iconName: keyof typeof icon;
  height?: number | "auto";
  width?: number | "auto";
};

/**
 * Generator SVG Icon
 */
export const LocalIcon = ({
  iconName,
  height = 24,
  width = 24,
  ...props
}: ReactIconProps) => {
  const Comp = icon[iconName];
  return Comp ? (
    <Comp
      {...(height !== "auto" && { height })}
      {...(width !== "auto" && { width })}
      {...props}
    />
  ) : null;
};
