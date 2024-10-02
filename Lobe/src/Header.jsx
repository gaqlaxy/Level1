import React from "react";

export default function Header() {
  return (
    <>
      <header>
        <div className="header">
          <div className="nav-logo">
            <img src="./lobeaisvg.svg" alt="" className="mainlogo" />
          </div>
          <div className="nav-menu">
            <ul className="nav-ul">
              <li>Overview</li>
              <li>Examples</li>
              <li>Tour</li>
              <li>Blog</li>
              <li>Help</li>
            </ul>
          </div>
          <div className="nav-button">
            <button className="nav-btn">Download</button>
          </div>
        </div>
      </header>
    </>
  );
}
