import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

function Template() {
  return (
    <div className="w-full bg-gray-900">
      <Header />
      <div className="px-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Template;
