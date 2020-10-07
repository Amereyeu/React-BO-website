import React, { useContext } from "react";
import plus from "../images/plus.png";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

function Product({ product }) {
  const { addItem } = useContext(CartContext);

  return (
    <div className="product">
      <img
        className="product__image"
        src={product.image}
        alt={product.subtitle}
      />

      <section>
        <div>
          <Link to={`/detail/${product.id}`}>
            <h2 className="product__title">{product.title}</h2>
          </Link>
          <h4 className="product__subtitle">{product.subtitle}</h4>
        </div>
        <img
          src={plus}
          alt="add to cart"
          className="product__plus"
          onClick={() => addItem(product.id)}
        />
      </section>
    </div>
  );
}

export default Product;
