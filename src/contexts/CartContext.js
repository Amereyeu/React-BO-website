import React, { createContext, useEffect, useState } from "react";
import beodata from "../data.json";
import { toast } from "react-toastify";

export const CartContext = createContext();

export const CartContextProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(initialState);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  });

  //increase count in cart
  const increaseItem = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.count += 1;
      }

      setCart([...cart]);
    });
  };

  //decrease count in cart
  const decreaseItem = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }

      setCart([...cart]);
    });
  };

  //calculate total price of all items in cart
  const totalPrice = () => {
    const tp = cart.reduce((price, item) => price + item.price * item.count, 0);

    setTotal(tp);
  };

  //add item to cart
  const addItem = (id) => {
    const check = cart.every((item) => {
      return item.id !== id;
    });

    if (check) {
      const data = beodata.products.filter((product) => {
        return product.id === id;
      });

      setCart([...cart, ...data]);

      toast.success("Item added", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
    } else {
      toast.warn("Item already in cart!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
    }
  };

  //remove item from cart
  const removeItem = (id) => {
    setCart(cart.filter((cart) => cart.id !== id));

    toast.error("Item removed from cart!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        increaseItem,
        decreaseItem,
        totalPrice,
        total,
        addItem,
        removeItem,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
