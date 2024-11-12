import React from "react";

export default function Faq() {
  return (
    <>
      <div className="mt-7 mb-14">
        <h1 className="text-3xl font-extrabold mb-6">FAQ</h1>

        <div className="grid grid-cols-2 gap-y-14 gap-x-5">
          <div className="faq1">
            <h3 className="text-xl font-bold ">
              How does the 30-day free trial work?
            </h3>
            <p className="text-[#080c16] font-rubik tracking-wide">
              You can use Pulse absolutely free for 30 days. After 30 days, we
              will charge the credit card you used when you sign up. If you
              choose to cancel your account before your trial ends, your card
              will not be charged.
            </p>
          </div>

          <div className="faq2">
            <h3 className="text-xl font-bold">
              If I upgrade an existing account, do I get another free trial?
            </h3>
            <p className="text-[#080c16] font-rubik tracking-wide">
              Brand new accounts are the only ones eligible for a 30-day free
              trial. If you upgrade an existing account, your credit card will
              be billed the new amount on the date of your next billing cycle.
            </p>
          </div>

          <div className="faq3">
            <h3 className="text-xl font-bold">
              What is a “Financial Account”?
            </h3>
            <p className="text-[#080c16] font-rubik tracking-wide">
              Financial Accounts are a grouping of income and expense items that
              can be used for tracking or reporting purposes. They’re designed
              to be flexible and can be used to differentiate between bank
              accounts, companies, individuals or between personal and business
              entries.
            </p>
          </div>

          <div className="faq4">
            <h3 className="text-xl font-bold">
              Do I have to commit to a long-term contract?
            </h3>
            <p className="text-[#080c16] font-rubik tracking-wide">
              No. There is no contract when you use Pulse, other than agreeing
              to our Terms of Service.
            </p>
          </div>

          <div className="faq5">
            <h3 className="text-xl font-bold">
              Will I be able to cancel my account if I don’t use Pulse?
            </h3>
            <p className="text-[#080c16] font-rubik tracking-wide">
              Yes – you can cancel your account at any time. To cancel your
              account, go to your billing page and click on “Please cancel my
              account” at the bottom of the page. The account owner is the only
              one who can cancel an account. An email request to delete an
              account is not considered cancellation.
            </p>
          </div>

          <div className="faq6">
            <h3 className="text-xl font-bold">
              What types of payments do you accept?
            </h3>
            <p className="text-[#080c16] font-rubik tracking-wide">
              We accept payments made online using Visa, Mastercard, Discover,
              and American Express.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
