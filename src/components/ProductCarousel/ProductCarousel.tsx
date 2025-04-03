import { memo, RefObject } from "react";
import { IProduct } from "src/types/product.type";
import ProductCard from "../ui/card";
import { TIME_CAROUSEL } from "src/constants/TimeInterval";
import { useAutoScroll } from "src/hooks";

const data: IProduct[] = [
  {
    "createdAt": "2025-03-10T04:06:06.283Z",
    "name": "Stephen Renner",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/678.jpg",
    "id": "1",
    "offerId": "370894908-online:en:GB:214032003L",
    "title": "Nike T-shirt Weiss - EU L - Men",
    "description": "Mô tả sản phẩm",
    "url": "https://www.kickz.com/en-GB/Nike-T-Shirt-Weiss-F100/p/FZ4794-100?size=L",
    "image": "https://imagedelivery.net/AXBOLKJ2nB6B4T-JIYE73g/29b32_nike_t-shirt_nike_t-shirt_weiss_f100_front/width=700,height=540,quality=95,fit=pad,format=webp",
    "contentLanguage": "en",
    "targetCountry": "US",
    "availability": "in stock",
    "brand": "Nike",
    "condition": "new",
    "price": {
      "value": "22.95",
      "currency": "GBP"
    },
    "isSale": true,
    "freeShipping": false
  },
  {
    "createdAt": "2025-03-09T19:37:07.217Z",
    "name": "Jamie Mayert",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/415.jpg",
    "id": "2",
    "offerId": "370894908-online:en:GB:123859099L",
    "title": "Nike Tech Fleece Sweatpants Grey - EU L - Men",
    "description": "Mô tả sản phẩm",
    "url": "https://www.kickz.com/en-GB/Nike-Tech-Fleece-Sweatpants-Grey-F063/p/HJ6533-063?size=L",
    "image": "https://imagedelivery.net/AXBOLKJ2nB6B4T-JIYE73g/61292_nike_tech_fleece_open-hem_sweatpants_nike_tech_fleece_sweatpants_grey_f063_front/width=700,height=540,quality=95,fit=pad,format=webp",
    "contentLanguage": "en",
    "targetCountry": "GB",
    "availability": "in stock",
    "brand": "Nike",
    "condition": "new",
    "price": {
      "value": "93.95",
      "currency": "GBP"
    },
    "isSale": false,
    "freeShipping": false
  },
  {
    "createdAt": "2025-03-09T23:44:22.673Z",
    "name": "Candice Bogisich",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1054.jpg",
    "id": "3",
    "offerId": "5337720798-online:en:GB:40033461565",
    "title": "Nike Athletic Hoodie | Size: M | Grey | Unisex",
    "description": "Mô tả sản phẩm",
    "url": "https://www.awin1.com/pclick.php?p=40033461565&a=626889&m=22735&clickref=GB${subId}",
    "image": "https://mediahub.debenhams.com/m091201517213_grey_xl",
    "contentLanguage": "en",
    "targetCountry": "GB",
    "availability": "in stock",
    "brand": "Nike",
    "condition": "new",
    "price": {
      "value": "16.99",
      "currency": "GBP"
    },
    "isSale": true,
    "freeShipping": true
  },
  {
    "createdAt": "2025-03-09T23:14:17.758Z",
    "name": "Ernesto Connelly",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/595.jpg",
    "id": "4",
    "offerId": "726920165-online:en:GB:38767052265",
    "title": "Nike Neon Green Phone Lanyard",
    "description": "Mô tả sản phẩm",
    "url": "https://www.awin1.com/pclick.php?p=38767052265&a=626889&m=19215&clickref=GB${subId}",
    "image": "https://media.secretsales.com/catalog/product/3/8/38990ad4e7eb48d89c709fbb10620e5b.jpg",
    "contentLanguage": "en",
    "targetCountry": "GB",
    "availability": "in stock",
    "brand": "Nike",
    "condition": "new",
    "price": {
      "value": "5.99",
      "currency": "GBP"
    },
    "isSale": true,
    "freeShipping": false
  },
  {
    "createdAt": "2025-03-09T21:34:41.488Z",
    "name": "Ms. Steve Kautzer DDS",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/525.jpg",
    "id": "5",
    "offerId": "370894908-online:en:GB:94244600911",
    "title": "Nike Dunk Low Blue - EU 45 - Men",
    "description": "Mô tả sản phẩm",
    "url": "https://www.kickz.com/en-GB/Nike-Dunk-Low-Blue-F400/p/HM9606-400?size=45",
    "image": "https://imagedelivery.net/AXBOLKJ2nB6B4T-JIYE73g/33d93_nike_dunk_low_nike_dunk_low_blue_f400_rightout/width=700,height=540,quality=95,fit=pad,format=webp",
    "contentLanguage": "en",
    "targetCountry": "GB",
    "availability": "in stock",
    "brand": "Nike",
    "condition": "new",
    "price": {
      "value": "76.95",
      "currency": "GBP"
    },
    "isSale": true,
    "freeShipping": false
  },
  {
    "createdAt": "2025-03-09T21:03:35.319Z",
    "name": "Terence Predovic",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1063.jpg",
    "id": "6",
    "offerId": "370894908-online:en:GB:DZ3279-063-XL",
    "title": "Nike T-shirt Grey - EU XL - Men",
    "description": "Mô tả sản phẩm",
    "url": "https://www.kickz.com/en-GB/Nike-t-shirt-grey-F063-/p/DZ3279-063?size=XL",
    "image": "https://imagedelivery.net/AXBOLKJ2nB6B4T-JIYE73g/8f88e_nike-t-shirt-grau-f063-dz3279-lifestyle_front/width=700,height=540,quality=95,fit=pad,format=webp",
    "contentLanguage": "en",
    "targetCountry": "GB",
    "availability": "in stock",
    "brand": "Nike",
    "condition": "new",
    "price": {
      "value": "25.95",
      "currency": "GBP"
    },
    "isSale": false,
    "freeShipping": false
  },
  {
    "createdAt": "2025-03-10T05:35:02.404Z",
    "name": "Carmen Lemke I",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/481.jpg",
    "id": "7",
    "offerId": "5498992828-online:en:GB:39883903145",
    "title": "Nike Athletic Hoodie | Size: L | Grey | Unisex",
    "description": "Mô tả sản phẩm",
    "url": "https://www.awin1.com/pclick.php?p=39883903145&a=626889&m=22735&clickref=GB${subId}",
    "image": "https://mediahub.debenhams.com/m091201517220_grey_xl",
    "contentLanguage": "en",
    "targetCountry": "GB",
    "availability": "in stock",
    "brand": "Nike",
    "condition": "new",
    "price": {
      "value": "16.99",
      "currency": "GBP"
    },
    "isSale": true,
    "freeShipping": true
  },
];

export const ProductCarousel = memo(({
  scrollRef,
}: {
  scrollRef: RefObject<HTMLDivElement | null>;
}) => {
  useAutoScroll(scrollRef, TIME_CAROUSEL);

  return (
    <div
      ref={scrollRef}
      className="w-full overflow-x-auto flex gap-[30px] scroll-smooth snap-x snap-mandatory pb-[20px]"
    >
      {data.map((product, index) => (
        <ProductCard
          key={index}
          product={product}
          className="w-[210px]"
        />
      ))}
    </div>
  );
});
