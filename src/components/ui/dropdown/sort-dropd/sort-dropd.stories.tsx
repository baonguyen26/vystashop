import { Meta, StoryObj } from "@storybook/react";
import { SortDropdown } from "./sort-dropd";

const meta = {
    component: SortDropdown 
} satisfies Meta<typeof SortDropdown>;

export default meta;
type Story = StoryObj<typeof SortDropdown>;

export const Default: Story = {
    args: {
      
      },
};
