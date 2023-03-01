import CartIcon from "./CartIcon";
import SearchIcon from "./SearchIcon";

const index = () => {
  return (
    <nav className="border-b-4 border-blue-500 bg-zinc-100 sticky top-0">
      <div className="container mx-auto py-2 px-8 flex items-center justify-between">
        <p className="font-bold text-blue-500">PC parts</p>
        <div className="from-purple-100 flex bg-gradient-to-r to-sky-100 grow ml-32 mr-5 rounded-3xl">
          <button
            className="bg-blue-500 text-white px-5 py-2 rounded-3xl mr-4 hover:px-8 transition-all ease-in-out hover:bg-blue-600 active:scale-105"
            type="button"
            title="Search"
          >
            <SearchIcon />
          </button>
          <input
            className="py-2 grow bg-transparent"
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
