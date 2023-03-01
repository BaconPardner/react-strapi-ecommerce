import Home from "./components/home";
import Navbar from "./components/navbar";

const categories = [
  "CPU",
  "Memory",
  "Motherboards",
  "GPU",
  "Computer Case",
  "Power Supplies",
  "Fans & Cooling",
  "Miscellaneous",
];

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto flex py-8 px-2">
        <ul className="space-y-2 pr-10 text-sm">
          {categories.map((item, idx) => (
            <li
              key={idx}
              className="group w-48 cursor-pointer rounded-3xl py-2 px-4 hover:bg-zinc-100"
            >
              <span className="mr-2 rounded-3xl bg-zinc-100 px-1 transition-all duration-200 group-hover:bg-blue-500 group-hover:py-1 group-hover:text-blue-500" />
              {item}
            </li>
          ))}
        </ul>
        <Home />
      </div>
    </div>
  );
}

export default App;
