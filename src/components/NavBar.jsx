import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="bg-[#A67C4D] flex justify-between p-2 border-b-4 col-span-6">
        <Link className="hover:scale-105 font-bold text-2xl" to="/">
          Open Library
        </Link>
        <nav className="flex justify-around gap-2">
          <Link
            className="text-[20px] rounded-lg hover:shadow-2xl hover:translate-0.5"
            to="/">
            Home
          </Link>
          <Link
            className="text-[20px] rounded-lg hover:shadow-2xl hover:translate-0.5"
            to="/browse">
            Browse Books
          </Link>
          <Link
            className="text-[20px] rounded-lg hover:shadow-2xl hover:translate-0.5"
            to="/add">
            Add Books
          </Link>
          <Link
            className="text-[20px] rounded-lg hover:shadow-2xl hover:translate-0.5"
            to="/about">
            About
          </Link>
          <Link
            className="text-[20px] rounded-lg hover:shadow-2xl hover:translate-0.5"
            to="/contact">
            Contact Us
          </Link>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
