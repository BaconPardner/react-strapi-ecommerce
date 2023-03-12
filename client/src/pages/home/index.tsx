import Card from "./Card";

const products = [
  { brand: "AMD", title: "AMD Ryzen 9 5950X", price: 499 },
  { brand: "Intel", title: "Intel Core i9 13900K", price: 579 },
  { brand: "AMD", title: "AMD Radeon RX 7900 XT", price: 799 },
  { brand: "Nvidia", title: "NVIDIA RTX 4090 Ti", price: 1699 },
  { brand: "Nvidia", title: "NVIDIA RTX 4080", price: 1299 },
  { brand: "Nvidia", title: "NVIDIA RTX 4080", price: 1299 },
];

const index = () => {
  return (
    <div className="grow">
      <header className="rounded-3xl border bg-gray-100 py-40 text-center uppercase text-gray-500">
        Build PC
      </header>
      <h1 className="flex py-5 text-2xl font-bold">Most Popular Products</h1>
      <section className="flex flex-wrap justify-between gap-y-5">
        {products.map((item, idx) => (
          <Card key={idx} {...item} />
        ))}
      </section>
    </div>
  );
};

export default index;
