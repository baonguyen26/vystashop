import { Meta, StoryObj } from "@storybook/react";
import { InputSearch } from "./input-search";

const meta = {
  component: InputSearch,
} satisfies Meta<typeof InputSearch>;

export default meta;
type Story = StoryObj<typeof InputSearch>;

export const Default:  Story = {
    args: {
      
    },
};
