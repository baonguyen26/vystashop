export type BoxIntroduceProps = {
    icon: React.ReactNode;
    title: string;
    text: string;
};

export const BoxIntroduce = ({icon, title, text}:BoxIntroduceProps) => {
    return (
        <div className="flex flex-col w-[300px] px-[24px] py-[20px] 
        items-start gap-[10px] rounded-[16px] border-[0.3px]
          border-[rgba(0,0,0,0.15)] bg-white/10">
            <div className="flex justify-center items-center gap-[16px]
            text-white text-[25px] font-[600] leading-[28.8px]
            ">
                {icon && icon}
                {title && <h3>{title}</h3>}
            </div>
            <div className="text-white text-[15.25px] font-[500] leading-[24px]">
                {text && <p>{text}</p>}
            </div>
        </div>
    )
};
