import { LocalIcon } from "src/assets/local-icon";
import { Button } from "../button";
import { IProduct } from "src/types/product.type";

type BestOfferProps = {
  product: IProduct;
  active?: boolean;
};

export const BestOffer = ({
  product: { shop, rating, price, freeShipping, url },
  active = false,
}: BestOfferProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        className={`flex items-center justify-between gap-[20px] px-[20px] w-[100%] h-[85px] border-1 rounded-2xl ${
          active ? "border-[#01A4B4] border-2" : "border-gray-400"
        }`}
      >
        <div className="flex flex-col gap-[3px]">
          <span className="text-[14px] font-[700] leading-[18px]">{shop}</span>
          <div className="flex items-center text-[12px]">
            <LocalIcon
              iconName="ic_star_gray"
              width={10}
              height={10}
            />
            {rating}
          </div>
          {active && (
            <img
              className="w-[25px] h-[25px]"
              src="https://img.icons8.com/?size=100&id=85769&format=png&color=22C3E6"
              alt="icon"
            />
          )}
        </div>
        <div className="flex flex-col">
          <span className="text-[16px] font-[700] leading-[24px] ">
            £{price.value}
          </span>
          <span className="text-[12px] leading-[18px]">
            {freeShipping ? "Free shipping" : "Shipping cost apply"}
          </span>
        </div>
        <Button
          startIcon={
            <LocalIcon
              iconName="ic_arrow_white"
              width={27}
            />
          }
        />
      </div>
    </a>
  );
};
