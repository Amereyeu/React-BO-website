import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";

export const ProductDetail = (route) => {
  const [data, setData] = useState("");
  const { product } = useContext(ProductContext);
  const currentProductId = route.match.params.id;

  useEffect(() => {
    const productId = currentProductId;
    const selectedProduct = product[0].products.find(
      (item) => item.id === parseInt(productId)
    );

    setData(selectedProduct);

    console.log("selected product:", selectedProduct);

    // eslint-disable-next-line
  }, []);

  console.log("data:", data.size);

  return (
    <>
      <div className="product__detail">
        <div className="product__detail__left">
        <Link to="/" className="button button--back">Back</Link>
          <img
            className="product__detail__left__image"
            src={data.image}
            alt={data.subtitle}
          />
        </div>

        <div className="product__detail__right">
          <h2 className="product__detail__right__title">{data.title}</h2>

          <h4 className="product__detail__right__subtitle">{data.subtitle}</h4>

          <p className="product__detail__right__text">{data.text}</p>

          <div className="product__detail__right__prize">${data.prize}</div>

          <div className="product__detail__right__availability">
            {data.availability > 0 ? (
              <p className="green">In stock - {data.availability} pcs</p>
            ) : (
              <p className="red">Out of stock</p>
            )}
          </div>
          {data.size}
        </div>

        {/* {data.colors.name.map(color => 
           <div>{color}</div>
        )} */}
      </div>
    </>
  );
};

export default ProductDetail;
