import React, { useState } from "react";
import logo from "../images/logo_w.svg";

function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavigation = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <section className="navigation">
      <div className="navigation__shop">Shop now</div>
      <div className="navigation__logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navigation__cart">Cart</div>
      <div className="navigation__count">0</div>
      <div
        className={`navigation__toggle ${isNavOpen ? "open" : ""}`}
        onClick={toggleNavigation}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`navigaton__links ${isNavOpen ? "collapse" : ""}`}>
        <ul>
          <li>Speakers</li>
          <li>Headphones</li>
          <li>Televisions</li>
          <li>Accessories</li>
        </ul>
      </div>
    </section>
  );
}

export default Navigation;
