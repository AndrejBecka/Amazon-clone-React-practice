import React from 'react';
import './Product.css';
import StarRateIcon from '@material-ui/icons/StarRate';

function Product({ id, title, image, price, rating }) {
    return (
        <div className="product">
           <div className="product__info">
             <p>{title}</p>
             <p className="product__price">
              <strong>{price}</strong>
              <small>€</small>
             </p>
             <div className="product__rating">
               {Array(rating)
                .fill()
                .map((_) => (
                <p><StarRateIcon /></p>
             ))}
            </div> 

            </div>
            <img src={image} alt="" />       
            <button>Add to basket</button>    
        </div>
    );
}

export default Product
