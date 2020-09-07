import React from "react";
import plus from "../images/plus.png";

function Product({ product }) {



  return (
  
      <div className="product" >
       <img
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
    
  );
}

export default Product;
