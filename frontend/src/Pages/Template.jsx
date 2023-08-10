import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

function Template() {
  return (
    <div className="w-full bg-black">
      <Header />
      <div className="px-4 bg-gray-900">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Template;
