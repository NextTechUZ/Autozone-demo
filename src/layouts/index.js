import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "../pages/routeConfig";
import Footer from "./components/Footer/index.js";
import Navbar from "./components/Navbar/index.js";
import Loading_hom from "../components/Loading_hom";

function AppLayout() {
  return (
    <>
      <Loading_hom />
      <Navbar />
      <Routes>
        {routes.map(({ id, ...rest }) => (
          <Route key={id} {...rest} />
        ))}
      </Routes>
      <Footer />
    </>
  );
}

export default AppLayout;
