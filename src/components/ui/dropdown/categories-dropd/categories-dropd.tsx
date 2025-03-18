import { LocalIcon } from "src/assets/local-icon";

export const CategoriesDropdown = () => {
  return (
    <div　className="flex items-center gap-[16px] w-[143px] px-[15px] py-[10px] rounded-[46px] bg-[#00A1EA]">
        <LocalIcon iconName="ic_menu" width={"auto"} height={"auto"} />
        <span 
            className="text-[16px] text-white font-[400] leading-[24px] hover:cursor-pointer"
        >
            Categories
        </span>
    </div>
  )
}
