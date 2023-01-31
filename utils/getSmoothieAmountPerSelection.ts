import type { ShipmentAmountType, SmoothieType } from "../types/order.types";

const getSmoothieAmountPerSelection = (
  shipmentAmount: ShipmentAmountType,
  smoothieArray: SmoothieType[]
) => {
  const smoothiesPerChoice = Math.floor(shipmentAmount / smoothieArray.length);
  const remainderCount = shipmentAmount % smoothieArray.length;

  return {
    remainderCount,
    smoothiesPerChoice,
  };
};

export default getSmoothieAmountPerSelection;
