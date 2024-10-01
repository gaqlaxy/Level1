import React from "react";

// fetching data
function FetchingData() {
  fetch("./maincontent.json").then((response) => {
    const data = response.json();
    console.log(data);
  });
}

export default function MainSection() {
  return (
    <>
      <main>
        <div className="main-content">
          <div className="main-items">
            <div className="main-cont">
              <div className="main-item-img">
                <img
                  src="./branch.png"
                  alt="Branch"
                  className="main-item-img"
                />
              </div>
              <div className="main-item-text">
                <h3 className="main-item-heading">Using Abstract</h3>
                <p className="main-item-content">
                  Abstract lets you manage, version, and document your designs
                  in one place.{" "}
                </p>
                <a href="" className="main-item-link">
                  Learn more
                </a>
              </div>
            </div>
            <div className="main-cont">
              <div className="main-item-img">
                <img
                  src="./manage.png"
                  alt="Branch"
                  className="main-item-img"
                />
              </div>
              <div className="main-item-text">
                <h3 className="main-item-heading">Manage your account</h3>
                <p className="main-item-content">
                  Configure your account settings, such as your email, profile
                  details, and password.
                </p>
                <a href="" className="main-item-link">
                  Learn more
                </a>
              </div>
            </div>

            <div className="main-cont">
              <div className="main-item-img">
                <img
                  src="./puzzle.png"
                  alt="Branch"
                  className="main-item-img"
                />
              </div>
              <div className="main-item-text">
                <h3 className="main-item-heading">
                  Manage organizations, teams, and projects
                </h3>
                <p className="main-item-content">
                  Use Abstract organizations, teams, and projects to organize
                  your people and your work.
                </p>
                <a href="" className="main-item-link">
                  Learn more
                </a>
              </div>
            </div>

            <div className="main-cont">
              <div className="main-item-img">
                <img
                  src="./billing.png"
                  alt="Branch"
                  className="main-item-img"
                />
              </div>
              <div className="main-item-text">
                <h3 className="main-item-heading">Manage billing</h3>
                <p className="main-item-content">
                  Change subscriptions and payment details.
                </p>
                <a href="" className="main-item-link">
                  Learn more
                </a>
              </div>
            </div>

            <div className="main-cont">
              <div className="main-item-img">
                <img
                  src="./authenticate.png"
                  alt="Branch"
                  className="main-item-img"
                />
              </div>
              <div className="main-item-text">
                <h3 className="main-item-heading">Authenticate to Abstract</h3>
                <p className="main-item-content">
                  Set up and configure SSO, SCIM, and Just-in-Time provisioning.
                </p>
                <a href="" className="main-item-link">
                  Learn more
                </a>
              </div>
            </div>

            <div className="main-cont">
              <div className="main-item-img">
                <img
                  src="./support.png"
                  alt="Branch"
                  className="main-item-img"
                />
              </div>
              <div className="main-item-text">
                <h3 className="main-item-heading">Abstract support</h3>
                <p className="main-item-content">Get in touch with a human.</p>
                <a href="" className="main-item-link">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <FetchingData /> */}
    </>
  );
}
