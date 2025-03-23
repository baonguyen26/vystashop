import { Meta, StoryObj } from "@storybook/react";
import { CheckBox } from "./checkbox";

const meta = {
  component: CheckBox,
} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof CheckBox>;

export const Default: Story = {};
