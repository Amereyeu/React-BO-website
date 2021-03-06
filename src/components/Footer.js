import React from "react";
import logo_small from "../images/logo_small.png";

function Footer() {
  return (
    <div className="footer">
      <img src={logo_small} alt="B&O" className="footer__logo" />
      <ul className="footer__list">
        <li className="footer__list__item">customer support </li>
        <li className="footer__list__item">Find store</li>
        <li className="footer__list__item">shipping and return</li>
        <li className="footer__list__item">policies and terms</li>
        <li className="footer__list__item">privacy policy</li>
        <li className="footer__list__item">contact us</li>
      </ul>

      <ul className="footer__social">
        <li className="footer__social__item">Facebook</li>
        <li className="footer__social__item">Instagram</li>
        <li className="footer__social__item">Youtube</li>
        <li className="footer__social__item">Twitter</li>
        <li className="footer__social__item">Pinterest</li>
      </ul>
    </div>
  );
}

export default Footer;
