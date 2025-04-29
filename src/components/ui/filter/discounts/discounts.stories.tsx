import { Meta, StoryObj } from "@storybook/react";
import { DiscountsFilter } from "./discounts";

const meta = {
  component: DiscountsFilter,
} satisfies Meta<typeof DiscountsFilter>;

export default meta;
type Story = StoryObj<typeof DiscountsFilter>;

export const Default: Story = {
  args: {
    items: [
      { value: "10", name: "0 - 10%" },
      { value: "11", name: "10 - 30%" },
      { value: "12", name: "20 - 60%" },
    ],
    // defaultSelected: "",
    className: "",
  }
};