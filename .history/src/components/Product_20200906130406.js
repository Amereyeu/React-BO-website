import React, { useState } from "react";


function Product({ product }) {
  const [isChecked, setIsChecked] = useState(false);

  const toggle = () => {
    setIsChecked(!isChecked);   
  };

  return (
    <>
      <div className="product">
        <div className="product__info">
          <img
            className="product__info__image"
            src={product.image}
            alt={product.subtitle}
          />

          <div className="product__info__text">
            <div className="product__info__text__header">
              <h2>{product.title}</h2>
              <h4></h4>
            </div>
   
          </div>
        </div>


      </div>

    </>
  );
}

export default Product;
