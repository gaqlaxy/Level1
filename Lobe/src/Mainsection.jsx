import React from "react";

export default function Mainsection() {
  return (
    <>
      <div className="hero-section">
        <div className="hero-heading">
          <h1>
            Lobe <span className="hero-secondary-heading">Tour</span>
          </h1>
        </div>
        <div className="hero-text">
          <h3 className="hero-secondary-text">
            Build your first machine learning model in ten
            <br /> minutes. No code or experience required.
          </h3>
        </div>
        <div className="video-content">
          <img src="./Video.jpg" alt="" className="video-img" />
        </div>
        <div className="hero-heading secondary">
          <h1>
            Train your app <br /> with Lobe
          </h1>
        </div>
        <div className="nav-button secondary-btn">
          <button className="nav-btn ">Download</button>
        </div>
      </div>
    </>
  );
}
