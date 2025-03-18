import { PopularBrands } from "src/components/ui/brands/popular-brands";
import { HeroSection } from "src/components/widgets";

export const AppMain = () => {
    return (
        <main className="flex flex-col gap-[60px]]">
            <HeroSection />
            <PopularBrands/>
        </main>
    );
};
