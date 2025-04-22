import { useGetProductToCompare } from "../api/compare";
import { ProductDetail, BestOffer } from "src/components/ui";
import { useParams } from "react-router-dom";
import { IProductDetail } from "src/types/product.type";

export const CompareMain = () => {
  const { data, isLoading } = useGetProductToCompare();
  const { id } = useParams();

  isLoading && <div>Loading...</div>;

  const product = data?.data.find((item) => item.id === id) as IProductDetail;

  return (
    <div className="px-[40px] py-[60px]">
      <div className="flex justify-center gap-[10px]">
        {product && <ProductDetail product={product} />}
        <div className="flex flex-col gap-[15px] max-[960px]:hidden">
          <span className="text-[20px] font-[700] leading-[30px]">BEST OFFERS</span>
          <div className="flex flex-col gap-[5px] max-h-[450px] overflow-y-auto">
            {data?.data.map((item, key) => (
              <BestOffer
                key={key}
                product={item}
                active={item.id === id}
              />
            ))}
          </div>
        </div>
      </div>
      {/* {other component} */}
    </div>
  );
};
