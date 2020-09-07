import React from "react";
import logo_small from "../images/logo_small.png";

function Footer() {
  return (
    <>
      <div className="footer">
        <img src={logo_small} alt="B&O" className="footer__logo" />
      </div>
      <ul>
        <li>customer support </li>
        <li>Find store</li>
        <li>shipping and return</li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      policies and terms privacy policy contact us
    </>
  );
}

export default Footer;
