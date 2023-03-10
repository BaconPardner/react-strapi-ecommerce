import { Link } from "react-router-dom";

const categories = [
  { link: "cpus", name: "CPUs" },
  { link: "memory-cards", name: "Memory Cards" },
  { link: "motherboards", name: "Motherboards" },
  { link: "gpus", name: "GPUs" },
  { link: "cases", name: "Computer Cases" },
  { link: "psu", name: "Power Supplies" },
  { link: "fans", name: "Fans & Cooling" },
  { link: "misc", name: "Miscellaneous" },
];

const Sidebar = () => {
  return (
    <ul className="pr-10 text-sm">
      {categories.map(({ link, name }, idx) => (
        <Link key={idx} to={`/category/${link}`}>
          <li className="group my-1 w-48 cursor-pointer rounded-3xl py-2 px-4 hover:bg-zinc-100">
            <span className="mr-2 rounded-3xl bg-zinc-100 px-1 transition-all duration-200 group-hover:bg-blue-500 group-hover:py-1 group-hover:text-blue-500" />
            {name}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default Sidebar;
