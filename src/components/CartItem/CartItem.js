import React from "react";
import "./CartItem.css";
import { Link } from "react-router-dom";

const CartItem = () => {
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img
          src="http://assets.myntassets.com/assets/images/2310365/2018/2/1/11517487630366-Roadster-Men-Black-Solid-Round-Neck-T-shirt-5871517487630224-1.jpg"
          alt="product_image"
        />
      </div>

      <Link to={`/product/${1111}`} className="cartitem__name">
        <p>Product 1</p>
      </Link>

      <p className="cartitem__price">₹650</p>

      <select className="cartitem__select">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <button className="cartitem__deleteBtn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItem;
