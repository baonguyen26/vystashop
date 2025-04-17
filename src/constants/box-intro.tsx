import { BoxIntroduceProps } from "src/components/ui";
import { LocalIcon } from "src/assets/local-icon";

export const boxIntroduceItems: BoxIntroduceProps[] = [
    {
        icon: <LocalIcon iconName="ic_search_blue" width={"auto"} height={"auto"} />,
        title:"Search",
        text:"Find your heart's desire by comparing prices from thousands of shops in one place"
    },
    {
        icon: <LocalIcon iconName="ic_order_blue" width={"auto"} height={"auto"} />,
        title:"Order",
        text:"Order your product simply by selecting your preferred merchant at the lowest price"
    },
    {
        icon: <LocalIcon iconName="ic_enjoy_blue" width={"auto"} height={"auto"} />,
        title:"Enjoy",
        text:"Enjoy your product knowing you've bought it at the best price"
    },
]
