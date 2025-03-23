import {
  HeroSection,
  PopularBrands,
  TopProductSection,
} from "src/components/widgets";

export const AppMain = () => {
  return (
    <main className="flex flex-col gap-[40px] ms:gap-[60px]">
      <HeroSection />
      <PopularBrands />
      <TopProductSection />
    </main>
  );
};
