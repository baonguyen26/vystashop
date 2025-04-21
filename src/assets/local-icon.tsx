import React from "react";

import {
  ic_se,
  ic_cz,
  ic_dk,
  ic_fl,
  ic_fr,
  ic_at,
  ic_be,
  ic_hu,
  ic_ie,
  ic_it,
  ic_nl,
  ic_no,
  ic_pl,
  ic_pt,
  ic_ro,
  ic_sk,
  ic_es,
  ic_ch,
  ic_gr,
  ic_de,
  ic_location,
  ic_language,
  ic_cancel,
  ic_arrow_black,
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
  facebook,
  instagram,
  linkedin,
  twitter,
  google,
  arrow_icon,
  ic_close,
  ic_arrow_category,
  ic_rothys,
  ic_puravida,
  ic_bestbuy,
  ic_adidas,
  ic_apple,
  ic_nike,
  ic_link,
  ic_arrow_offer
} from ".";

const icon = {
  ic_se,
  ic_cz,
  ic_dk,
  ic_fl,
  ic_fr,
  ic_at,
  ic_be,
  ic_hu,
  ic_ie,
  ic_it,
  ic_nl,
  ic_no,
  ic_pl,
  ic_pt,
  ic_ro,
  ic_sk,
  ic_es,
  ic_ch,
  ic_gr,
  ic_de,
  ic_location,
  ic_language,
  ic_cancel,
  ic_arrow_black,
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
  facebook,
  instagram,
  linkedin,
  twitter,
  google,
  arrow_icon,
  ic_close,
  ic_arrow_category,
  ic_rothys,
  ic_puravida,
  ic_bestbuy,
  ic_adidas,
  ic_apple,
  ic_nike,
  ic_link,
  ic_arrow_offer
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
