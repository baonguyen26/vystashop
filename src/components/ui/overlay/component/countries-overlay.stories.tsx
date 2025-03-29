import { Meta, StoryObj } from "@storybook/react";
import { CountryOverlay } from "./countries-overlay";

const meta = {
  component: CountryOverlay,
} satisfies Meta<typeof CountryOverlay>;

export default meta;
type Story = StoryObj<typeof CountryOverlay>;

export const Default: Story = {};
