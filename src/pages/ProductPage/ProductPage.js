import React from "react";
import "./ProductPage.css";

const ProductPage = ({ productDataDetails }) => {
  let particularProductDetails;

  const productIdGetter = () => {
    const urlId = window.location.pathname.split("/");
    const urlProductId = urlId[2];
    particularProductDetails = productDataDetails[urlProductId];
  };

  productIdGetter();

  return (
    <div className="productpage">
      <div className="productpage__left">
        <div className="left__image">
          <img src={particularProductDetails.image} alt="product_image" />
        </div>

        <div className="left__info">
          <p className="left__name">{particularProductDetails.name}</p>
          <p>Price: ₹{particularProductDetails.price}</p>
          <p>Description: {particularProductDetails.description}</p>
        </div>
      </div>

      <div className="productpage__right">
        <div className="right__info">
          <p>
            Price:
            <span>₹{particularProductDetails.price}</span>
          </p>

          <p>
            Status:
            <span>In Stock</span>
          </p>

          <p>
            Size
            <select>
              {particularProductDetails.stock.map((currSize) => (
                <option key={currSize.skuId} value={currSize.label}>
                  {currSize.label}
                </option>
              ))}
            </select>
          </p>

          <p>
            <button type="button">Add to Cart</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
