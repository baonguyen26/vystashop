import { Link } from "react-router-dom";
import { LocalIcon } from "src/assets/local-icon";
import {
  FIRST_COLUMN_CONTENT,
  LOGO_FOOTER_CONTENT,
  SECOND_COLUMN_CONTENT,
} from "src/constants/footer-content";

export const AppFooter = () => {
  return (
    <footer>
      <div className="py-13 px-[20px] md:px-[60px] lg:px-[100px] flex flex-col md:flex-row lg:flex-row justify-between">
        <div className="flex flex-col gap-5 md:flex-row lg:flex-row md:gap-20">
          <div className="flex flex-col gap-4">
            <p className="font-medium">Vysta</p>
            {FIRST_COLUMN_CONTENT.map((item, index) => (
              <div className="pl-4 md:pl-0">
                <Link
                  to={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm"
                  key={index}
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-medium">Vysta Business</p>
            {SECOND_COLUMN_CONTENT.map((item, index) => (
              <div className="pl-4 md:pl-0">
                <Link
                  to={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm"
                  key={index}
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col pt-10 md:pt-0 items-center gap-5">
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
            to="https://www.google.com/"
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
        <p className="text-xs text-center text-[##3A4B55]">
          Copyright © 2020-2025 -Vysta. -
          <Link
            to="https://www.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Privacy Policy
          </Link>{" "}
          -
          <Link
            to="https://www.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Terms and Conditions
          </Link>
        </p>
      </div>
    </footer>
  );
};
