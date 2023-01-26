import type { FC } from "react";

interface SmoothieCountProps {
  amount: number;
  handleAdd: () => void;
  handleRemove: () => void;
}

const SmoothieCount: FC<SmoothieCountProps> = ({
  amount,
  handleAdd,
  handleRemove,
}) => {
  return (
    <div className="flex max-w-[300px] items-center justify-between rounded-md bg-slate-500 py-2 px-4">
      <p className="mr-2 text-sm font-semibold text-white">Amount</p>
      <p className="text-white">{amount}</p>

      <div>
        <button
          onClick={handleAdd}
          className="ml-2 h-8 w-8 rounded-full border-2 border-green-300 text-white"
        >
          +
        </button>
        <button
          onClick={handleRemove}
          className="ml-2 h-8 w-8 rounded-full border-2 border-red-300 text-white"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default SmoothieCount;
