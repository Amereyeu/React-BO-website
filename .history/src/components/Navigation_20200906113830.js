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

      <div className={`tabs-container ${isNavOpen ? "collapse" : ""}`}>
        <Link className="tabs-container__tab" to="/">
          <span>Home</span>
        </Link>
        <Link className="tabs-container__tab" to="/bikes">
          <span>Bikes</span>
        </Link>

        <Link className="tabs-container__tab" to="/faqs">
          <span>FAQ</span>
        </Link>

        <Link className="tabs-container__tab" to="/about">
          <span>About us</span>
        </Link>
      </div>
    </section>
  );
}

export default Navigation;
