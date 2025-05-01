import React from "react";

const NavBar = () => {
  return (
    <>
      
        <div className="bg-[#A67C4D] flex justify-between p-2 border-b-4 col-span-6">
          <a>Library</a>
          <nav className="flex justify-around gap-2">
            <a to="/" href="Home">
              Home
            </a>
            <a to="" href="Browse Books">
              Browse Books
            </a>
            <a to="" href="Add Books">
              Add Books
            </a>
          </nav>
        </div>
      
    </>
  );
};

export default NavBar;
