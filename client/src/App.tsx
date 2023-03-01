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
      <div className="container mx-auto py-8 px-2 flex">
        <ul className="space-y-2 text-sm pr-10">
          {categories.map((item, idx) => (
            <li
              key={idx}
              className="py-2 px-4 hover:bg-zinc-100 group cursor-pointer rounded-3xl w-48"
            >
              <span className="px-1 mr-2 rounded-3xl bg-zinc-100 group-hover:bg-blue-500 group-hover:py-1 transition-all duration-200 group-hover:text-blue-500" />
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
