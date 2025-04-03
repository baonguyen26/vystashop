import { Meta, StoryObj } from "@storybook/react";
import { CountriesDropdown } from "./countries-dropd";

const meta = {
  component: CountriesDropdown,
} satisfies Meta<typeof CountriesDropdown>;

export default meta;
type Story = StoryObj<typeof CountriesDropdown>;

export const Default: Story = {};

export const Style2: Story = {

};
