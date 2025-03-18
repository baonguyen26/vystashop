import { Meta, StoryObj } from "@storybook/react";
import { AppMain } from "./app-main";

const meta = {
  component: AppMain,
} satisfies Meta<typeof AppMain>;

export default meta;
type Story = StoryObj<typeof AppMain>;

export const Default: Story = {};
