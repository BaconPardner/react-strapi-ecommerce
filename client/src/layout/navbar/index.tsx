import CartIcon from "./CartIcon";
import SearchIcon from "./SearchIcon";

const index = () => {
  return (
    <nav className="sticky top-0 border-b-4 border-blue-500 bg-zinc-100">
      <div className="container mx-auto flex items-center justify-between py-2 px-8">
        <p className="font-bold text-blue-500">PC parts</p>
        <div className="ml-32 mr-5 flex grow rounded-3xl bg-gradient-to-r from-purple-100 to-sky-100">
          <button
            className="mr-4 rounded-3xl bg-blue-500 px-5 py-2 text-white transition-all ease-in-out hover:bg-blue-600 hover:px-8 active:scale-105"
            type="button"
            title="Search"
          >
            <SearchIcon />
          </button>
          <input
            className="grow bg-transparent py-2"
            type="text"
            placeholder="Search"
          />
        </div>
        <button type="button" title="Cart">
          <CartIcon />
        </button>
      </div>
    </nav>
  );
};

export default index;
