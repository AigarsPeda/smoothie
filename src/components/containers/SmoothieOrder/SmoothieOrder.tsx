import type { FC } from "react";
import { useRef } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { SHIPMENT_OPTIONS, SMOOTHIES } from "../../../../hardcoded";
import useLoading from "../../../../hooks/useLoading";
import type {
  OrderType,
  ShipmentAmountType,
  SmoothieType,
} from "../../../../types/order.types";
import handlePost from "../../../../utils/handlePost.";
import CheckoutCart from "../../elements/CheckoutCart/CheckoutCart";
import OptionButton from "../../elements/OptionButton/OptionButton";
import SecondaryTitle from "../../elements/SecondaryTitle/SecondaryTitle";
import SmoothieCard from "../../elements/SmoothieCard/SmoothieCard";
import SmoothieCount from "../../elements/SmoothieCount/SmoothieCount";
import MainLayout from "../../layouts/MainLayout/MainLayout";

const SmoothieOrder: FC = () => {
  const isUpdateOrder = useRef(false);
  const [order, setOrder] = useState<OrderType[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const { isLoading, startLoading, stopLoading } = useLoading();
  const [totalSelectedSmoothies, setTotalSelectedSmoothies] = useState(0);
  const [selectedShipmentAmount, setSelectedShipmentAmount] =
    useState<ShipmentAmountType>(15);

  const getSmoothieAmount = useCallback(
    (shipmentAmount: ShipmentAmountType) => {
      const smoothiesPerChoice = Math.floor(shipmentAmount / SMOOTHIES.length);
      const remainder = shipmentAmount % SMOOTHIES.length;

      return {
        count: smoothiesPerChoice,
        remainderCount: remainder,
      };
    },
    []
  );

  const getAmountOfSmoothies = useCallback(
    (smoothie: SmoothieType) => {
      const smoothieAmount = order.find(
        (smoothieOrder) => smoothieOrder.id === smoothie.id
      );
      return smoothieAmount ? smoothieAmount.amount : 0;
    },
    [order]
  );

  const handleCheckout = async () => {
    startLoading();

    const payload = {
      order,
      totalSelectedSmoothies,
    };

    const res = await handlePost(payload);

    if (!res.ok) {
      setError("Something went wrong while placing your order.");
    }

    setSuccess("Your order has been placed!");
    stopLoading();
  };

  useEffect(() => {
    if (isUpdateOrder.current) return;

    const newOrder: OrderType[] = [];
    const { count, remainderCount } = getSmoothieAmount(selectedShipmentAmount);

    for (let i = 0; i < SMOOTHIES.length; i++) {
      const smoothie = SMOOTHIES[i];

      // If remainderCount is defined, then we know that we have to add the remainderCount to the first smoothie
      const isRemainder = i === 0 && remainderCount;

      if (!smoothie) return;

      const smooth: OrderType = {
        id: smoothie.id,
        name: smoothie.name,
        amount: isRemainder ? remainderCount + count : count,
      };

      newOrder.push(smooth);
    }

    setOrder(newOrder);
  }, [getSmoothieAmount, selectedShipmentAmount]);

  useEffect(() => {
    const total = order.reduce((acc, smoothie) => {
      return acc + smoothie.amount;
    }, 0);

    setTotalSelectedSmoothies(total);
  }, [order]);

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setSuccess(null);
        setSelectedShipmentAmount(15);
        isUpdateOrder.current = false;
      }, 3000);
    }
  }, [success]);

  return (
    <div className="relative">
      <h1 className="mb-10 text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
        Shop Your Monthly Smoothie Package
      </h1>
      <div className="mb-5 w-full text-left">
        <SecondaryTitle text="Choose monthly shipment amount:" />
      </div>
      <MainLayout>
        {SHIPMENT_OPTIONS.map((option) => {
          return (
            <OptionButton
              key={option.id}
              isSelected={option.pack === selectedShipmentAmount}
              handleClick={() => {
                // If order is changed to a lower amount, then we reset the order
                if (option.pack < selectedShipmentAmount) {
                  isUpdateOrder.current = false;
                  setOrder([]);
                }
                setSelectedShipmentAmount(option.pack);
              }}
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
              <SmoothieCount
                amount={getAmountOfSmoothies(smoothie)}
                handleAdd={() => {
                  isUpdateOrder.current = true;

                  const newOrder = [...order];
                  const smoothieOrder = newOrder.find(
                    (smoothieOrder) => smoothieOrder.id === smoothie.id
                  );
                  if (smoothieOrder) {
                    smoothieOrder.amount++;
                  }
                  setOrder(newOrder);
                }}
                handleRemove={() => {
                  isUpdateOrder.current = true;

                  const newOrder = [...order];
                  const smoothieOrder = newOrder.find(
                    (smoothieOrder) => smoothieOrder.id === smoothie.id
                  );
                  if (smoothieOrder && smoothieOrder.amount > 0) {
                    smoothieOrder.amount--;
                  }
                  setOrder(newOrder);
                }}
              />
            </div>
          );
        })}
      </MainLayout>
      {order.length > 0 && (
        <div className="fixed right-5 top-1/2 -translate-y-1/2 transform">
          <CheckoutCart
            order={order}
            error={error}
            success={success}
            isLoading={isLoading}
            handleCheckout={handleCheckout}
            selectedShipmentAmount={selectedShipmentAmount}
            totalSelectedSmoothies={totalSelectedSmoothies}
          />
        </div>
      )}
    </div>
  );
};

export default SmoothieOrder;
