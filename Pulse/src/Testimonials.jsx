import React from "react";

export default function Testimonials() {
  return (
    <>
      <div className="testimonials flex flex-col items-center mt-20 gap-5 mb-44 max-w-[1150px] mx-auto">
        <div className="">
          <img src="/subvert-avatar.png" alt="" />
        </div>
        <div className="testimonial-content text-center">
          <p className="text-2xl tracking-wide text-[#080c16]">
            “Pulse is worth every penny because it empowers business owners with
            critical financial insight and knowledge.”
          </p>
          <p className="mt-4 text-base text-pulsegreen font-bold tracking-wide uppercase">
            Subvert Marketing, Inc.
          </p>
        </div>
      </div>
    </>
  );
}
