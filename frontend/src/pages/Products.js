import React from "react";
import Searchbar from '../components/Searchbar'
import products from '../data/products.json'
import ProductCard from '../components/ProductCard'
import '../styles/CSS/Products.css'; 



const Products = () => {
  return (
    <div className="product-list">
      {/* <h1>Products</h1> */}
      <Searchbar />
      <div>
          {products.map((product, index) => {
          return <ProductCard product={product} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Products;