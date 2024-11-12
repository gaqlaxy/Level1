import React from "react";

export default function Navbar() {
  return (
    <>
      <header className="flex justify-between items-center  mt-10 relative">
        <div>
          <img src="/pulse-logo.svg" alt="Pulse Logo" />
        </div>
        <div>
          <ul className="flex items-center gap-14 text-pulsegreen font-bold tracking-wide font-worksans">
            <li className="cursor-pointer hover:text-black">Features</li>
            <li className="cursor-pointer hover:text-black">
              Customer Stories
            </li>
            <li className="text-black cursor-pointer">Pricing</li>
            <li className="cursor-pointer hover:text-black">Blog</li>
            <li className="border-2 border-solid px-4 py-1 border-pulsegreen signupbtn">
              Sign Up
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
