import { Meta, StoryObj } from "@storybook/react";
import { HeroSection } from "./hero-section";

const meta = {
  component: HeroSection,
} satisfies Meta<typeof HeroSection>;

export default meta;
type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {};
