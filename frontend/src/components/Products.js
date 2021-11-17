import React from "react";
import '../styles/CSS/Products.css';
import "./.././products.json";


const Products = () => {
  return (
    <div>
      <div className='products-container'>
        <div className='products-box'>
          <div className='img-box'>
            <img src={photo} alt={name} />
          </div>
          <div className='middle-box'>
            <div className='name-box'></div>
            <div className='description-box'></div>
            <div className='sale-box'>
               <p>Sale</p>
            </div>
          </div>        
          <div className='bottom-box'>
            <div className='favorite-box'></div>
            <div className='addToCart-box'></div>
          </div>  
        </div>
      </div>
    </div>
  );
};

export default Products;
