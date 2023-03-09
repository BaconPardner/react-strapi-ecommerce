import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Navbar from "./layout/navbar";
import Sidebar from "./layout/Sidebar";
import Home from "./pages/home";
import Product from "./pages/product";

const Root = () => {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto flex py-8 px-2">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    {
      path: "/product",
      children: [
        {
          path: ":id",
          element: <Product />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
