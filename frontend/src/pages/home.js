import React from "react";
import products from "../data/products.json";
import Hero from "../components/Hero";
import SuggestedProducts from "../components/SuggestedProducts";
import "../styles/CSS/Home.css";

const Home = () => {
  return (
    <div>
      <Hero />
      <h1 className="sp-title">Popular gifts</h1>
      <div className="sp-container">
        {products.map((product, index) => {
          return <SuggestedProducts product={product} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Home;
