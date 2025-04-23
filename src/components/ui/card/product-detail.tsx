import { Button } from "../button";
import { IProduct } from "src/types/product.type";
import { useMediaQuery } from "react-responsive";
import { useTranslation } from "react-i18next";

type ProductDetailProps = {
  product: IProduct;
};

export const ProductDetail = ({ product }: ProductDetailProps) => {
  const {
    title,
    brand,
    description,
    image,
    shopImage,
    shop,
    rating,
    price,
    url,
    payments,
    freeShipping,
  } = product;

  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });
  const { t } = useTranslation();

  return (
    <>
      {isMobile ? (
        <div className="flex flex-col items-start w-full gap-[20px]">
          <div className="flex">
            {image && <img
              className="w-[70px] h-[70px] "
              src={image}
              alt="img"
            />}
            <div className="flex flex-col">
              <span className="text-[18px] text-[#3a4b55] leading-[32px] tracking-tighter">
                {title}
              </span>
              <span className="text-[12px] font-[500] leading-[24px]">
                {brand}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-[20px] w-full">
            <span className="text-[16px] font-[400] leading-[24px] tracking-tight">
              {description}
            </span>
            <div className="flex flex-col gap-[34px] w-full px-[20px] py-[20px] border-1 border-gray-400 rounded-[6px] shadow-2xl border-b-4">
              <div className="flex items-center gap-[10px]">
                {shopImage && <img
                  className="w-[30px] h-[30px]"
                  src={shopImage}
                  alt="shop img"
                />}
                <span className="text-[16px] font-[500] leading-[20px]">
                  At {shop} ★ {rating}
                </span>
              </div>
              <Button className="h-[48px] text-[16px] font-[700]">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                    {`${t("go_to_our_top_choice")} - £${price.value}`}
                </a>
              </Button>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-[4px] w-[230px]">
                  {payments.map((payment, index) => (
                    <img
                      key={index}
                      className="w-[45px] h-[35px] border-1 border-gray-200"
                      src={payment}
                      alt="payment icon"
                    />
                  ))}
                </div>
                {freeShipping && (
                  <div className="flex items-center gap-[5px]">
                    <img
                      className="w-[30px] h-[30px]"
                      src="https://cdn-icons-png.flaticon.com/512/8676/8676208.png"
                      alt="icon"
                    />
                    <span className="text-[14px] leading-[21px]">
                      {t("product.free_shipping")}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex max-[970px]:w-[100%] w-[60%] items-center gap-[20px]">
          <figure className="flex items-center justify-center w-[35%] h-[280px]">
            <img
              className="h-full"
              src={image}
              alt="img"
            />
          </figure>
          <div className="flex flex-col gap-[10px] px-[20px] w-[70%]">
            <span className="text-[24px] text-[#3a4b55] leading-[32px] tracking-tighter">
              {title}
            </span>
            <span className="text-[16px] font-[500] leading-[24px]">
              {brand}
            </span>
            <span className="text-[14px] font-[300] leading-[24px] tracking-tight">
              {description}
            </span>
            <div className="flex flex-col gap-[34px] w-full px-[20px] py-[20px] border-1 border-gray-400 rounded-[6px] shadow-2xl border-b-4">
              <div className="flex items-center gap-[10px]">
                {shopImage && <img
                  className="w-[30px] h-[30px]"
                  src={shopImage}
                  alt="shop img"
                />}
                <span className="text-[16px] font-[500] leading-[20px]">
                  At {shop} ★ {rating}
                </span>
              </div>
              <Button className="h-[48px] text-[16px] font-[700]">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {`${t("go_to_our_top_choice")} - £${price.value}`}
                </a>
              </Button>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap w-[230px]">
                  {payments.map((payment, index) => (
                    <img
                      key={index}
                      className="w-[45px] h-[35px] border-1 border-gray-200"
                      src={payment}
                      alt="payment icon"
                    />
                  ))}
                </div>
                {freeShipping && (
                  <div className="flex items-center gap-[5px]">
                    <img
                      className="w-[30px] h-[30px]"
                      src="https://cdn-icons-png.flaticon.com/512/8676/8676208.png"
                      alt="icon"
                    />
                    <span className="text-[14px] leading-[21px]">
                      {t("product.free_shipping")}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
