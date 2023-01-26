import type { ShipmentOptionType, SmoothieType } from "./types/order.types";

export const SMOOTHIES: SmoothieType[] = [
  {
    id: 1,
    name: "Strawberry Banana",
    ingredients: ["Strawberries", "Banana", "Milk", "Honey"],
    imgSrc:
      "photo-1615478503562-ec2d8aa0e24e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80&width=720",
  },
  {
    id: 2,
    name: "Peanut Butter Banana",
    ingredients: ["Peanut Butter", "Banana", "Milk", "Honey"],
    imgSrc:
      "photo-1584587727565-a486d45d58b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
  },
  {
    id: 3,
    name: "Blueberry Banana",
    ingredients: ["Blueberries", "Banana", "Milk", "Honey"],
    imgSrc:
      "photo-1592452319703-9a68b88dd26b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80&width=720",
  },
  {
    id: 4,
    name: "Pineapple Banana",
    ingredients: ["Pineapple", "Banana", "Milk", "Honey"],
    imgSrc:
      "photo-1621797350488-fb28c9217e3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80&width=720",
  },
  {
    id: 5,
    name: "Mango Banana",
    ingredients: ["Mango", "Banana", "Milk", "Honey"],
    imgSrc:
      "photo-1628557044797-f21a177c37ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 6,
    name: "Mango Banana2",
    ingredients: ["Mango", "Banana", "Milk", "Honey"],
    imgSrc:
      "photo-1628557044797-f21a177c37ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 7,
    name: "Mango Banana3",
    ingredients: ["Mango", "Banana", "Milk", "Honey"],
    imgSrc:
      "photo-1628557044797-f21a177c37ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
];

export const SHIPMENT_OPTIONS: ShipmentOptionType[] = [
  {
    id: 1,
    pack: 15,
    pricePerSmoothie: 2.99,
  },
  {
    id: 2,
    pack: 30,
    pricePerSmoothie: 2.49,
  },
  {
    id: 3,
    pack: 60,
    pricePerSmoothie: 1.99,
  },
];
