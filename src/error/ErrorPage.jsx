import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import error from "../assets/error-404.png";
import { NavLink, useNavigate } from "react-router";
import { IoMdArrowRoundBack } from "react-icons/io";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      <div className="flex-1 flex flex-col justify-center items-center p-10">
        <img src={error} alt="" />
        <h2 className="text-4xl mt-10">Oops, Page not found!</h2>
        <p className="text-sm text-gray-400 mt-2">
          The page you are looking for is not available.
        </p>

        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 bg-gradent text-white px-3 py-2 rounded-sm shadow-2xl mt-4 cursor-pointer"
        >
          {" "}
          <IoMdArrowRoundBack />
          Go Back!
        </button>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
