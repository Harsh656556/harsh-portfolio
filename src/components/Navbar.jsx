import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClass =
    "px-4 py-2 font-medium text-gray-700 hover:text-orange-600 transition";

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
        <h1 className="text-xl font-bold text-gray-900"> </h1>
        <div className="flex gap-4">
          <NavLink to="/" className={({ isActive }) => (isActive ? linkClass + " text-orange-600" : linkClass)}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? linkClass + " text-orange-600" : linkClass)}>About Me</NavLink>
          <NavLink to="/work" className={({ isActive }) => (isActive ? linkClass + " text-orange-600" : linkClass)}>My Work</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;