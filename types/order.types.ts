export type ShipmentAmountType = 15 | 30 | 60;

export type ShipmentOptionType = {
  id: number;
  pack: ShipmentAmountType;
  pricePerSmoothie: number;
};

export type OrderType = {
  name: string;
  amount: number;
  ingredients: string[];
};
