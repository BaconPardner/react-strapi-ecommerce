import { Link } from "react-router-dom";

import { IntelLogo, AMDLogo } from "./Logos";

type CardProps = {
  title: string;
  price: number;
  brand: string;
};

const logoList = [
  { name: "AMD", logo: <AMDLogo /> },
  { name: "Intel", logo: <IntelLogo /> },
];

const handleLogo = (brandName: string) => {
  for (const { name, logo } of logoList) {
    if (name === brandName) return logo;
  }

  return "Unknown";
};

const Card = ({ title, price, brand }: CardProps) => {
  return (
    <Link to={"product/1"}>
      <article className="w-60 border">
        <header className="bg-zinc-200 py-20"></header>
        <main className="p-4">
          <p>{handleLogo(brand)}</p>
          <p className="max-h-10 overflow-hidden text-ellipsis text-sm font-semibold line-clamp-2">
            {title}
          </p>
          <p className="text-2xl">
            $<strong>{price}</strong>
          </p>
        </main>
      </article>
    </Link>
  );
};

export default Card;
