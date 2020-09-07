import React, { useState } from "react";


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

        <div>
          <div className="product__info__text__header">
            <h2 className="product__title">{product.title}</h2>
            <h4 className="product__title">{product.subtitle}</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
