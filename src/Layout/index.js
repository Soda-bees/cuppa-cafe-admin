import React, { useState, createContext, useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import SideNav from "../Component/SideNav";
import AdminLogIn from "../Screen/AdminLogIn";
import { selectAuthToken } from "../store/authTokenSlice";
import { useSelector } from "react-redux";

const ModalContext = createContext();

const Layout = () => {
  const authToken = useSelector(selectAuthToken);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!authToken) {
  //     navigate("/login");
  //   } else {
  //     navigate("/menu");
  //   }
  // }, [authToken, navigate]);

  const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
      throw new Error("useModal must be used within a ModalProvider");
    }
    return context;
  };

  // if (!authToken) {
  //   return <AdminLogIn  />;
  // }

  return (
    <>
      <ModalContext.Provider value={useModal}>
        {authToken && <SideNav />}
        <Outlet />
      </ModalContext.Provider>
    </>
  );
};

export default Layout;
