import { Meta, StoryObj } from "@storybook/react";
import { BoxIntroduce } from "./box-introduce";
import { LocalIcon } from "src/assets/local-icon";

const meta = {
  component: BoxIntroduce,
} satisfies Meta<typeof BoxIntroduce>;

export default meta;
type Story = StoryObj<typeof BoxIntroduce>;

export const Default: Story = {
    args: {
        icon: <LocalIcon iconName="ic_search_blue" width={"auto"} height={"auto"}/>,
        title: "Search",
        text: "Find your heart's desire by comparing prices from thousands of shops in one place"
      },
};
