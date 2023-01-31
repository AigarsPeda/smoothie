import type { FC } from "react";
import type {
  OrderType,
  ShipmentAmountType,
} from "../../../../types/order.types";
import CheckoutButton from "../CheckoutButton/CheckoutButton";

interface CheckoutCartProps {
  order: OrderType[];
  isLoading: boolean;
  error: string | null;
  success: string | null;
  totalSelectedSmoothiesInOrder: number;
  handleCheckout: () => Promise<void>;
  selectedShipmentAmount: ShipmentAmountType;
}

const CheckoutCart: FC<CheckoutCartProps> = ({
  order,
  error,
  success,
  isLoading,
  handleCheckout,
  totalSelectedSmoothiesInOrder,
  selectedShipmentAmount,
}) => {
  return (
    <div className=" flex min-h-[340px] w-60 flex-col items-center justify-center rounded-md bg-slate-100 py-4">
      {success ? (
        <p className="mt-2 text-sm font-semibold text-green-500">{success}</p>
      ) : (
        <>
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
          <div>
            <CheckoutButton
              isLoading={isLoading}
              handleCheckout={handleCheckout}
              totalSelectedSmoothiesInOrder={totalSelectedSmoothiesInOrder}
              selectedShipmentAmount={selectedShipmentAmount}
            />
          </div>
        </>
      )}
      {error && (
        <p className="mt-2 text-sm font-semibold text-red-500">{error}</p>
      )}
    </div>
  );
};

export default CheckoutCart;
