import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavigation = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <section className="tabs">
      <div className={`tabs-container ${isNavOpen ? "collapse" : ""}`}>
        <Link className="tabs-container__tab" to="/">
          <span>Shop now</span>
        </Link>

        <Link className="tabs-container__tab" to="/faqs">
          <span>Cart</span>
        </Link>

        <Link className="tabs-container__tab" to="/about">
          <span>0</span>
        </Link>

        <div
          className={`nav-toggle ${isNavOpen ? "collapse" : ""}`}
          onClick={toggleNavigation}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
}

export default Navigation;
