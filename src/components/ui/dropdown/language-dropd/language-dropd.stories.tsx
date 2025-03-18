import { Meta, StoryObj } from "@storybook/react";
import { LanguageDropdown } from "./language-dropd";

const meta = {
  component: LanguageDropdown,
} satisfies Meta<typeof LanguageDropdown>;

export default meta;
type Story = StoryObj<typeof LanguageDropdown>;

export const Default: Story = {};
