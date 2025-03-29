import { ProductsRouter } from "./products-page";

const meta = {
    component: ProductsRouter
} satisfies Meta<typeof ProductsRouter>;

export default meta;

type Story = StoryObj<typeof ProductsRouter>

export const Default: Story = {};
