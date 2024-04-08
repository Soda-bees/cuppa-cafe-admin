import React, { useState, createContext, useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import SideNav from "../Component/SideNav";


const ModalContext = createContext();

const Layout = () => {

  return (
    <>
        <ModalContext.Provider> 
          <SideNav
            useModal={useModal}
          />
          <Outlet/>
        </ModalContext.Provider>
    </>
  );
};

const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

export { useModal, Layout as default };
