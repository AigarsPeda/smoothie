export type ShipmentAmountType = 15 | 30 | 60;

export type ShipmentOptionType = {
  id: number;
  pack: ShipmentAmountType;
  pricePerSmoothie: number;
};

export type OrderType = {
  id: number;
  name: string;
  amount: number;
};

export type SmoothieType = {
  id: number;
  name: string;
  imgSrc: string;
  ingredients: string[];
};
