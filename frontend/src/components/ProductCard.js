import React from "react";
import '../styles/CSS/Products.css';




const ProductCard = (products) => {
  
 
 
  return (
      
    
    <div>
      <div className='products-container'>
        <div className='products-box'>
        <div className='top-box'>  
          <div className='name-box'>
              {products.product.title}          
           </div>
             <div className='description-box'>
              {products.product.description}
             </div>
            </div>
            <div className='img-box'>
             
              <img src={products.product.photo}  alt={products.product.title}/>
            </div>
         
            <div className='sale-box'>
              <p className='bfs'>BLACK FRIDAY SPECIAL</p>
              <p>${products.product.price}</p>
            </div>
            <button className='buy-btn'>BUY</button>
          </div>        
          <div className='bottom-box'>
            <div className='favorite-box'></div>
          </div>  
        
      </div>
    </div>
  );
};

export default ProductCard;
