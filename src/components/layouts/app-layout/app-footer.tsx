import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { LocalIcon } from "src/assets/local-icon";
import {
  FIRST_COLUMN_CONTENT,
  LOGO_FOOTER_CONTENT,
  SECOND_COLUMN_CONTENT,
} from "src/constants/footer-content";

export const AppFooter = () => {
  const { t } = useTranslation();

  const getTranslatedKey = (title: string) => {
    return title.toLowerCase().replace(/\s+/g, "_");
  };

  return (
    <footer className="bg-gray-100 ">
      <div className="container-footer">
        <div className="w-[100%] py-5 md:py-13 flex flex-col justify-between px-[20px] md:px-[60px] md:flex-row lg:flex-row lg:px-[100px] max-w-[1440px] mx-auto">
          <div className="flex flex-col gap-5 md:flex-row lg:flex-row md:gap-20">
            <div className="flex flex-col gap-4">
              <p className="font-medium">Vysta</p>
              {FIRST_COLUMN_CONTENT.map((item, index) => (
                <div
                  className="pl-4 md:pl-0"
                  key={index}
                >
                  <Link
                    to={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm"
                  >
                    {t(getTranslatedKey(item.title))}
                  </Link>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <p className="font-medium">Vysta Business</p>
              {SECOND_COLUMN_CONTENT.map((item, index) => (
                <div
                  className="pl-4 md:pl-0"
                  key={index}
                >
                  <Link
                    to={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm"
                  >
                    {t(getTranslatedKey(item.title))}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col pt-10 md:pt-0 items-center gap-5">
            {/* <CountriesDropdown className="w-[230px] border-1 border-gray-400 bg-white" itemType="full" arrowType="black"/> */}
            <div className="flex gap-4">
              {LOGO_FOOTER_CONTENT.map((item, index) => (
                <Link
                  to={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                >
                  <LocalIcon
                    iconName={item.logo}
                    key={index}
                  />
                </Link>
              ))}
            </div>
            <Link
              to="https://growwithvysta.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LocalIcon
                iconName="google"
                width={68}
                height={70}
              />
            </Link>
          </div>
        </div>
        <div className="py-6 px-[20px] md:px-[60px]">
          <div className="flex flex-col text-xs text-center text-[##3A4B55]">
            <span>Copyright © 2020-2025</span>
            <span>Vysta.</span>
            <span>
              Hunt Ford & Co Accountants, Osborne House 143-145 Stanwell Road,
              Ashford, Middlesex, United Kingdom
            </span>
            <div>
              <Link
                to="https://growwithvysta.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                {t("privacy_policy")}
              </Link>{" "}
              -
              <Link
                to="https://growwithvysta.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                {t("terms_conditions")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
