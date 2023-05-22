import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div
      id="home"
      className="bg-gradient-to-r from-gray-100 via-gray-200 to-slate-300"
    >
      <div className="py-3 navbar flex justify-between container mx-auto p-0">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
            <li>
              <a href="#home">Home</a>
            </li>

            <li>
              <a href="#product">Product</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#team">Our Team</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            </ul>
          </div>
          <div className="flex justify-between items-center min-w-[300px]">
            <a className="">
              <img className="max-w-[65px]" src={logo} alt="" />
            </a>
            <div className="pl-2">
              <h2 className="text-lg md:text-2xl font-bold mb-2">
                Sreepur Unani Dawakhana
              </h2>
              <p className="text-sm">শ্রীপুর ইউনানী দাওয়াখানা</p>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal text-md font-semibold">
            <li>
              <a href="#home">Home</a>
            </li>

            <li>
              <a href="#product">Product</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#team">Our Team</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
