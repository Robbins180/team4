import React from "react";
import "../styles/CSS/SuggestedProducts.css";

const SuggestedProducts = (props) => {
  //   const { products } = props;

  // const suggestedProducts = () => {
  //   return products.map((product) => (
  //     <div>
  //       <img src="" />
  //     </div>
  //   ));
  // };

  return (
    <div className="sp-wrapper">
      <h1 className="sp-title">Popular gifts</h1>
      <div className="sp-container">Products</div>
    </div>
  );
};

export default SuggestedProducts;
