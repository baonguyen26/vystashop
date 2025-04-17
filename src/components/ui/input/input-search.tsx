import { forwardRef, useRef } from "react";
import { LocalIcon } from "src/assets/local-icon";
import { QUERY_KEY } from "src/constants/query-key";
import { useSearchParamsFilter } from "src/hooks";

type InputSearchProps = {
  className?: string;
  placeholder?: string;
  onClickHandler?: (value: string) => void;
};


export const InputSearch = forwardRef<HTMLInputElement, InputSearchProps>(
  function InputSearch(
    { className, placeholder = "Search", onClickHandler, ...props },
    ref
  ) {
    const inputRef = useRef<HTMLInputElement>(null);
    const {getValueAsString} = useSearchParamsFilter(QUERY_KEY.TITLE);

    const handleClick = () => {
      const value = inputRef.current?.value.trim();
      if (!value) return;
      onClickHandler?.(value);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        event.preventDefault();
        handleClick();
      }
    };
    
    if (inputRef.current) {
      inputRef.current.value = getValueAsString() || "";
    }

    return (
      <div
        ref={ref}
        className={`flex justify-between items-center max-[1110px]:w-full min-[1110px]:w-[40%] h-[54px] px-[20px] bg-white rounded-[9999px] border-1 border-black/15 ${className}`}
      >
        <input
          className="h-full outline-none focus:ring-0 focus:border-transparent"
          ref={inputRef}
          placeholder={placeholder}
          onKeyDown={handleKeyDown}
          {...props}
        />
        <button onClick={handleClick}>
          <LocalIcon iconName="ic_search_black" />
        </button>
      </div>
    );
  }
);