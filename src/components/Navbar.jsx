import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
import { RiHome4Line } from "react-icons/ri";
import { FaAppStore, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="shadow-sm">
      <div className="w-11/12 mx-auto navbar px-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <Link to='/'><li>Home</li></Link>
              <Link to='/apps'><li> Apps</li></Link>
              <Link to='/installation'><li>Installation</li></Link>
            </ul>
          </div>
          <Link
            to="/"
            className="flex items-center text-xl font-bold text-[#632EE3] "
          >
            <img className="h-10" src={logo} alt="" />
            <p className="ml-1 text-gradiendt">HERO.IO</p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center p-2 border-b-2 transition-colors duration-200 ${
                  isActive
                    ? "border-[#632EE3]/60 text-[#632EE3]"
                    : "border-transparent text-gray-500 "
                }`
              }
            >
              <RiHome4Line size={20} />
              <p className="ml-2">Home</p>
            </NavLink>

            <NavLink
              to="/apps"
              className={({ isActive }) =>
                 `flex items-center p-2 border-b-2 transition-colors duration-200 ${
                  isActive
                    ? "border-[#632EE3]/60 text-[#632EE3]"
                    : "border-transparent text-gray-500 "
                }`
              }
            >
             
                <FaAppStore size={20} /> <p className="ml-2">Apps</p>
              
            </NavLink>
            <NavLink
              to="/installation"
              className={({ isActive }) =>
                `flex items-center p-2 border-b-2 transition-colors duration-200 ${
                  isActive
                    ? "border-[#632EE3]/60 text-[#632EE3]"
                    : "border-transparent text-gray-500 "
                }`
              }
            >
              
                <FaAppStore size={20} /> <p className="ml-2">Installation</p>
              
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <NavLink to={'https://github.com/Najmulkhan1'}> <button className='animate-pulse flex items-center cursor-pointer gap-2 bg-gradent text-white px-3 py-2 rounded-sm shadow-2xl font-semibold' > <FaGithub/>  Contribute</button> </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;