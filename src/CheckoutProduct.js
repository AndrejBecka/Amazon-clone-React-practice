import React from 'react';
import StarRateIcon from '@material-ui/icons/StarRate';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, title, rating, image, price}) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () =>{
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                  <strong>{price}</strong>
                  <small>€</small>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                     .fill()
                     .map((_) => (
                     <p><StarRateIcon /></p>
                    ))}
                </div> 

                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    );
}

export default CheckoutProduct;
