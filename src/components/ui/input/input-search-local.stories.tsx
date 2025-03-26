import { Meta, StoryObj } from "@storybook/react";
import { InputSearchLocal } from "./input-search-local";

const meta = {
  component: InputSearchLocal,
} satisfies Meta<typeof InputSearchLocal>;

export default meta;
type Story = StoryObj<typeof InputSearchLocal>;

export const Default:  Story = {
    args: {

    },
};
