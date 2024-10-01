import React from "react";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer grid-4-cols">
          <div className="footer-heading">
            <h3>Abstract</h3>
            <ul className="footer-list">
              <li>Branches</li>
            </ul>
          </div>

          <div className="footer-heading">
            <h3>Resources</h3>
            <ul className="footer-list">
              <li>Blog</li>
              <li>Help Center</li>
              <li>Release Notes</li>
              <li>Status</li>
            </ul>
          </div>
          <div className="footer-heading">
            <h3>Community</h3>
            <ul className="footer-list">
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Facebook</li>
              <li>Dribble</li>
              <li>Podcast</li>
            </ul>
          </div>
          <div className="footer-heading">
            <h3>Company</h3>
            <ul className="footer-list">
              <li>About Us</li>
              <li>Careers</li>
              <li>Legal</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
