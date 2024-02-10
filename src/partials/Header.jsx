import React, { useState, useEffect } from "react";
import Logo from "/weatherLogo.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img src={Logo} alt="logo" className="w-6 h-6 m-1"/>
        <span className="font-semibold text-xl tracking-tight">Weather App</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Home
          </Link>
          <Link
            to="/recentsearch"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Recent Searches
          </Link>
        </div>

      </div>
    </nav>
  );
}
