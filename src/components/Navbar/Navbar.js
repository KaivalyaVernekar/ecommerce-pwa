import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ click }) => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h2>Shoppy</h2>
      </div>

      <ul className="navbar__links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart <span className="cartlogo__badge">0</span>
            </span>
          </Link>
        </li>
      </ul>

      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
