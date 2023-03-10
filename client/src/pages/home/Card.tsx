import { Link } from "react-router-dom";

type CardProps = {
  title: string;
  price: number;
};

const Card = ({ title, price }: CardProps) => {
  return (
    <Link to={"product/1"}>
      <article className="w-60 border">
        <header className="bg-zinc-200 py-20"></header>
        <main className="p-4">
          <p className="max-h-10 overflow-hidden text-ellipsis text-sm line-clamp-2">
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
