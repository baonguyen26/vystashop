import { cva } from "class-variance-authority";
import { cn } from "src/utils/cn";

const checkboxVariants = cva("flex items-center space-x-2", {
  variants: {
    variant: {
      checked: "",
      unchecked: "",
    },
  },
  defaultVariants: {
    variant: "unchecked",
  },
});

export type checkboxItemProps = {
    value: string | null;
    name: string | null;
}

export type checkboxProps = {
  value: string;
  name: string;
  onChange: (item: checkboxItemProps) => void;
  checked?: boolean;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">; 


export const CheckBox = ({
  value,
  name,
  onChange,
  checked,
}: checkboxProps) => {
  return (
    <div className={cn(checkboxVariants({ variant: checked ? "checked" : "unchecked" }), "py-[7px]")}>
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          className="w-4 h-4"
          value={value}
          checked={checked}
          onChange={() => { 
            onChange(checked ? { value: null, name: null } : { value, name });
          }}
        />
        <span className="text-[14px] font-[300]">{name}</span>
      </label>
    </div>
  );
};

