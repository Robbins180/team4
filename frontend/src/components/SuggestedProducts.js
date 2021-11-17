import React from "react";
import "../styles/CSS/SuggestedProducts.css";

const SuggestedProducts = (products) => {
  return (
    <div className="sp-wrapper">
      <div className="sp-container">
        <img src={products.product.photo} alt={products.product.title} />
      </div>
    </div>
  );
};

export default SuggestedProducts;
