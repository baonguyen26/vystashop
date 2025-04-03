import { forwardRef } from "react";
import { checkboxItemProps } from "./checkbox";
import { cn } from "src/utils/cn";

export type InputProps = {
    items: checkboxItemProps[];
    className?: string;
    onChange?: (filteredItems: checkboxItemProps[]) => void;
  } & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">;
  

export const InputSearchLocal = forwardRef<HTMLInputElement, InputProps>(
  function InputSearchLocal(
    { items, 
    className, 
    onChange = () => {},
    ...props 
    }: InputProps,
    ref
  ) {
    const searchItemHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      const searchValue = event.target.value.toLowerCase();
      const filteredItems = items.filter((item) =>
        item.name?.toLowerCase().includes(searchValue)
      );
      onChange(filteredItems);
    };

    return (
      <input
        className={cn(className, "rounded-[6px] border-[1px] max-[800px]:w-full border-gray-300")}
        ref={ref}
        onChange={searchItemHandler}
        {...props}
      />
    );
  }
);
