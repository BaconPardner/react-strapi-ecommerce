const index = () => {
  return (
    <div className="grow">
      <header className="rounded-3xl border bg-gray-100 py-40 text-center uppercase text-gray-500">
        Build PC
      </header>
      <h1 className="flex py-5 text-2xl font-bold">Most Popular Products</h1>
      <section className="flex">
        <article className="w-64">
          <header className="bg-zinc-200 py-20"></header>
          <main className="p-2">
            <p className="max-h-10 overflow-hidden text-ellipsis text-sm font-semibold line-clamp-2">
              AMD Ryzen 7 5700X - Ryzen 7 5000 Series 8-Core 3.4 GHz Socket AM4
              65W None Integrated Graphics Desktop Processor - 100-100000926WOF
            </p>

            <p className="text-2xl">
              $<strong>200</strong>
            </p>
          </main>
        </article>
      </section>
    </div>
  );
};

export default index;
