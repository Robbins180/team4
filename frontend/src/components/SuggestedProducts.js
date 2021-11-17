import React from "react";
import "../styles/CSS/SuggestedProducts.css";

const SuggestedProducts = (products) => {
  return (
    <div className="sp-card">
      <img
        src={products.product.photo}
        alt={products.product.title}
        className="sp-photos"
      />
    </div>
  );
};

export default SuggestedProducts;
