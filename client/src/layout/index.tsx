import { Outlet } from "react-router-dom";

import Navbar from "./navbar";

const index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};
export default index;
