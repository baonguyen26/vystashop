import { AppFooter } from "src/components/layouts/app-layout/app-footer";
import { PopularBrands } from "src/components/ui/brands/popular-brands";

export const Test = () => {
  return (
    <div className="flex gap-4 flex-col px-25 py-12">
      <PopularBrands />
      <AppFooter />
    </div>
  );
};
