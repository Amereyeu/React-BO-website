import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavigation = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <section className="tabs header">
      <div className="mobile-container">
        <div
          className={`nav-toggle ${isNavOpen ? "open" : ""}`}
          onClick={toggleNavigation}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`tabs-container ${isNavOpen ? "collapse" : ""}`}>
          <Link className="tabs-container__tab" to="/">
            <span>Shop now</span>
          </Link>
          <Link className="tabs-container__tab" to="/bikes">
            <span>Bikes</span>
          </Link>

          <Link className="tabs-container__tab" to="/faqs">
            <span>Cart</span>
          </Link>

          <Link className="tabs-container__tab" to="/about">
            <span>0</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Navigation;
