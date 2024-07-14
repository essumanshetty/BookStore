import React from "react";
import Logo from "../assets/Logo.jpeg";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="flex justify-between items-center shadow py-2 px-1 bg-white">
      <div className="container-fluid">
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-10 inline-block" />
          <span className=""> Book Store </span>
        </Link>
      </div>

      <div className="">
        <Link to="/view_all_books"
        className="px-2 py-2  
        border border-r-0 border-l-0 border-t-0
        border-b-indigo-500 hover:rounded
        hover:bg-indigo-500 hover:text-white mr-2">
          View Books
        </Link>

        <Link className="px-2 py-2  
        border border-r-0 border-l-0 border-t-0
        border-b-indigo-500 hover:rounded
        hover:bg-indigo-500 hover:text-white mr-2">Add Book</Link>
      </div>
    </div>
  );
}

export default Header;
