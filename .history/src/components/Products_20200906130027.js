import React, { useState } from "react";
import data from "../bikes.json";
import Product from "./Product";

function Products() {
  const [data] = useState(bikedata);

  return (
    <>
      <div className="products">
        {data.products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default Products;
