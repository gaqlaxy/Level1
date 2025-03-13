import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";



export default function Navbar() {
  return (
    <>
      <nav
        className="flex justify-between items-center bg-white text-black relative mx-6"
        role="navigation"
      >
        <div className="flex items-center space-x-4">
          <img src="godaddylogo.png" className="w-32" alt="" />
          <div className="flex items-center space-x-3 text-gray-600 text-sm">
            <a href="">Domain names</a>
            <a href="">Websites & Hosting</a>
            <a href="">Commerce</a>
            <a href="">Email & Marketing</a>
            <a href="">Expert Services</a>
            <a href="">More</a>
          </div>
        </div>
        <div className="flex items-center space-x-3 text-gray-800 text-sm">
          <a href="">Help Center</a>
          <div className="flex items-center space-x-1"> 
          <a href="">Sign In</a>
          <IoIosArrowDown />
          </div>
          <a href="" className="text-black"><IoCartOutline className="text-xl" />
          </a>

        </div>
      </nav>
    </>
  );
}
