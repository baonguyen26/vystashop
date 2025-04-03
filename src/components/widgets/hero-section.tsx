import { LocalIcon } from "src/assets/local-icon";
import { BoxIntroduce, InputSearch } from "../ui";
import { boxIntroduceItems } from "src/constants/box-intro";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const navigate = useNavigate();

  const handleSearch = (value: string) => {
    if (!value) return;
    navigate("/results?title=" + value);
  };

  return (
    <section className="relative flex flex-col items-center justify-center self-stretch bg-[#212225] px-[160px] py-[60px]">
      <div className="absolute bottom-[-3.2px] w-screen h-[655px] md:w-[824px] rounded-[999px] bg-[#02A2EA] blur-[250px] opacity-[0.4]" />
      <div className="z-[2] flex flex-col items-center gap-[60px]">
        <div className="flex w-screen flex-col items-center gap-[50px] lg:w-full">
          <div className="hidden sm:flex w-screen flex-col items-center gap-[50px] lg:w-[825px]">
            <div className="flex w-[95%] items-center justify-center gap-5 rounded-[50px] bg-white/20 px-[20px] py-[2px] sm:w-fit sm:gap-[10px]">
              <LocalIcon
                iconName="ic_dot_green"
                width={"auto"}
                height={"auto"}
              />
              <span className="text-[16px] font-[400] leading-[25px] sm:leading-[33.6px] text-white">
                Become a Founding Advisor to Icon & Save 60% (4 Spots Left)
              </span>
            </div>
            <span className="w-screen px-4 text-left text-[40px] font-[800] leading-[55px] tracking-[-2px] text-white sm:w-full lg:w-[825px] lg:px-0 lg:text-[50px] lg:text-center">
              Find your favourite brands easily in over 4,500 shops
            </span>
            <span className="w-screen px-4 lg:px-0 text-left text-[18px] font-[400] leading-[24px] text-white sm:w-full lg:text-center">
              There's a reason why the 7 & 8 figure brands that
              <span className="font-[700] text-[#00A1EA]"> YOU KNOW </span>
              are coming to
              <span className="font-[700] text-[#00A1EA]"> Vysta </span>
              for Google & Youtube Ads…
            </span>
          </div>
          <div className="flex justify-center w-full max-[640px]:px-2 max-[640px]:mt-[-50px]">
            <InputSearch
              className="max-[640px]:rounded-[8px] sm:w-[586px]"
              onClickHandler={handleSearch}
            />
          </div>
        </div>
        <div className="grid gap-[20px] sm:gap-[40px] lg:gap-[50px] sm:grid-cols-2 lg:grid-cols-3 place-items-center">
          {boxIntroduceItems.map((item, index) => (
            <BoxIntroduce
              key={index}
              {...item}
              className={
                index === 2
                  ? "sm:col-span-2 sm:justify-self-center lg:col-span-1"
                  : ""
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};
