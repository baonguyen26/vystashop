import { Meta, StoryObj } from "@storybook/react";
import { DropdownMenu } from "./dropdown-menu";
import { LocalIcon } from "src/assets/local-icon";

const meta = {
  component: DropdownMenu,
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
  args: {
    icon: <LocalIcon iconName="ic_lang" width={"auto"} height={"auto"} />,
    items: [
      {
        name: "English",
        value: "0",
      },
      {
        name: "Vietnamese",
        value: "1",
      }
    ],
    onChange: (item) => {
      console.log(item);
    },
  },
};
