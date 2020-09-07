import React, { useState } from "react";
import logo from "../images/logo.svg"

function Navigation() {
  return (
    <section className="navigation">
      <div className="navigation__shop">Shop now</div>
      <div className="navigation__logo">
        <img src={logo} alt="logo"/>
      </div>
      <div className="nav">Cart</div>
      <div>0</div>
      <div className="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
}

export default Navigation;
