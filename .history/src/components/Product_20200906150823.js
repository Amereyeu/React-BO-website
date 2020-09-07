import React from "react";
import plus from "../images/plus.png";

function Product({ product }) {
  const bgImage = {
    backgroundImage: `url(${product.image})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    height: "10rem",
    backgroundRepeat: "no-repeat",
    marginBottom: "4rem",
  };


  return (
    <>
      <div className="product" style={bgImage}>
   {/*      <img
          className="product__image"
          src={product.image}
          alt={product.subtitle}
        />

        <section>
          <div>
            <h2 className="product__title">{product.title}</h2>
            <h4 className="product__subtitle">{product.subtitle}</h4>
          </div>
          <img src={plus} alt="add to cart" className="product__plus" />
        </section>
      </div>
    </>
  );
}

export default Product;
