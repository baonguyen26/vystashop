import React from "react";

import { ic_arrow,
  ic_dot_green,
  ic_enjoy_blue,
  ic_lang,
  ic_logo,
  ic_menu,
  ic_order_blue,
  ic_search_black,
  ic_search_blue,
  ic_uk
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
} satisfies Record<
  string,
  React.FunctionComponent<React.SVGProps<SVGSVGElement>>
>;

type ReactIconProps = React.SVGProps<SVGSVGElement> & {
  iconName: keyof typeof icon;
  height?: number | "auto";
  width?: number | "auto";
};

/**
 * generator svg icon
 * @param param0
 * @returns
 */
export const LocalIcon = ({
  iconName,
  height = 24,
  width = 24,
  ...props
}: ReactIconProps) => {
  const Comp = icon[iconName];
  return (
    <Comp
      {...(height !== "auto" && { height })}
      {...(width !== "auto" && { width })}
      {...props}
    />
  );
};
