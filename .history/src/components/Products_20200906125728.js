import React, { useState } from "react";
import bikedata from "../bikes.json";
import Product from "./Product";


function Products() {
  const [data] = useState(bikedata);

  return (
    <>
  
      
      <div className="products">
        {data.products.map((product) => (
          <Product key={product.id} bike={bike} />
        ))}
      </div>
    </>
  );
}

export default Products;