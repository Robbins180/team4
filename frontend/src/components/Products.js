import React from "react";
import '../styles/CSS/Products.css';
import products from './../..public/products.json'



const Products = () => {
  const getProducts = products.map((p) =>{
    
  })


  return (
    <div>
      <div className='products-container'>
        <div className='products-box'>
          <div className='img-box'>
            {/* <img url() /> */}
            <img src={photo} />
          </div>
          <div className='middle-box'>
            <div className='name-box'>
              {name}
            </div>
            <div className='description-box'>
              {description}
            </div>
            <div className='sale-box'>
              <p>`$ ${price}`</p>
            </div>
          </div>        
          <div className='bottom-box'>
            <div className='favorite-box'></div>
            {/* <div className='addToCart-box'></div> */}
          </div>  
        </div>
      </div>
    </div>
  );
};

export default Products;
