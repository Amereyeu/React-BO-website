import React, { createContext, useReducer, useEffect } from "react";
import { ProductReducer } from "../reducers/ProductReducer";
import beodata from "../data.json";

const initialState = {
  product: JSON.parse(localStorage.getItem("product")) || [beodata],
};

export const ProductContext = createContext(initialState);

export const ProductContextProvider = (props) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  useEffect(() => {
    localStorage.setItem("product", JSON.stringify(state.product));
  }, [state]);

  function addProduct(product) {
    dispatch({
      type: "ADD_PRODUCT",
      payload: product,
    });
  }

  function editProduct(product) {
    dispatch({
      type: "EDIT_PRODUCT",
      payload: product,
    });
  }

  function removeProduct(id) {
    dispatch({
      type: "REMOVE_PRODUCT",
      payload: id,
    });
  }

  return (
    <ProductContext.Provider
      value={{
        product: state.product,
        dispatch,
        addProduct,
        editProduct,
        removeProduct,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
