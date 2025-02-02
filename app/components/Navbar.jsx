"use client";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-darkGreen text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">Uzbekistan Medi</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10">
          <li>
            <a href="#" className="hover:text-teal-400">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-teal-400">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-teal-400">
              MBBS in Uzbekistan
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-teal-400">
              Universities
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-teal-400">
              Blogs
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-teal-400">
              Gallery
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-teal-400">
              Contact Us
            </a>
          </li>
        </ul>

        {/* Hamburger Icon (Mobile View) */}
        <button
          className="md:hidden text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-darkGreen text-center py-4">
          <li className="py-2">
            <a href="#" className="hover:text-teal-400">
              Home
            </a>
          </li>
          <li className="py-2">
            <a href="#" className="hover:text-teal-400">
              About
            </a>
          </li>
          <li className="py-2">
            <a href="#" className="hover:text-teal-400">
              MBBS in Uzbekistan
            </a>
          </li>
          <li className="py-2">
            <a href="#" className="hover:text-teal-400">
              Universities
            </a>
          </li>
          <li className="py-2">
            <a href="#" className="hover:text-teal-400">
              Blogs
            </a>
          </li>
          <li className="py-2">
            <a href="#" className="hover:text-teal-400">
              Gallery
            </a>
          </li>
          <li className="py-2">
            <a href="#" className="hover:text-teal-400">
              Contact Us
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
