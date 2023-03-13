import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./layout";
import Root from "./layout/navbar/Root";
import Category from "./pages/category";
import Home from "./pages/home";
import Product from "./pages/product";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Root />,
          children: [
            {
              index: true,
              element: <Home />,
            },
            {
              path: "category/:id",
              element: <Category />,
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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
