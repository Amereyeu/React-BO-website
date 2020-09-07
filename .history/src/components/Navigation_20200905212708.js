import React, { useState } from "react";


function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavigation = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <section className="tabs">
      <div>Shop now</div>
      <div>Cart</div>
      <div>0</div>
      <div
        className="nav-toggle"}

      >
        <span></span>
        <span></span>
        <span></span>
      </div>


    </section>
  );
}

export default Navigation;
