import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="flex items-center justify-around m-10 bg-[#080c16] pb-10">
        <div className="p-5">
          <img src="/pulse-logo.svg" alt="" className="mb-16" />
          <a
            href=""
            className="border p-4  bg-pulsegreen border-none font-bold"
          >
            Sign Up for a Free 30-Day Trial
          </a>
        </div>
        <div className="flex p-5 text-white gap-24">
          <div>
            <ul>
              <li className="font-bold mb-4">Product</li>
              <li className="text-pulsegreen font-semibold mb-3 cursor-pointer hover:text-white transition-colors">
                Features
              </li>
              <li className="text-pulsegreen font-semibold mb-3 cursor-pointer hover:text-white transition-colors">
                Pricing
              </li>
              <li className="text-pulsegreen font-semibold cursor-pointer hover:text-white transition-colors">
                Sign Up
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="font-bold mb-4">Company</li>

              <li className="text-pulsegreen font-semibold mb-3 cursor-pointer hover:text-white transition-colors">
                Customer Stories
              </li>
              <li className="text-pulsegreen font-semibold mb-3 cursor-pointer hover:text-white transition-colors">
                About
              </li>
              <li className="text-pulsegreen font-semibold mb-3 cursor-pointer hover:text-white transition-colors">
                Contact
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="font-bold mb-4">Resources</li>
              <li className="text-pulsegreen font-semibold mb-3 cursor-pointer hover:text-white transition-colors">
                Support
              </li>
              <li className="text-pulsegreen font-semibold mb-3 cursor-pointer hover:text-white transition-colors">
                Blog
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
