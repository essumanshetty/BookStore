import React from "react";
import Logo from "../assets/Logo.jpeg";
function Header() {
  return (
    <div className="shadow py-2 px-1 bg-white">
      <div className="logo_section flex items-center">
        <img src={Logo} alt="Logo" className="h-10"/>
        <span className="inline">Book Store</span>
      </div>
    </div>
  );
}

export default Header;
