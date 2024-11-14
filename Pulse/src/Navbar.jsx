import React from "react";

export default function Navbar() {
  return (
    <>
      <header className="flex justify-between items-center  mt-10 relative max-w-[1150px] mx-auto">
        <div>
          <img src="/pulse-logo.svg" alt="Pulse Logo" />
        </div>
        <div>
          <ul className="flex items-center gap-14 text-pulsegreen font-bold tracking-wide font-worksans">
            <li className="cursor-pointer hover:text-black transition-colors">
              Features
            </li>
            <li className="cursor-pointer hover:text-black transition-colors">
              Customer Stories
            </li>
            <li className="text-black cursor-pointer transition-colors">
              Pricing
            </li>
            <li className="cursor-pointer hover:text-black transition-colors">
              Blog
            </li>
            <li className="border-2 border-solid px-4 py-1 border-pulsegreen signupbtn">
              Sign Up
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
