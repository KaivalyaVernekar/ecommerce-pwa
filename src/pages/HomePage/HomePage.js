import React, { useEffect, useState } from "react";
import "./HomePage.css";

// Components
import Product from "../../components/Product/Product";

const HomePage = ({ homeData }) => {
  const [items, setItems] = useState([]);
  const [searchItems, setSearchItems] = useState("");

  useEffect(() => {
    const itemDisplay = () => {
      setItems(homeData);
    };
    itemDisplay();
  });

  const handleChange = (e) => {
    setSearchItems(e.target.value);
    console.log(e);
  };

  const filteredItems = items.filter((item) => {
    const filteringItems = item.description
      .toLowerCase()
      .includes(searchItems.toLowerCase());
    return filteringItems;
  });

  return (
    <div className="homepage">
      <div className="homepage__container">
        <h2 className="homepage__title">Latest Products....</h2>

        <input
          className="homepage__inputfield"
          type="search"
          placeholder="Search Items"
          onChange={handleChange}
        />
      </div>

      <div className="homepage__products">
        {filteredItems.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            image={product.image}
            productId={product.id}
            ratings={product.ratings}
            landingPageURL={product.imageURL}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
