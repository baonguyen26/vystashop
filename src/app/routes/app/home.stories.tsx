import { Meta, StoryObj } from "@storybook/react";
import { HomeRouter } from "./home";

const meta = {
  component: HomeRouter,
} satisfies Meta<typeof HomeRouter>;

export default meta;
type Story = StoryObj<typeof HomeRouter>;

export const Default: Story = {};
