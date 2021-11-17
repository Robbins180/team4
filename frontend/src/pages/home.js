import React from "react";
import products from "../data/products.json";
import Hero from "../components/Hero";
import SuggestedProducts from "../components/SuggestedProducts";

const Home = () => {
  return (
    <div>
      <Hero />
      <h1 className="sp-title">Popular gifts</h1>
      <div>
        {products.map((product, index) => {
          return <SuggestedProducts product={product} index={index} />;
        })}
      </div>
    </div>
  );
};

export default Home;
