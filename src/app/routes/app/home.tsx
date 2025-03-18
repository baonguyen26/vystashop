import { AppFooter } from "src/components/layouts/app-layout/app-footer";
import { AppHeader } from "src/components/layouts/app-layout/app-header";
import { AppMain } from "src/components/layouts/app-layout/app-main";
import { HomePage } from "./HomePage";

export const HomeRouter = () => {
  return (
    <>
      <AppHeader />
      <AppMain />
      <HomePage />
      <AppFooter />
    </>
  );
};
