import React, { useState } from "react";
import logo from "./loog"

function Navigation() {
  return (
    <section className="tabs">
      <div>Shop now</div>
      <div>Cart</div>
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