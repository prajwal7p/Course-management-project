import React from "react";
import NavLinks from "./NavLinks";
import Logo from "./Logo";

const NavContainer = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Logo />
        <NavLinks />
      </div>
    </nav>
  );
};

export default NavContainer;