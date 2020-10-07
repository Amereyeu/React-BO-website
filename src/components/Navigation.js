import React, { useState, useContext, useEffect } from "react";
import logo from "../images/logo_w.svg";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

function Navigation({ scrollShop }) {
  const { cart } = useContext(CartContext);

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavigation = () => {
    setIsNavOpen(!isNavOpen);
  };

  const [position, setPosition] = useState("top");

  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      let scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 200) {
        setPosition("moved");
      } else {
        setPosition("top");
      }
    });
  }, []);

  return (
    <>
      <section
        className={`navigation ${isNavOpen ? "black" : ""}`}
        style={{
          backgroundColor:
            position === "top" ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, .9)",
        }}
      >
        <div className="navigation__shop" onClick={scrollShop} >Shop now</div>
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
