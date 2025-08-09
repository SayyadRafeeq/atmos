import Link from "next/link";
import React from "react";
import UserLocation from "./UserLocation";

export default function Navbar() {
  return (
    <header className="bg-blue-sky-gradient top-0 left-0 z-100 w-full px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64">
      <div className="flex justify-between items-center py-2 relative">

        {/* Logo */}
        <div className="w-1/2 md:w-auto">
          <Link href="/">
            <h1 className="text-3xl font-bold text-black">ATMOS</h1>
          </Link>
        </div>

        {/* Toggle checkbox */}
        <input type="checkbox" id="menu-toggle" className="hidden peer" />

        {/* Hamburger icon */}
        <label htmlFor="menu-toggle" className="block md:hidden cursor-pointer z-50">
          <svg
            className="fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </label>

        {/* Menu */}
        <div
          className="hidden peer-checked:block md:block absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none mt-2 md:mt-0"
        >
          <nav className="text-center md:text-left px-6 py-4 md:p-0">
            <ul className="md:flex md:items-center">
              <li className="mb-2 md:mb-0">
                <Link
                  className="py-2 inline-block text-black font-semibold"
                  href="#AboutUs"
                >
                  About Us
                </Link>
              </li>
              <li className="md:ml-4">
                <a
                  className="py-2 inline-block text-black  font-semibold"
                  href="#"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
