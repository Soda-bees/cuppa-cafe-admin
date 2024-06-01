import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu from "../../Screen/Menu";
import dashboard from "../../Screen/Dashboard";
import SignUp from "../../Screen/SignUp";
import AdminLogIn from "../../Screen/AdminLogIn";
import SetUpOutlet from "../../Screen/SetUpOutlet";
import ProtectedRoute from "./protectedRouting";
import Offer from "../../Screen/Offers";
import Events from "../../Screen/Events";
import Setting from "../../Screen/Setting";
import Layout from "../../Screen/Layout";
import AddItem from "../../Screen/Additem";
import OfferDetails from "../../Screen/OfferDetails";
import EventDetails from "../../Screen/EventDetails";
import ItemDetails from "../../Screen/ItemDetails";
import Rewards from "../../Screen/Rewards"
import RewardDetail from "../../Screen/RewardDetails";
import Dashboard from "../../Screen/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ProtectedRoute Compunent={dashboard} />,
      },
      {
        path: "/menu",
        element: <Menu/>,
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
        element: <SetUpOutlet/>,
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
      {
        path: "/itemdetails",
        element: <ItemDetails/>,
      },
      {
        path: "/rewards",
        element: <Rewards/>,
      },
      {
        path: "/rewardsDetails",
        element: <RewardDetail/>,
      },
    ],
  },
]);

const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
