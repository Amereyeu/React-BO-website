import React, { useState } from "react";
import logo from "../images/logo_w.svg";

function Navigation() {
  const [toggle, setToggle] = useState(false);

  const toggleNav = () => {
    setToggle(!toggle);
    console.log(toggle);
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
        className={`navigation__toggle ${toggleNav ? "open" : ""}`}
        onClick={toggleNav}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
}

export default Navigation;
