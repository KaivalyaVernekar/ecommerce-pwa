import React from "react";
import "./CartPage.css";

//component
import CartItem from "../../components/CartItem/CartItem";

const CartPage = () => {
  return (
    <div className="cartpage">
      <div className="cartpage__left">
        <h2>Shopping Cart</h2>

        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>

      <div className="cartpage__right">
        <div className="cartpage__info">
          <p>Subtotal (0) items</p>
          <p>₹650</p>
        </div>
        <div>
          <button>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
