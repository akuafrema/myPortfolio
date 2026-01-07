import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="shadow-sm fixed py-4 px-6 flex justify-between items-center">
      {/* <div className="text-2xl font-bold ">
        Emmanuela / <span className="text-xs">Front-End developer</span><span className="text-pink-800"></span>
      </div> */}

      <div className="flex space-x-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-gray-300 font-bold "
              : " text-gray-300 transition-all duration-300 hover:scale-115"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-gray-300 font-bold"
              : "text-gray-300  transition-all duration-300 hover:scale-115"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-gray-300 font-bold"
              : "text-gray-300 transition-all duration-300 hover:scale-115"
          }
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
