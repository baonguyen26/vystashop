import { Meta, StoryObj } from "@storybook/react";
import { ProductResultHeader } from "./product-result-header";

const meta = {
  component: ProductResultHeader,
} satisfies Meta<typeof ProductResultHeader>;

export default meta;
type Story = StoryObj<typeof ProductResultHeader>;

export const Default: Story = {};
