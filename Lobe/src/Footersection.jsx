import React from "react";

export default function Footersection() {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="footer-company">
            <figure className="footer-logo">
              <img src="./lobeaisvg.svg" alt="" className="mainlogo" />
            </figure>
            <div className="footer-content">
              <ul className="footer-ul copyright-links">
                <li>A Product by Microsoft</li>
                <li>All rights reserved</li>
                <li>Microsoft 2021</li>
              </ul>
            </div>
          </div>
          <div className="footer-about">
            <div className="footer-heading">
              <h3>About</h3>
            </div>
            <ul className="footer-ul">
              <li>Download</li>
              <li>Overview</li>
              <li>Examples</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="footer-general">
            <div className="footer-heading">
              <h3>General</h3>
            </div>
            <ul className="footer-ul">
              <li>Notice</li>
              <li>License</li>
              <li>Press Inquiry</li>
              <li>Press Images</li>
            </ul>
          </div>
          <div className="footer-resources">
            <div className="footer-heading">
              <h3>Resources</h3>
            </div>
            <ul className="footer-ul">
              <li>Heko</li>
              <li>Tour</li>
              <li>Contact</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div className="footer-social">
            <figure>
              <img src="./message.svg" alt="" className="footer-sociallogo" />
            </figure>
            <figure>
              <img src="./twitter.svg" alt="" className="footer-sociallogo" />
            </figure>
            <figure>
              <img src="./youtube.svg" alt="" className="footer-sociallogo" />
            </figure>
          </div>
        </div>
      </footer>
    </>
  );
}
