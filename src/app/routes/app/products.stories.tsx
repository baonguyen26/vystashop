import { Meta, StoryObj } from "@storybook/react";
import { ProductResultRouter } from "./product-result";


const meta = {
    component: ProductResultRouter
} satisfies Meta<typeof ProductResultRouter>;

export default meta;

type Story = StoryObj<typeof ProductResultRouter>

export const Default: Story = {};
