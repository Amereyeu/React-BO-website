import React, { useState, useContext } from "react";
import logo from "../images/logo_w.svg";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

function Navigation({ scrollProducts }) {
  const { cart } = useContext(CartContext);

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavigation = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <section className={`navigation ${isNavOpen ? "black" : ""}`}>
        <div className="navigation__shop" onClick={scrollProducts}>
          Shop now
        </div>
        <Link to="/" className="navigation__logo">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="/cart" className="navigation__cart">
          Cart
        </Link>
        <div className="navigation__count">{cart.length}</div>
        <div
          className={`navigation__toggle ${isNavOpen ? "open" : ""}`}
          onClick={toggleNavigation}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>
      <div className={`navigation__links ${isNavOpen ? "collapse" : ""}`}>
        <ul>
          <li>Speakers</li>
          <li>Headphones</li>
          <li>Televisions</li>
          <li>Accessories</li>
        </ul>
      </div>
    </>
  );
}

export default Navigation;
