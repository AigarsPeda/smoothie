import type { FC } from "react";
import type { OrderType } from "../../../../types/order.types";

interface CheckoutCartProps {
  order: OrderType[];
}

const CheckoutCart: FC<CheckoutCartProps> = ({ order }) => {
  return (
    <div className="flex h-full w-60 flex-col items-center justify-center rounded-md bg-slate-100 py-4">
      <h1 className="text-2xl font-bold">Your order:</h1>
      <div className="mt-2 flex w-full flex-col items-center justify-center px-4">
        {order.map((smoothie) => {
          return (
            <div key={smoothie.name} className="flex w-full items-center">
              <p className="text-xm flex w-full justify-between font-semibold">
                <span>{smoothie.name}</span>
                <span>
                  <span className="mr-1">x</span>
                  {smoothie.amount}
                </span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CheckoutCart;
