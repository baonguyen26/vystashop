import { LocalIcon } from "src/assets/local-icon";
import { FIRST_COLUMN_CONTENT, LOGO_FOOTER, SECOND_COLUMN_CONTENT } from "src/constants/footer-content";

export const AppFooter = () => {
  return (
    <footer>
      <div className="py-13 px-[100px] flex justify-between">
        <div className="flex gap-20">
          <div className="flex flex-col gap-4">
            <p className="font-medium">Vysta</p>
            {FIRST_COLUMN_CONTENT.map((item) => (
              <p className="text-sm">{item.title}</p>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-medium">Vysta Business</p>
            {SECOND_COLUMN_CONTENT.map((item) => (
              <p className="text-sm">{item.title}</p>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-5">
          <div className="flex gap-4">
            {LOGO_FOOTER.map((item) => (
              <LocalIcon iconName={item} />
            ))}
          </div>
          <LocalIcon
            iconName="google"
            width={68}
            height={70}
          />
        </div>
      </div>
      <div>
        <p className="text-center text-[##3A4B55]">
          Copyright © 2020-2025 -Vysta. -
          <span className="underline">Privacy Policy</span> -
          <span className="underline">Terms and Conditions</span>
        </p>
      </div>
    </footer>
  );
};
