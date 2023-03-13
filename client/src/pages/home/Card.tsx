import { Link } from "react-router-dom";

import { handleLogo } from "./Logos";
import Reviews from "./Reviews";

type CardProps = {
  title: string;
  price: number;
  originalPrice?: number;
  brand: string;
  shippingCost?: number;
};

const Card = ({
  title,
  price,
  originalPrice,
  brand,
  shippingCost,
}: CardProps) => {
  return (
    <article className="w-60 border">
      <Link to={"product/1"}>
        <header className="bg-zinc-200 py-20"></header>
      </Link>
      <main className="p-4">
        {handleLogo(brand)}
        <Reviews />
        <p className="max-h-10 overflow-hidden text-ellipsis text-sm font-semibold line-clamp-2 hover:text-blue-500">
          <Link to={"product/1"}>{title}</Link>
        </p>
        <div className="flex gap-1">
          <p className="text-2xl">
            $<strong>{price}</strong>
          </p>
          {originalPrice && (
            <p className="text-sm text-gray-400 line-through">
              $<strong>{originalPrice}</strong>
            </p>
          )}
        </div>
        <p className="text-xs text-gray-800">
          {shippingCost ? `$${shippingCost} Shipping` : "Free Shipping"}
        </p>
      </main>
    </article>
  );
};

export default Card;
