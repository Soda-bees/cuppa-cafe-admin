import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../../Layout";
import Menu from "../../Screen/Menu";
import Home from "../../Screen/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        index: true,
        path: "/menu",
        element: <Menu />,
      },
    ],
  },
]);

const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
