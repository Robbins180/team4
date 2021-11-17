import React from "react";
import '../styles/CSS/Products.css';
import products from '../data/products.json'



const ProductCard = (products) => {
 
 
  return (
      
    
    <div>
      <div className='products-container'>
        <div className='products-box'>
          <div className='name-box'>
              {products.product.title}
            
            </div>
          <div className='img-box'>
            {/* <img url() /> */}
            <img src={products.product.photo} />
          </div>
          <div className='middle-box'>
            
            <div className='description-box'>
              {products.product.description}
            </div>
            <div className='sale-box'>
              <p>${products.product.price}</p>
            </div>
          </div>        
          <div className='bottom-box'>
            <div className='favorite-box'></div>
          </div>  
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
