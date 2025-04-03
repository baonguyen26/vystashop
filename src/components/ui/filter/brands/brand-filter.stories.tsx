import { Meta, StoryObj } from "@storybook/react";
import { BrandFilter } from "./brand-filter";

const meta = {
  component: BrandFilter,
} satisfies Meta<typeof BrandFilter>;

export default meta;
type Story = StoryObj<typeof BrandFilter>;

export const Default: Story = {
    args: {
        items: [
            {
                value: "brand1",
                name: "brand 1"
            },
            {
                value: "brand2",
                name: "brand 2"
            },
            {
                value: "brand3",
                name: "brand 3"
            },
            {
                value: "brand4",
                name: "brand 4"
            },
            {
                value: "brand5",
                name: "brand 5"
            }
        ],
    },
};
