import { memo, useState } from "react";
import { LocalIcon } from "src/assets/local-icon";
import { IProduct } from "src/types/product.type";
import { Button } from "../button";
import { useTranslation } from "react-i18next";

interface ProductCardProps {
  product: IProduct;
  className?: string;
}

const ImageChecker = ({ url }: { url: string }) => {
  const [isValid, setIsValid] = useState<boolean>(true);

  return (
    <img
      className="w-auto h-[100%]"
      src={url}
      alt={isValid ? "" : "Not Found!"}
      onError={() => setIsValid(false)}
    />
  );
};

const ProductCard = ({ product, className }: ProductCardProps) => {
  const { t } = useTranslation();

  return (
    <div
      className={`snap-center flex-shrink-0 overflow-hidden flex flex-nowrap flex-col gap-[10px] ${className}`}
    >
      <a
        className="flex flex-nowrap flex-col relative w-full h-full"
        href={product.url}
        target="_blank"
      >
        <figure className="w-[100%] h-[210px] flex items-center justify-center">
          <ImageChecker url={product.image}/>
        </figure>
        <h3 className="text-black h-[54px] text-[12px] font-[400] line-clamp-3 cursor-pointer mb-[12px]">
          {product.title}
        </h3>
        <div className="flex flex-col justify-start items-start gap-[10px]">
          <p className="text-[#00A1EA] text-[14px] font-[500]">
            {product.brand}
          </p>
          <p className="text-[#1B2328] text-[16px] font-[600]">
            {product.price.value}
          </p>
        </div>
      </a>
      <div className="flex flex-col gap-[10px]">
        <Button
          className="w-full flex items-center justify-between p-[10px] rounded-[5px] bg-[linear-gradient(100deg,#00A1EA_3.97%,#0D7AAF_95.64%)] text-white font-medium shadow-md transition-all duration-300 hover:brightness-110 active:scale-95 cursor-pointer"
          onClick={() => window.open(product.url, "_blank")}
        >
          <p className="text-[14px] sm:text-[16px] font-[500] leading-[16px]">
            {t("go_to_shop")}
          </p>
          <span>
            <LocalIcon
              className="scale-x-[-1] rotate-[-45deg] [&>g>path]:fill-white w-[12px] h-[12px]"
              iconName="arrow_icon"
            />
          </span>
        </Button>

        <p className="w-[100%] flex flex-col sm:flex-row items-start sm:items-center justify-between text-[12px] font-[700] text-[#2D9CDB]">
          <a href={product.url}>
            <span>{t("offers", {offers: 5})}</span>
          </a>
          <a href={product.url}>
            <span>$434.99 - $513.99</span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default memo(ProductCard);
