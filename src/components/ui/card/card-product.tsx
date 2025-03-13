import { memo } from "react";
import { LocalIcon } from "src/assets/local-icon";
import { IProduct } from "src/types/product.type";

interface ProductCardProps {
  product: IProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="snap-center flex-shrink-0 w-[210px] overflow-hidden flex flex-col gap-[12px] cursor-pointer">
      <figure className="w-[100%] h-[210px] flex items-center justify-center">
        <img
          className="w-auto h-[100%]"
          src={
            "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQK1_nKkVXyMHV4Iscqh9VUWQvhdC-ycDi0VVWflanq5q0LYNDHKX_jnd65BoN4LSt6TVix76PrqCC0poTQw9wxAiDRLGm3bV6u2BYYkNy-796ZOrpDnII-nA&usqp=CAE"
          }
          alt=""
        />
      </figure>
      <h3 className="text-black text-[12px] font-[400] line-clamp-3 cursor-pointer">
        {product.title}
      </h3>
      <div className="flex flex-col justify-start items-start gap-[10px]">
        <p className="text-[#00A1EA] text-[14px] font-[300]">{product.brand}</p>
        <p className="text-[#1B2328] text-[16px] font-[600]">
          {product.price.value}
        </p>
        <button className="w-full flex items-center justify-between p-[10px] rounded-[5px] bg-[linear-gradient(100deg,#00A1EA_3.97%,#0D7AAF_95.64%)] text-white font-medium shadow-md transition-all duration-300 hover:brightness-110 active:scale-95 cursor-pointer">
          <p className="text-[14px] sm:text-[16px] font-[500] leading-[16px]">Go to shop</p>
          <span>
              <LocalIcon
                className="scale-x-[-1] rotate-[-45deg] [&>g>path]:fill-white w-[12px] h-[12px]"
                iconName="arrow_icon"
              />
          </span>
        </button>

        <p className="w-[100%] flex items-center justify-between text-[12px] font-[700] text-[#2D9CDB]">
            <span>5 ofers</span>
            <span>$434.99 - $513.99</span>
        </p>
      </div>
    </div>
  );
};

export default memo(ProductCard);
