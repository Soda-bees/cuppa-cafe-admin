import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../../Layout";
import Menu from "../../Screen/Menu";
import Home from "../../Screen/Home";
import Offer from "../../Screen/Offers";
import Events from "../../Screen/Events";
import Setting from "../../Screen/Setting";

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
      {
        index: true,
        path: "/offer",
        element: <Offer />,
      },
      {
        index: true,
        path: "/event",
        element: <Events />,
      },
      {
        index: true,
        path: "/setting",
        element: <Setting />,

      },
    ],
  },
]);

const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
