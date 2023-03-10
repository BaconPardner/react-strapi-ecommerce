import { Outlet } from "react-router-dom";

import Sidebar from "../Sidebar";

const Root = () => {
  return (
    <div className="container mx-auto flex py-8 px-2">
      <Sidebar />
      <Outlet />
    </div>
  );
};
export default Root;
