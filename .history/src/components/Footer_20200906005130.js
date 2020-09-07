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
        <li>policies and terms</li>
        <li>privacy policy</li>
        <li></li>
      </ul>
      
    </>
  );
}

export default Footer;
