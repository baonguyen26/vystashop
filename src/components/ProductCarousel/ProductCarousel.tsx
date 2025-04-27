import { memo, RefObject } from "react";
import { IProduct } from "src/types/product.type";
import ProductCard from "../ui/card";
import { TIME_CAROUSEL } from "src/constants/TimeInterval";
import { useAutoScroll } from "src/hooks";

const data: (IProduct & { offers: number })[] = [
  {
    "createdAt": "2025-03-10T04:06:06.283Z",
    "id": "1",
    "offerId": "370894908-online:en:GB:214032003L",
    "title": "Nike Golf Polo Dri Fit Victory, Svart",
    "description": "Polotröja för barn Nike Dri-Fit Victory",
    "url": "https://www.all4golf.com/se/nike-golf-polo-dri-fit-victory-svart-6930977?source=webgains&siteid=1518735&utm_source=webgains&wgu=307685_1518735_17449819821756_4fd4075327&wgexpiry=1776517982",
    "image": "https://minio-a4g-1.digitalmanufaktur.net:9000/prod/media/e5/f1/ae/1737021254/8b1c0b7ca70794cdc022f7c016eb7ff126ac3b85_6929787_schwarz_01_6788d745ee4cf.jpg?ts=1744489351",
    "contentLanguage": "en",
    "targetCountry": "US",
    "availability": "in stock",
    "brand": "Nike Golf",
    "condition": "new",
    "price": 312.00,
    "isSale": true,
    "freeShipping": false,
    "category": "sportswear",
    "shop": "Atall4golf.com",
    "shopImage": "",
    "rating": "5",
    "payments": [],
    "offers": 1
  },
  {
    "createdAt": "2025-03-09T19:37:07.217Z",
    "id": "2",
    "offerId": "370894908-online:en:GB:214032003L",
    "title": "Dri-Fit Victory Polo Pojkar - Svart, Vit",
    "description": "",
    "url": "https://www.padelpoint.se/nike-dri-fit-victory-polo-pojkar-svart-vit-0044675802400076.html?utm_source=awin&utm_medium=affiliates&utm_campaign=productdata&utm_source=awin&utm_medium=affiliates&utm_campaign=376257&utm_content=link&sv1=affiliate&sv_campaign_id=376257&awc=23661_1744983759_a24e8bb4487502072ba928d8416f0e42",
    "image": "https://imagedelivery.net/AXBOLKJ2nB6B4T-JIYE73g/61292_nike_tech_fleece_open-hem_sweatpants_nike_tech_fleece_sweatpants_grey_f063_front/width=700,height=540,quality=95,fit=pad,format=webp",
    "contentLanguage": "en",
    "targetCountry": "GB",
    "availability": "in stock",
    "brand": "Nike",
    "condition": "new",
    "price": 369.95,
    "isSale": false,
    "freeShipping": false,
    "category": "sportswear",
    "shop": "Padelpoint.se",
    "shopImage": "",
    "rating": "4",
    "payments": [],
    "offers": 1
  },
  {
    "createdAt": "2025-03-09T23:44:22.673Z",
    "id": "3",
    "offerId": "5337720798-online:en:GB:40033461565",
    "title": "Golf Pride Tour Wrap 2G Griff",
    "description": "Gummigreppet Tour Wrap 2G från Golf Pride är nu ännu mjukare och förbättrar både komfort och känsla vid träff. Greppet kommer i en modern wrap-design.",
    "url": "https://www.all4golf.com/se/search?all4golf_se%5Bquery%5D=997168",
    "image": "https://minio-a4g-1.digitalmanufaktur.net:9000/prod/media/03/12/b4/1737039030/985487913c4d129a579f8328d17d0d202b68f5a9_996940_01_67891cb64b4a3.jpg?ts=1744144711",
    "contentLanguage": "en",
    "targetCountry": "GB",
    "availability": "in stock",
    "brand": "Gofl Pride",
    "condition": "new",
    "price": 145.99,
    "isSale": true,
    "freeShipping": true,
    "category": "sportswear",
    "shop": "Atall4golf.com",
    "shopImage": "",
    "rating": "5",
    "payments": [],
    "offers": 1
  },
  {
    "createdAt": "2025-03-09T23:14:17.758Z",
    "id": "4",
    "offerId": "5337720798-online:en:GB:40033461565",
    "title": "Golf Pride Tour Wrap 2 g handtag",
    "description": "Gummigreppet Tour Wrap 2G från Golf Pride är nu ännu mjukare och förbättrar både komfort och känsla vid träff. Greppet kommer i en modern wrap-design.",
    "url": "https://www.amazon.se/dp/B004X9YPGE/ref=asc_df_B004X9YPGE1744905600000/?tag=Shoparizese20-21&creative=380333&creativeASIN=B004X9YPGE&linkCode=asn&asc_refurl=WEB_94ae6ecc-1158-4d75-93b0-be692d796731&th=1",
    "image": "https://m.media-amazon.com/images/I/317YfkkgTdL._AC_SX679_.jpg",
    "contentLanguage": "en",
    "targetCountry": "GB",
    "availability": "in stock",
    "brand": "Golf Pride",
    "condition": "new",
    "price": 5.99,
    "isSale": true,
    "freeShipping": false,
    "category": "sportswear",
    "shop": "Amazon.se",
    "shopImage": "https://www.prideindustries.com/wp-content/uploads/2021/06/Customer-logo_Amazon-1-768x384.png.webp",
    "rating": "5",
    "payments": [
      "https://www.fidoo.com/wp-content/uploads/2024/05/Mastercard-Logo-PNG-HD-1.webp",
      "https://banner2.cleanpng.com/20180604/gra/aa9na3zzj.webp",
      "https://marketplace.commercetools.com/img/containers/assets/integrations/klarna/stage-logo-klarna.png/9864ce6c5d9b7f48aeaf10f432b0006e.webp",
      "https://www.logo.wine/a/logo/Amazon_Pay/Amazon_Pay-Logo.wine.svg",
      "https://images.seeklogo.com/logo-png/21/1/american-express-logo-png_seeklogo-214694.png"
    ],
    "offers": 1
  },
  {
    "createdAt": "2025-03-09T21:34:41.488Z",
    "id": "5",
    "offerId": "370894908-online:en:GB:94244600911",
    "title": "Golf Pride Align Multi Compound Cord + Griff",
    "description": "Justera Multi Compound Cord-greppet med påminnelse från GolfPride.",
    "url": "https://www.all4golf.com/se/golf-pride-align-multi-compound-cord-griff-996900?source=webgains&siteid=1518735&utm_source=webgains&wgu=307685_1518735_17449854923481_a478891078&wgexpiry=1776521492",
    "image": "https://minio-a4g-1.digitalmanufaktur.net:9000/prod/media/80/69/ae/1737035154/0ec83ded4df7e9c9bc46243d111b472594f53d15_996899_01_67890d92a6f44.jpg?ts=1744529031",
    "contentLanguage": "en",
    "targetCountry": "GB",
    "availability": "in stock",
    "brand": "Golf Pride",
    "condition": "new",
    "price": 212.95,
    "isSale": true,
    "freeShipping": false,
    "category": "sportswear",
    "shop": "Atall4golf.com",
    "shopImage": "",
    "rating": "5",
    "payments": [],
    "offers": 1
  },
  {
    "createdAt": "2025-03-09T21:03:35.319Z",
    "id": "6",
    "offerId": "370894908-online:en:GB:94244600911",
    "title": "Golf Pride MCC Plus4 justera multiCompound golfgrepp",
    "description": "",
    "url": "https://www.amazon.se/dp/B06X3RKMNB/ref%3Dasc_df_B06X3RKMNB1744905600000/?tag=Shoparizese20-21&creative=380333&creativeASIN=B06X3RKMNB&linkCode=asn&asc_refurl=WEB_68f34be2-80a7-4047-b0b4-673b72cc900f&th=1",
    "image": "https://m.media-amazon.com/images/I/412IDwaucJL._AC_SX522_.jpg",
    "contentLanguage": "en",
    "targetCountry": "GB",
    "availability": "in stock",
    "brand": "Nike",
    "condition": "new",
    "price":193.65,
    "isSale": false,
    "freeShipping": false,
    "category": "sportswear",
    "shop": "Amazon.se",
    "shopImage": "https://www.prideindustries.com/wp-content/uploads/2021/06/Customer-logo_Amazon-1-768x384.png.webp",
    "rating": "5",
    "payments": [
      "https://www.fidoo.com/wp-content/uploads/2024/05/Mastercard-Logo-PNG-HD-1.webp",
      "https://banner2.cleanpng.com/20180604/gra/aa9na3zzj.webp",
      "https://marketplace.commercetools.com/img/containers/assets/integrations/klarna/stage-logo-klarna.png/9864ce6c5d9b7f48aeaf10f432b0006e.webp",
      "https://www.logo.wine/a/logo/Amazon_Pay/Amazon_Pay-Logo.wine.svg",
      "https://images.seeklogo.com/logo-png/21/1/american-express-logo-png_seeklogo-214694.png"
    ],
    "offers": 1
  },
  {
    "createdAt": "2025-03-10T05:35:02.404Z",
    "id": "7",
    "offerId": "5498992828-online:en:GB:39883903145",
    "title": "Sportbyxa 'Pro'",
    "description": "Design: Vadderad fåll/kant; Fodring: Ofodrad; Material: Jersey; Mönster: Skrifttryck; Extra: Slätt tyg, Labeltryck; Detaljer: Elastiskt resårband; Längd: Kort/mini; Passform: Skinny",
    "url": "https://www.padelpoint.se/nike-pro-3in-bollshorts-damer-moerkbla-vit-0044545192100077.html?utm_source=awin&utm_medium=affiliates&utm_campaign=productdata&utm_source=awin&utm_medium=affiliates&utm_campaign=376257&utm_content=link&sv1=affiliate&sv_campaign_id=376257&awc=23661_1744987577_df700bc669b8b037db9eec2116ecec77",
    "image": "https://img.shoparize.com/products/ooLQWKbvxMc.jpg",
    "contentLanguage": "en",
    "targetCountry": "GB",
    "availability": "in stock",
    "brand": "Nike",
    "condition": "new",
    "price": 16.99,
    "isSale": true,
    "freeShipping": true,
    "category": "sportswear",
    "shop": "Padelpoint.se",
    "shopImage": "",
    "rating": "4.9",
    "payments": [],
    "offers": 1
  },
];

export const ProductCarousel = memo(({
  scrollRef,
  haveOffer = true,
}: {
  scrollRef: RefObject<HTMLDivElement | null>,
  haveOffer?: boolean
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
          haveOffer={haveOffer}
          className="w-[210px]"
        />
      ))}
    </div>
  );
});
