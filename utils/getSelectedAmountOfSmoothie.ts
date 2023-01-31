import type { OrderType, SmoothieType } from "../types/order.types";

const getSelectedAmountOfSmoothie = (
  smoothie: SmoothieType,
  order: OrderType[]
) => {
  const smoothieAmount = order.find(
    (smoothieOrder) => smoothieOrder.id === smoothie.id
  );
  return smoothieAmount ? smoothieAmount.amount : 0;
};

export default getSelectedAmountOfSmoothie;
