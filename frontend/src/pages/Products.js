import React from "react";
import products from '../data/products.json'
import ProductCard from '../components/ProductCard'

const Products = () => {
  return (
    <div>
    <h1>Products</h1>
    <div>
      {products.map((product, index) => {
        return <ProductCard product={product} key={index} />;
      })}
    </div>
  </div>
  );
};

export default Products;