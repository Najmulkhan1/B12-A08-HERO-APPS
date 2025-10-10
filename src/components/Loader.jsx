import React from "react";
import logo from "../assets/logo.png";

const Loader = () => {
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="flex text-[100px] items-center font-bold animate-pulseText">
          L <img className="h-24 animate-spin" src={logo} alt="" /> ading
        </div>
      </div>
    </>
  );
};

export default Loader;


