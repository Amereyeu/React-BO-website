import React, { useContext, useEffect } from "react";
import { CartContext } from "../contexts/CartContext";
import { RiCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";

function Cart() {
  const {
    cart,
    removeItem,
    increaseItem,
    decreaseItem,
    total,
    totalPrice,
  } = useContext(CartContext);

  useEffect(() => {
    return totalPrice();
  });

  return (
    <>
    <div className="cart__wrap">
      <h2 className="heading">Shopping cart</h2>

      {cart.length ? (
        <>
          <table className="cart">
            <thead>
              <tr>
                <th>
                  <span className="cart__headers">Image</span>
                </th>
                <th>
                  <span className="cart__headers">Product</span>
                </th>
                <th>
                  <span className="cart__headers">Price</span>
                </th>
                <th>
                  <span className="cart__headers">Quantity</span>
                </th>
                <th>
                  <span className="cart__headers">Total</span>
                </th>
                <th>
                  <span className="cart__headers">&nbsp;</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, i) => (
                <tr key={i}>
                  <td>
                    <img
                      className="cart__image"
                      src={item.image}
                      alt={item.tile}
                    />
                  </td>
                  <td>
                    <Link to={`/detail/${item.id}`}>
                      <h2 className="cart__title">{item.title}</h2>
                    </Link>
                  </td>
                  <td>
                    <p className="cart__prize">${item.price}</p>
                  </td>
                  <td>
                    <div className="cart__amount">
                      <button
                        onClick={() => decreaseItem(item.id)}
                        disabled={item.count < 2}
                      >
                        <span>−</span>
                      </button>

                      <span className="input">{item.count}</span>

                      <button onClick={() => increaseItem(item.id)}>
                        <span>+</span>
                      </button>
                    </div>
                  </td>
                  <td>
                    <p className="cart__total">$ {item.price * item.count}</p>
                  </td>
                  <td>
                    <div
                      className="cart__delete"
                      onClick={() => removeItem(item.id)}
                    >
                      <RiCloseFill />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <table className="summary">
            <tbody>
              <tr>
                <td colSpan="2" className="summary__total">
                  Total: ${total}
                </td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td colSpan="2" style={{ paddingTop: "5rem" }}>
                  <Link to="/checkout" className="checkout__button">
                    Checkout
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      ) : (
        <div className="empty">
          <h2>No items in cart.</h2>
        </div>
      )}
    </div>
    </>
  );
}

export default Cart;
