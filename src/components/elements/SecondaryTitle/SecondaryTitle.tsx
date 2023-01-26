import type { FC } from "react";

interface SecondaryTitleProps {
  text: string;
}

const SecondaryTitle: FC<SecondaryTitleProps> = ({ text }) => {
  return <p className="text-sm font-medium text-gray-100">{text}</p>;
};

export default SecondaryTitle;
