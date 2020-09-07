import React, { useState } from "react";
import plus from "../images/plus.png"

function Product({ product }) {
  const [isChecked, setIsChecked] = useState(false);

  const toggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <div className="product">
        <img
          className="product__image"
          src={product.image}
          alt={product.subtitle}
        />

        <section>
          <h2 className="product__title">{product.title}</h2>
          <h4 className="product__subtitle">{product.subtitle}</h4>
          <img src={plus} alt="add to cart" className="product__plus" />
      </div>
        </section>
    </>
  );
}

export default Product;
