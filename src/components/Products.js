import React, { useContext } from "react";
import Product from "./Product";
import { ProductContext } from "../contexts/ProductContext";

function Products() {
  const { product } = useContext(ProductContext);

  return (
    <div className="products">
      {product[0].products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Products;
