import { Meta, StoryObj } from "@storybook/react";
import { ShopFilter } from "./shop-filter";

const meta = {
  component: ShopFilter,
} satisfies Meta<typeof ShopFilter>;

export default meta;
type Story = StoryObj<typeof ShopFilter>;

export const Default: Story = {
    args: {
        items: [
            {
                value: "shop1",
                name: "Shop 1",
            },
            {
                value: "shop2",
                name: "Shop 2",
            },
            {
                value: "shop3",
                name: "Shop 3",
            },
            {
                value: "shop4",
                name: "Shop 4",
            },
            {
                value: "shop5",
                name: "Shop 5",
            }
        ],
    },
};
