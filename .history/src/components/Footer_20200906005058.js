import React from "react";
import logo_small from "../images/logo_small.png";

function Footer() {
  return (
    <>
      <div className="footer">
        <img src={logo_small} alt="B&O" className="footer__logo" />
      </div>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      Find store shipping and return policies and terms privacy
      policy contact us
    </>
  );
}

export default Footer;
