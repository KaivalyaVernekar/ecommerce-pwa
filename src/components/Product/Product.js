import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Product = ({
  image,
  productId,
  name,
  description,
  price,
  ratings,
  imageURL,
}) => {
  return (
    <div className="box">
      <div className="slide-img">
        <LazyLoadImage
          className="image"
          effect="blur"
          alt="product_image"
          src={image}
        />
        <div className="overlay">
          <Link to={`/product/${productId}`} className="buy-btn">
            Buy Now
          </Link>
        </div>
      </div>
      <div className="detail-box">
        <div className="type">
          <a href="/">{description}</a>
          <span>Ratings: {ratings.toFixed(1)}</span>
        </div>
        <a href="/" className="price">
          ₹{price}
        </a>
      </div>
    </div>
  );
};

export default Product;
