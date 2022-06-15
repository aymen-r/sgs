import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer1">
        <h1>CONNECT WITH US</h1>
        <img src="/img/social-footer.png" alt="" />
        <p>© 2022 SGS SA</p>
      </div>
      <div className="footer2">
        <ul>
          <li>Terms and Conditions</li>
          <li>Terms of Access</li>
          <li>Privacy</li>
          <li>Cookies</li>
          <li>Office Directory</li>
          <li>Sitemap</li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
