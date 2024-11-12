import React from "react";

export default function Pricing() {
  return (
    <>
      <div className="pricing-section flex mt-20 gap-5">
        <div className="pricing-1">
          <div className="heading">
            <p className="font-bold text-pulsegreen text-xl">
              These are what we call the Pulse Basics. They’re what every
              customer gets.
            </p>
          </div>
          <div className="content">
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
        <div className="pricing-2">
          <p className="font-bold text-xl">Recommended</p>
          <div className="heading">
            <h2>Small Business Plan</h2>
          </div>
          <p className="pricing-price">$59 per month</p>
          <a href="">Sign Up Now</a>
          <p className="uppercase text-sm">You get pulse basics, plus</p>
          <div className="content">
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
          </div>
        </div>
        <div className="pricing-3">
          <div className="heading">
            <h2>Unlock Extra Features</h2>
          </div>
          <p className="pricing-price">$89 per month</p>
          <a href="">Try Premium</a>
          <p className="uppercase text-sm">Get it all, plus</p>
          <div className="content">
            <ul className="list-disc">
              <li>Manage cash flow across unlimited financial accounts</li>
              <li>
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
    </>
  );
}
