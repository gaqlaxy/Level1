import React from "react";

export default function Pricing() {
  return (
    <>
      <div className="pricing-section flex mt-20 max-w-[1150px] mx-auto">
        <div className="pricing-1 mt-20 py-8 px-4 w-2/1 ">
          <div className="heading mb-5 ">
            <p className="font-bold text-pulsegreen text-xl ">
              These are what we call the Pulse Basics. They’re what every
              customer gets.
            </p>
          </div>
          <div className="content px-5">
            <ul className="list-disc">
              <li>
                Manage cash flow on a daily, weekly, monthly, or yearly basis
              </li>
              <li>
                Forecast growth with recurring income or expenses that scale
                automatically
              </li>
              <li>Works with any currency</li>
              <li>
                See Money In and Money Out, categorize transactions, and run
                helpful reports
              </li>
              <li>
                Toggle entries and accounts on and off to game out different
                scenarios
              </li>
            </ul>
            <p>Just need the Pulse Basics?</p>
            <p>
              <span>Get them now</span> for $29 per month.
            </p>
          </div>
        </div>
        <div className="pricing-2 bg-white border-[1px] border-solid rounded border-pulsegreen w-3/4 hover:cursor-pointer inline-block">
          <p className="font-bold text-xl bg-pulsegreen text-white text-center">
            Recommended
          </p>
          <div className="pb-8 px-8 flex flex-col justify-center items-center gap-5">
            <div className="heading mt-10 text-center">
              <h2 className="font-bold text-pulsegreen text-5xl">
                Small Business Plan
              </h2>
            </div>
            <p className="mt-3 text-center text-xl tracking-wide text-[#080c16]">
              $59 per month
            </p>
            <a
              href=""
              className="border-2 border-pulsegreen border-none bg-pulsegreen text-[#3e3e3f] font-bold text-xl p-3 pricingbtn"
            >
              Sign Up Now
            </a>
            <p className="uppercase text-[11px] text-[#3e3e3f] font-bold tracking-wider">
              You get pulse basics, plus
            </p>
            <div className="content">
              <ul className="list-disc">
                <li className="mb-4">
                  Manage cash flow across multiple financial accounts
                </li>
                <li className="mb-4">
                  Invite your investors, book keeper, or management team to see
                  reports or manage cash flow
                </li>
                <li className="mb-4">
                  Integrate with QuickBooks Online for more accurate cash flow
                </li>
                <li className="mb-4">
                  Track your actual cash flow alongside your projected cash flow
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pricing-3 mt-20 bg-white h-full  rounded border-pulsegreen w-3/4 hover:cursor-pointer">
          <div className="pb-8 px-8 flex flex-col justify-center items-center gap-5">
            <div className="heading mt-5 text-center">
              <h2 className="font-semibold text-pulsegreen text-4xl">
                Unlock Extra Features
              </h2>
            </div>
            <p className="mt-3 text-center text-xl tracking-wide text-[#080c16]">
              $89 per month
            </p>
            <a
              href=""
              className="border-2 border-pulsegreen border-none bg-pulsegreen text-[#3e3e3f] font-bold text-xl p-3 pricingbtn"
            >
              Try Premium
            </a>
            <p className="uppercase text-[11px] text-[#3e3e3f] font-bold tracking-wider">
              Get it all, plus
            </p>
            <div className="content">
              <ul className="list-disc">
                <li className="mb-4">
                  Manage cash flow across unlimited financial accounts
                </li>
                <li className="mb-4">
                  convert to any currency for localized cash flow reporting and
                  projections
                </li>

                <li>
                  Attach invoices or contracts to your cash flow entries for
                  accountability and auditing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
