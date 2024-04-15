import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu from "../../Screen/Menu";
import Home from "../../Screen/Home";
import SignUp from "../../Screen/SignUp";
import AdminLogIn from "../../Screen/AdminLogIn";
import SetUpOutlet from "../../Screen/SetUpOutlet";
import ProtectedRoute from "./protectedRouting";
import Offer from "../../Screen/Offers";
import Events from "../../Screen/Events";
import Setting from "../../Screen/Setting";
import Layout from "../../Screen/Layout";
import AddItem from "../../Additem";
import OfferDetails from "../../OfferDetails";
import EventDetails from "../../EventDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ProtectedRoute Compunent={Home} />,
      },
      {
        path: "/menu",
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
      {
        path: "/offer",
        element: <Offer />,
      },
      {
        path: "/event",
        element: <Events />,
      },
      {
        path: "/setting",
        element: <Setting />,
      },
      {
        path: "/AddItem",
        element: <AddItem />,
      },
      {
        path: "/createoffer",
        element: <OfferDetails/>,
      },
      {
        path: "/eventdetails",
        element: <EventDetails/>,
      },
    ],
  },
]);

const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
