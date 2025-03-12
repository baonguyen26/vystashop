import React from "react";

import {
  logo_icon,
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
  google
} from ".";

const icon = {
  logo_icon,
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
  google
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
