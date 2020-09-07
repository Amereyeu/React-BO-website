import React, { useState } from "react";
import Detail from "./Detail";

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
            </div>
   
          </div>
        </div>

        <div className="product__detail" onClick={toggle}>
          <div className="product__detail__bg">
            <div className="product__detail__bg__inner"></div>
          </div>

          <div className="product__detail__info">
            <div className="product__detail__info__price">{product.price}</div>
            <div className="product__detail__info__text">
              <h3>Detail</h3>
            </div>
          </div>
        </div>
      </div>

      <div
        className={` ${isChecked ? "product__all show" : "product__all hide"}`}
      >
        <Detail product={product} toggle={toggle} />
      </div>
    </>
  );
}

export default Product;
