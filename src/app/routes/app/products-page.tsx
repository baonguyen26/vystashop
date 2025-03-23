import { ProductsList } from "src/features/result-feature";

export const ProductsRouter = () => {

    return (
        <div className="flex flex-col items-center justify-start w-full">
            {/* header */}
            <div></div>

            {/* products list */}
            <div className="flex justify-start gap-[20px] max-w-[1440px] mb-[40px]">
                <div className="hiden md:flex flex-col flex-nowrap bg-white w-[208px] pb-4 md:pt-[62px]">
                    {/* filter left section*/}
                    filter left
                </div>
    
                <div className="flex flex-col items-start flex-nowrap md:w-[calc(100%-208px)]">
                    {/* filter top section */}
                    <div className="py-[2px]">filter_1</div>
                    <div>filter_2</div>
                    <div className="py-[28px]">filter_3</div>
    
                    {/* list product */}
                    <ProductsList />
                </div>
            </div>

            {/* footer */}
            <div></div>
        </div>
    );
}