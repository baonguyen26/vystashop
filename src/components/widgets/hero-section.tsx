import { LocalIcon } from "src/assets/local-icon";
import { BoxIntroduce, InputSearch } from "../ui";
import { boxIntroduceItems } from "src/constants/box-intro";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const navigate = useNavigate();

  const handleSearch = (value: string) => {
    if (!value) return;
    navigate("/results", { state: { searchValue: value } }); 
  };

  return (
    <section className="relative flex flex-col justify-center items-center self-stretch py-[60px] px-[166px] bg-[#212225]">
      <div className="bg-[#02A2EA] opacity-[0.4] blur-[250px] w-[824px] h-[655px] absolute left-[287px] bottom-[-3.2px] rounded-[999px]" />
      <div className="z-[2] flex flex-col items-center gap-[60px]">
        <div className="flex flex-col items-center gap-[50px] w-[1108px]">
          <div className="flex flex-col items-center gap-[50px] w-[825px]">
            <div className="flex justify-center items-center gap-[10px] w-fit px-[20px] py-[2px] rounded-[50px] bg-white/20">
              <LocalIcon iconName="ic_dot_green" width={"auto"} height={"auto"} />
              <span className="text-[16px] text-white font-[400] leading-[33.6px]">
                Become a Founding Advisor to Icon & Save 60% (4 Spots Left)
              </span>
            </div>
            <span className="text-[50px] text-white font-[800] leading-[55px] tracking-[-2px] text-center">
              Find your favourite brands easily in over 4,500 shops
            </span>
            <span className="w-[676px] text-[18px] text-white font-[400] leading-[24px] text-center">
              There’s a reason why the 7 & 8 figure brands that
              <span className="text-[#00A1EA] font-[700]"> YOU KNOW </span>
              are coming to
              <span className="text-[#00A1EA] font-[700]"> Vysta </span>
              for Google & Youtube Ads…
            </span>
          </div>
          <InputSearch onClickHandler={handleSearch} />
        </div>
        <div className="flex items-start gap-[50px]">
          {boxIntroduceItems.map((item, index) => (
            <BoxIntroduce key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
