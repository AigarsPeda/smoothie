import type { FC } from "react";
import type { ShipmentAmountType } from "../../../../types/order.types";

interface CheckoutButtonProps {
  isLoading: boolean;
  totalSelectedSmoothiesInOrder: number;
  handleCheckout: () => Promise<void>;
  selectedShipmentAmount: ShipmentAmountType;
}

const CheckoutButton: FC<CheckoutButtonProps> = ({
  isLoading,
  handleCheckout,
  totalSelectedSmoothiesInOrder,
  selectedShipmentAmount,
}) => {
  if (selectedShipmentAmount < totalSelectedSmoothiesInOrder) {
    return (
      <p className="rounded-md bg-slate-100 py-2 px-4 text-sm font-semibold text-slate-500">
        Increase shipment amount or remove{" "}
        {(selectedShipmentAmount - totalSelectedSmoothiesInOrder) * -1}{" "}
        smoothies
      </p>
    );
  }

  if (selectedShipmentAmount > totalSelectedSmoothiesInOrder) {
    return (
      <p className="rounded-md bg-slate-100 py-2 px-4 text-sm font-semibold text-slate-500">
        Add {selectedShipmentAmount - totalSelectedSmoothiesInOrder} smoothies
      </p>
    );
  }

  if (isLoading) {
    return (
      <p className="rounded-md bg-slate-100 py-2 px-4 text-sm font-semibold text-slate-500">
        Loading...
      </p>
    );
  }

  return (
    <div className="w-full">
      <p className="mt-4 w-full text-base">
        Total:
        <span className="mx-2 text-2xl font-semibold">
          {totalSelectedSmoothiesInOrder}
        </span>
        smoothies
      </p>
      <button
        onClick={handleCheckout}
        className="mt-3 w-full rounded-md bg-slate-500 py-2 px-4 text-sm font-semibold text-white"
      >
        Checkout
      </button>
    </div>
  );
};

export default CheckoutButton;
