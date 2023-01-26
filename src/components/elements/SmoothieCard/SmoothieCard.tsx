import type { FC } from "react";
import Image from "next/image";

interface SmoothieCardProps {
  alt: string;
  imgSrc: string;
  ingredients: string[];
}

const myLoader = ({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) => {
  return `https://images.unsplash.com/${src}?w=${width}&q=${quality || 75}`;
};

const SmoothieCard: FC<SmoothieCardProps> = ({ alt, imgSrc, ingredients }) => {
  return (
    <div className="mb-5 ">
      <Image
        alt={alt}
        width={500}
        height={500}
        src={imgSrc}
        loader={myLoader}
        className="transform transition duration-300 ease-out hover:scale-105"
        style={{
          objectFit: "fill",
          maxWidth: "300px",
          maxHeight: "300px",
          borderRadius: "10px",
        }}
      />

      <div className="mt-2 flex space-x-2 text-white">
        {ingredients.map((ingredient, i) => {
          return (
            <p key={i} className="text-xs text-gray-200">
              {ingredient}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default SmoothieCard;
