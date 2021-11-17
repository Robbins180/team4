import React from "react";
import "../styles/CSS/Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <h1>Find your perfect gift</h1>
      <Link to="/shop">
        <button>Shop All Products</button>
      </Link>
    </div>
  );
};

export default Hero;
