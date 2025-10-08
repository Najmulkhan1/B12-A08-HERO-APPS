import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      <div className=" flex-1 bg-[#F5F5F5]">
        <div className="">
          <Outlet></Outlet>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
