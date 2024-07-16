import React from "react";
import Logo from "../assets/Logo.jpeg";
import { Link } from "react-router-dom";
function Header() {
  return (
    <nav className="bg-gray-800 sticky top-0">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon Menu */}
              <i className="fa-solid fa-bars text-white text-2xl"></i>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
            <Link to="/">
              <div className="flex flex-shrink-0 items-center">
                <img className="h-8 w-auto" src={Logo} alt="Your Company" />
                <span className="text-white">Book Store</span>
              </div>
            </Link>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                  to="/view_all_books"
                  className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-gray-500"
                >
                  View All Books
                </Link>
                <Link
                  to="/add_book"
                  className="rounded-md px-3 py-2 text-sm bg-gray-900  font-medium hover:bg-gray-500 text-white"
                >
                  Add Book
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link
            to="/view_all_books"
            className="block rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-gray-500"
          >
            View All Books
          </Link>
          <Link
            to="/add_book"
            className="block rounded-md px-3 py-2 text-sm bg-gray-900  font-medium hover:bg-gray-500 text-white"
          >
            Add Book
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
