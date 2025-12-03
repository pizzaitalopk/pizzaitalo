import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  Utensils,
  GalleryHorizontal,
  ShoppingBag,
  Pizza,
} from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinkClasses = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
    ${isActive ? "bg-gray-800 text-white shadow-sm" : "text-gray-200 hover:bg-black/70 hover:bg-black/50 hover:text-white"}`;

  return (
    <nav className="w-full bg-black-gradient-to-b from-black to-black/90 backdrop-blur-xl shadow-lg sticky top-0 z-50 text-white py-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center  text-xl font-extrabold text-amber-400 hover:text-amber-300 transition"
        >
         <img src="logo.png" alt="pizza italo" className="w-18 h-18 rounded-full" /> Pizza Italo
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-3">
          <NavLink to="/menu" className={navLinkClasses}>
            <Utensils className="h-5 w-5" /> Our Menu
          </NavLink>

          <NavLink to="/gallery" className={navLinkClasses}>
            <GalleryHorizontal className="h-5 w-5" /> Gallery
          </NavLink>

          <NavLink to="/order">
            <button className="flex items-center gap-2 ml-4 px-5 py-2 text-sm font-semibold rounded-full bg-red-600 text-white shadow-lg hover:bg-red-700 transition-all ring-2 ring-red-400 hover:scale-105 cursor-pointer">
              <ShoppingBag className="h-5 w-5" /> Order Now
            </button>
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-full text-gray-200 hover:bg-black/70 transition"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-3 space-y-2 border-t border-black bg-black shadow-inner">
          <NavLink to="/menu" className={navLinkClasses} onClick={() => setOpen(false)}>
            <Utensils className="h-5 w-5" /> Our Menu
          </NavLink>

          <NavLink to="/gallery" className={navLinkClasses} onClick={() => setOpen(false)}>
            <GalleryHorizontal className="h-5 w-5" /> Gallery
          </NavLink>

          <NavLink to="/order" onClick={() => setOpen(false)}>
            <div className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-semibold rounded-lg bg-red-600 text-white shadow-lg hover:bg-red-700 transition cursor-pointer">
              <ShoppingBag className="h-5 w-5" /> Order Now
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
