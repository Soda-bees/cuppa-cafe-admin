import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../../Layout";
import Menu from "../../Screen/Menu";
import Home from "../../Screen/Home";
import SignUp from "../../Screen/SignUp";
import AdminLogIn from "../../Screen/AdminLogIn";
import SetUpOutlet from "../../Screen/SetUpOutlet";
import ProtectedRoute from "./protectedRouting";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        // element: <Home />,
        element: <ProtectedRoute Compunent={Home} />,
      },
      // {
      //   path: "/menu",
      //   element: <Menu />,
      // },
      {
        path: "/menu",
        // element: <Menu />,
        element: <ProtectedRoute Compunent={Menu} />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <AdminLogIn />,
      },
      {
        path: "/outlet",
        element: <SetUpOutlet />,
      },
    ],
  },
]);

const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
