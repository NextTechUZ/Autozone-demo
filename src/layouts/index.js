import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Catalogs from "../pages/Catalogs";
import { routes } from "../pages/routeConfig";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function AppLayout() {
  return (
    <>
    <Navbar/>
    <Routes>
      {routes.map(({ id, ...rest }) => (
          <Route key={id} {...rest} />
          ))}
    </Routes>
    <Footer/>
          </>
  );
}

export default AppLayout;
