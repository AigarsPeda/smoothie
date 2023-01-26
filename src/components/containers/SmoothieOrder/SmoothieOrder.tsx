import type { FC } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { SHIPMENT_OPTIONS, SMOOTHIES } from "../../../../hardcoded";
import type {
  OrderType,
  ShipmentAmountType,
} from "../../../../types/order.types";
import CheckoutCart from "../../elements/CheckoutCart/CheckoutCart";
import OptionButton from "../../elements/OptionButton/OptionButton";
import SecondaryTitle from "../../elements/SecondaryTitle/SecondaryTitle";
import SmoothieCard from "../../elements/SmoothieCard/SmoothieCard";
import SmoothieCount from "../../elements/SmoothieCount/SmoothieCount";
import MainLayout from "../../layouts/MainLayout/MainLayout";

const SmoothieOrder: FC = () => {
  const [order, setOrder] = useState<OrderType[]>([]);
  const [selectedShipmentAmount, setSelectedShipmentAmount] =
    useState<ShipmentAmountType>(15);

  const findNextNumber = (num: number) => {
    while (num % 2 !== 0) {
      num++;
    }
    return num;
  };

  const findPreviousNumber = (num: number) => {
    return Math.floor(num);
  };

  const isDividableByTwo = (num: number) => {
    return num % 2 === 0;
  };

  const getSmoothieAmount = useCallback(
    (shipmentAmount: ShipmentAmountType) => {
      const isEven = isDividableByTwo(shipmentAmount % SMOOTHIES.length);

      return {
        count: isEven
          ? shipmentAmount % SMOOTHIES.length
          : findPreviousNumber(shipmentAmount % SMOOTHIES.length),
        remainderCount: !isEven
          ? findNextNumber(shipmentAmount % SMOOTHIES.length)
          : undefined,
      };
    },
    []
  );

  useEffect(() => {
    const newOrder: OrderType[] = [];
    const { count, remainderCount } = getSmoothieAmount(selectedShipmentAmount);

    for (let i = 0; i < SMOOTHIES.length; i++) {
      const smoothie = SMOOTHIES[i];

      // If remainderCount is defined, then we know that we have to add the remainderCount to the first smoothie
      const isRemainder = i === 0 && remainderCount;

      if (!smoothie) return;

      const smooth: OrderType = {
        name: smoothie.name,
        ingredients: smoothie.ingredients,
        amount: isRemainder ? remainderCount : count,
      };

      newOrder.push(smooth);
    }

    setOrder(newOrder);
  }, [getSmoothieAmount, selectedShipmentAmount]);

  return (
    <div className="relative">
      <h1 className="mb-10 text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
        Shop Your Monthly Smoothie Package
      </h1>
      <div className="mb-5 w-full text-left">
        <SecondaryTitle text="Choose monthly shipment amount:" />
      </div>
      {console.log("order", order)}
      <MainLayout>
        {SHIPMENT_OPTIONS.map((option) => {
          return (
            <OptionButton
              key={option.id}
              isSelected={option.pack === selectedShipmentAmount}
              handleClick={() => setSelectedShipmentAmount(option.pack)}
              text={`${option.pack} smoothies for $${option.pricePerSmoothie} each`}
            />
          );
        })}
      </MainLayout>
      <div className="mb-5 w-full text-left">
        <SecondaryTitle text="Choose package flavors:" />
      </div>
      <MainLayout>
        {SMOOTHIES.map((smoothie) => {
          return (
            <div key={smoothie.id}>
              <SmoothieCard
                alt={smoothie.name}
                imgSrc={smoothie.imgSrc}
                ingredients={smoothie.ingredients}
              />
              <SmoothieCount />
            </div>
          );
        })}
      </MainLayout>
      {order.length > 0 && (
        <div className="fixed right-5 top-1/2 -translate-y-1/2 transform">
          <CheckoutCart order={order} />
        </div>
      )}
    </div>
  );
};

export default SmoothieOrder;
