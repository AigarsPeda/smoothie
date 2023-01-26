import type { FC } from "react";
import { classNames } from "../../../../utils/classNames";

interface OptionButtonProps {
  text: string;
  isSelected: boolean;
  handleClick: () => void;
}

const OptionButton: FC<OptionButtonProps> = ({
  text,
  isSelected,
  handleClick,
}) => {
  return (
    <button
      className={classNames(
        isSelected ? "border-2 border-slate-400 bg-[#3c027d]" : "",
        "flex w-full items-center justify-center rounded-md border border-transparent bg-[#3b028a] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[#3c027d] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#2e026d]"
      )}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default OptionButton;
